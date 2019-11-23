import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import spinner from '../img/spinner.jpg'
import { loadUser } from '../actions/authAction'
// import store from '../store'
// import setAuthToken from "../utils/setAuthToken"


// if(localStorage.token){
//   setAuthToken(localStorage.token)
// }

const Profile = ({ user, isAuthenticated, loading,loadUser,order }) => {
  if (!isAuthenticated && !loading) {
    return <Redirect to="/login" />;
  }

  return (
    <div>
      {user !== null && !loading ? (
          <div className="container profile-card">
        <div className="card">
          <h5 className="card-header">Profile</h5>
          <div className="card-body">
      <h5 className="card-title">{user.name}</h5>
            <p className="card-text">
              With supporting text below as a natural lead-in to additional
              content.
            </p>
            <h4>Your Orders :</h4>
            { 
              user.orders.length > 0  ? user.orders.map(item => 
                
                 (
              <div className="order-details">
                <h5>{item.name}</h5>
                <p>Price : {item.price}</p>
                <p>Quantity : {item.quantity}</p>
              <p>Order Date : {item.dateCreated}</p>
              </div>
              )
              ) : <p>No Pending Order</p>
            }
          </div>
        </div>
        </div>
      ) : (
        <div className="spinner-box"><img className="spinner" src={spinner} alt="loading..." /></div>
      )}
    </div>
  );
};

const mapStateToProps = state => ({
  user: state.authReducer.user,
  isAuthenticated: state.authReducer.isAuthenticated,
  loading: state.authReducer.loading
});

export default connect(mapStateToProps,{loadUser})(Profile);
