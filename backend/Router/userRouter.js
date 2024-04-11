const express = require("express");

const router = express.Router();

const authController = require("../Controller/AuthController");

router.post("/signup", authController.signup);
router.post("/login", authController.login);
// router.get("/logout", logout);
router.post("/forgotPassword", authController.forgotPassword);
router.patch("/resetPassword/:token", authController.resetPassword);

// Protect all routes that come after this middleware
// router.use(authUser);

// router.patch("/updateMyPassword", updateMyPassword);
// router.get("/me", getMe, getSingleUser);
// router.patch("/updateMe", uploadUserPhoto, resizeUserPhoto, updateMe);
// router.delete("/deleteMe", deleteMe);

// router.route("/").get(getAllUsers).post(createUser);
// router
//   .route("/:id")
//   .get(getSingleUser)
//   .patch(filteredBody, updateUser)
//   .delete(deleteUser);

module.exports = router;
