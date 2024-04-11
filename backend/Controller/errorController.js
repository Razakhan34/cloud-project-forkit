const AppError = require("../utilis/appError");

const sendErrorDev = (err, req, res) => {
  // FOR API
  if (req.originalUrl.startsWith("/api")) {
    return res.status(err.statusCode).json({
      status: err.status,
      error: err,
      message: err.message,
      stack: err.stack,
    });
  }
  // // FOR RENDERED WEBSITE
  // console.error("Error 💣" + err);
  // return res.status(err.statusCode).render("error", {
  //   title: "Something went wrong!!",
  //   msg: err.message,
  // });
};

const sendErrorProd = (err, req, res) => {
  // A) FOR API
  if (req.originalUrl.startsWith("/api")) {
    // A1) Operational , trusted error : send message to the client
    if (err.isOperational) {
      return res.status(err.statusCode).json({
        status: err.status,
        message: err.message,
      });
    }

    // A2) Programming or unknown error : don't leak to the client
    // LOG Error
    console.error("Error 💣" + err);

    // Send Generic message
    return res.status(500).json({
      status: "error",
      message: "Something went very wrong!",
    });
    // B) FOR RENDERED WEBSITE
  } else {
    // B1) Operational , trusted error : send message to the client
    if (err.isOperational) {
      return res.status(err.statusCode).render("error", {
        title: "Something went wrong!!",
        msg: err.message,
      });
    }
    // B2 Programming or unknown error : don't leak to th e client
    // LOG Error
    console.error("Error 💣" + err);

    // Send Generic message
    res.status(err.statusCode).render("error", {
      title: "Something went wrong!!",
      msg: "Please try again later",
    });
  }
};

module.exports = (err, req, res, next) => {
  // console.log(err.stack);
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "error";

  if (process.env.NODE_ENV === "development") {
    if (err.name === "CastError") {
      const message = `Invalid ${err.path} : ${err.value}`;
      err = new AppError(message, 400);
    }
    if (err.code === 11000) {
      const [key, value] = Object.entries(err.keyValue).flat();
      const message = `Duplicate field value : ${value} .This ${key} is Already Exit. please enter another value`;
      err = new AppError(message, 400);
    }
    if (err.name === "ValidationError") {
      const value = Object.values(err.errors).map(
        (currError) => currError.message
      );
      const message = `Invalid Input data. ${value.join(". ")}`;
      err = new AppError(message, 400);
    }
    if (err.name === "JsonWebTokenError") {
      const message = `Invalid token. please log in again!!`;
      err = new AppError(message, 401);
    }
    if (err.name === "TokenExpiredError") {
      const message = "Your token has expired. please login again";
      err = new AppError(message, 401);
    }
    sendErrorDev(err, req, res);
  }
};
