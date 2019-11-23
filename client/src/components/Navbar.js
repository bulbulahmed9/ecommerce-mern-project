import React, { Fragment } from "react";
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import cartReducer from "../reducers/cartReducer";
import PropTypes from 'prop-types'
import authReducer from "../reducers/authReducer";
import { logout } from '../actions/authAction'


const Navbar = ({ cart, isAuthenticated,logout }) => {
  return (
    <Fragment>
      {
        isAuthenticated ? <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link to="/" className="navbar-brand">
            ECOMMERCE
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
  
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to="/profile" className="nav-link">
                  Profile <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Product
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/cart" className="nav-link">
    Cart {cart.length > 0 && <span>({cart.length})</span>}
                </Link>
              </li>
              <li className="nav-item">
                <Link onClick={() => logout()} to="/" className="nav-link">
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        </div> : 
        <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link to="/" className="navbar-brand">
            ECOMMERCE
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
  
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Product
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/cart" className="nav-link">
    Cart {cart.length > 0 && <span>({cart.length})</span>}
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/login" className="nav-link">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/register" className="nav-link">
                  Register
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        </div>
      }
    </Fragment>
  );
};

// Navbar.propTypes = {
//     cart: PropTypes.array,
// }

const mapStateToProps = state => ({
    cart: state.cartReducer.cart,
    isAuthenticated: state.authReducer.isAuthenticated
})

export default connect(mapStateToProps, {logout})(Navbar);
