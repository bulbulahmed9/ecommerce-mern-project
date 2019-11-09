const router = require("express").Router();
const auth = require("../../middleware/auth");

const {
  signUp,
  login,
  userProfile,
  updateProfile,
  deleteUser
} = require("../../controller/user.controller");

// @route   POST api/users/signup
// @description   Register User
// @access  public

router.post("/signup", signUp);

// @route   GET api/users/login
// @description  Login User
// @access  public

router.post("/login", login);

// @route   GET api/users/profile
// @description   Load User Data
// @access  Private

router.get("/profile", auth, userProfile);

// @route   PUT api/users/updateprofile
// @description   Update User Data
// @access  Private

router.put("/updateprofile", auth, updateProfile);

// @route   DELETE api/users/deleteuser
// @description   Delete User
// @access  Private

router.delete("/deleteuser", auth, deleteUser);

module.exports = router;
