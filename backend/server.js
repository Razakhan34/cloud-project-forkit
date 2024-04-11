const dotenv = require("dotenv");
const mongoose = require("mongoose");
const connectDB = require("./config/DB.js");
dotenv.config({ path: "./config/config.env" });
const app = require("./app");

// DATABASE CONNECTION
connectDB();

// START SERVER
const port = 5000;
app.listen(port, () => {
  console.log(`Server is running on ${port} port`);
});
