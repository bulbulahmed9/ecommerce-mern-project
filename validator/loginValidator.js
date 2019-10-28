const validate = require("validator");

const loginValidator = user => {
  let error = {};

  if (!user.email) {
    error.email = "Please Provide Your Email";
  }

  if (!user.password) {
    error.password = "Please Provide a Password";
  }
  return {
    error,
    isValid: Object.keys(error).length === 0
  };
};

module.exports = loginValidator;
