const path = require("path");
const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const { createProxyMiddleware } = require("http-proxy-middleware");

const AppError = require("./utilis/appError");
const globalErrorHandler = require("./Controller/errorController");
// const tourRouter = require('./router/tourRouter');
const userRouter = require("./Router/userRouter");
// const reviewRouter = require('./router/reviewRouter');
// const viewRouter = require('./router/viewRouter');
// const bookingRouter = require('./router/bookingRouter');

const app = express();
app.use(cors());
app.use(express.json());
// for parsing data from url when we send it to via form action='' and method='post' with name attribute input like we do in php
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// For proxy middleware
// app.use(
//   "/api",
//   createProxyMiddleware({
//     target: "http://localhost:3000/",
//     changeOrigin: true,
//   })
// );

// Using Router
app.use("/api/v1/users", userRouter);

// for wrong routes
app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);

module.exports = app;
