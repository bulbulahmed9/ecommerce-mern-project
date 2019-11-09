const regValidator = require("../validator/registerValidator");
const loginValidator = require("../validator/loginValidator");
const User = require("../models/User.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const config = require("config");
const validate = require("validator");

// sign up

const signUp = async (req, res) => {
  let { name, email, password } = req.body;
  let validate = regValidator({ name, email, password });
  if (!validate.isValid) {
    return res.status(400).json(validate.error);
  }
  try {
    // See if user exists
    let user = await User.findOne({ email });
    if (user) {
      return res.send("User Already Exist");
    }

    user = new User({
      name,
      email,
      password
    });

    // Encrypt Password
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);

    await user.save();

    // Return json web token
    const payload = {
      user: {
        id: user.id
      }
    };
    jwt.sign(
      payload,
      config.get("jwtSecret"),
      { expiresIn: "2h" },
      (err, token) => {
        if (err) throw err;
        res.json({ token });
      }
    );
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

// login

const login = async (req, res) => {
  let { email, password } = req.body;
  let validate = loginValidator({ email, password });
  if (!validate.isValid) {
    return res.status(400).json(validate.error);
  }
  try {
    // See if user exists
    let user = await User.findOne({ email });
    if (!user) {
      return res.send("Invalid Credentials");
    }

    // check password
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.json({ message: "Invalid credentials" });
    }

    // Return json web token
    const payload = {
      user: {
        id: user.id
      }
    };
    jwt.sign(
      payload,
      config.get("jwtSecret"),
      { expiresIn: "2h" },
      (err, token) => {
        if (err) throw err;
        res.json({ token });
      }
    );
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

// get user profile

const userProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

// update profile
// when first user created then it works, not work for 2nd user.
const updateProfile = async (req, res) => {
  const { name, email } = req.body;
  try {
    const updateData = {};
    // updateData.user = req.user.id;
    if (!name) {
      return res.send("Name is required");
    } else {
      updateData.name = name;
    }
    if (!email) {
      return res.send("Email is required");
    } else if (!validate.isEmail(email)) {
      return res.send("Please Provide a valid email");
    }
    updateData.email = email;
    console.log(updateData);

    await User.findOneAndUpdate(req.user.id, { $set: updateData });
    let updateUser = await User.findById(req.user.id);
    return res.json(updateUser);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

// Delete User

const deleteUser = async (req, res) => {
  let user = await User.findByIdAndRemove(req.user.id);
  res.send("account deleted");
};

module.exports = { signUp, login, userProfile, updateProfile, deleteUser };
