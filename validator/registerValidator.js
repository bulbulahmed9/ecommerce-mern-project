const validate = require("validator");

const regValidator = user => {
  let error = {};

  if (!user.name) {
    error.name = "Please Provide Your Name";
  }

  if (!user.email) {
    error.email = "Please Provide Your Email";
  } else if (!validate.isEmail(user.email)) {
    error.email = "Please Provide a Valid Email";
  }

  if (!user.password) {
    error.password = "Please Provide a Password";
  } else if(user.password.length < 6) {
    error.password = "Password Must be Greater or Equal to 6 Character"
  }

  return {
      error,
      isValid: Object.keys(error).length === 0
  }

};

module.exports = regValidator;