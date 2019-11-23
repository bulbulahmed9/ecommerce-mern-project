import React, { useState, Fragment } from "react";
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { login } from '../actions/authAction'
import Alert from '../components/Alert'


const Login = ({ login, isAuthenticated }) => {
  const [ formData, setFormData ] = useState({
    email: "",
    password: ""
  });

  const { email, password } = formData;

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async e => {
    e.preventDefault();
    login(email, password)
  }

  if(isAuthenticated){
    return <Redirect to="/profile" />
  }

  return (
    <Fragment>
      <form className="form" onSubmit={e => onSubmit(e)}>
        <h3>Log In Here</h3>
          <Alert />
        <fieldset>
          <legend>Form basic info</legend>
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={email}
            onChange={e => onChange(e)}
          /> <br />
          <input
            type="password"
            placeholder="password"
            name="password"
            value={password}
            onChange={e => onChange(e)}
          /> 
        </fieldset>
        <button type="submit">Log in</button>
      </form>
      <p className="login-footer">
          Don't have an account ? <Link to="/register">Register Here</Link>
      </p>
    </Fragment>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
}

const mapStateToProps = state => ({
  isAuthenticated : state.authReducer.isAuthenticated
})

export default connect(mapStateToProps, { login })(Login);
