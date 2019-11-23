import React,{ Fragment } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

const Profile = ({ user, isAuthenticated, loading }) => {


    if(!isAuthenticated && !loading ){
        return <Redirect to="/login" />
    }

    return (
        <div>
            {
            user !== null && !loading ? <p>Your name {user.name}</p> : <p>Loading...</p>
         }
        </div>
    )
}

const mapStateToProps = state => ({
    user: state.authReducer.user,
    isAuthenticated: state.authReducer.isAuthenticated,
    loading: state.authReducer.loading
})

export default connect( mapStateToProps )(Profile)
