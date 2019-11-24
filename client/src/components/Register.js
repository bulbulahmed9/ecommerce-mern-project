import React, { Fragment, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { setAlert } from "../actions/alertAction";
import { register } from "../actions/authAction";
import Alert from '../components/Alert'

import PropTypes from "prop-types";

const Register = ({ setAlert, register, isAuthenticated }) => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = formData;

  
  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async e => {
    e.preventDefault();
    if(name == ""){
      setAlert("Please Enter Your name", "danger")
    }
    if(email == ""){
      setAlert("Please Enter Your Email", "danger")
    }
    if(password == ""){
      setAlert("Please Enter Your Password", "danger")
    }
    if(password2 == ""){
      setAlert("Please enter confirm password", "danger")
    }
    else if (password !== password2) {
      setAlert("Passwords do not match", "danger");
    } else {
      register({ name, email, password });
    }
  };

  if (isAuthenticated) {
    return <Redirect to="/profile" />;
  }

  return (
    <Fragment>
      <form onSubmit={e => onSubmit(e)}>
        <h3>Sign Up Form</h3>
          <Alert />
        <fieldset>
          <legend>Form basic info</legend>
          {/* {  !name && <span>Please Enter Your name</span> } */}
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={name}
            onChange={e => onChange(e)}
          /> <br />
          {/* { !email && <span>Please Enter Your Email</span> } */}
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={email}
            onChange={e => onChange(e)}
          /> <br />
          {/* { !password && <span>Please Enter Your Password</span> } */}
          <input
            type="password"
            placeholder="password"
            name="password"
            value={password}
            onChange={e => onChange(e)}
          /> <br />
          {/* { !password2 && <span>Please Enter Confirm Password</span> } */}
          <input
            type="password"
            placeholder="Confirm Password"
            name="password2"
            value={password2}
            onChange={e => onChange(e)}
          />
        </fieldset>
        <button type="submit">Sign Up</button>
      </form>
      <p className="reg-footer">
        Already have an account ? <Link to="/login"> Log In</Link>
      </p>
    </Fragment>
  );
};

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.authReducer.isAuthenticated,
  // alerts: state.alertReducer
});

export default connect(mapStateToProps, { setAlert, register })(Register);
