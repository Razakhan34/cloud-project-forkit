const crypto = require("crypto");
const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please tell us your name"],
    trim: true,
    minlength: [3, "Name must have atleast 3 character long"],
    maxlength: [40, "Name must have atmost 40 charcter long"],
  },
  email: {
    type: String,
    required: [true, "Please provide a email"],
    trim: true,
    unique: true,
    validate: {
      validator(value) {
        return validator.isEmail(value);
      },
      message: "Email is not valid",
    },
  },

  password: {
    type: String,
    required: [true, "Please provide a password"],
    select: false,
  },

  resetPasswordToken: String,
  resetPasswordExpire: Date,
});

// middleware for hashing user password before saving to database
userSchema.pre("save", async function (next) {
  // this only work if we are modifying our password
  if (!this.isModified("password")) return next();
  // THis will hash the password with cost of 12
  this.password = await bcrypt.hash(this.password, 12);
  next();
});

// check user password match with hash bcrypt password
userSchema.methods.verifyPassword = async function (
  candidatePassword,
  userPassword
) {
  // this.password (we can't use because user password is select false in modal)
  return await bcrypt.compare(candidatePassword, userPassword);
};

// generating jwt token
// secret code must be or above 32 chracter long
userSchema.methods.generateAuthToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

// Generate random reset password token for forget password
userSchema.methods.createResetPasswordToken = function () {
  const resetToken = crypto.randomBytes(32).toString("hex");

  const hashResetToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");
  const resetTokenExpire = Date.now() + 10 * 60 * 1000;
  this.resetPasswordToken = hashResetToken;
  this.resetPasswordExpire = resetTokenExpire;
  return resetToken;
};

const User = mongoose.model("User", userSchema);
module.exports = User;
