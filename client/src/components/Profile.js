import React, { Fragment } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import spinner from '../img/spinner.jpg'

const Profile = ({ user, isAuthenticated, loading }) => {
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
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure dolorum ullam ratione optio veniam ipsa ex nam ut. Commodi, labore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, quo. Eveniet voluptatum, beatae laudantium fugit est voluptates saepe praesentium nesciunt quae accusantium temporibus eligendi repellendus quidem vero minus nisi aliquid.</p>
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

export default connect(mapStateToProps)(Profile);
