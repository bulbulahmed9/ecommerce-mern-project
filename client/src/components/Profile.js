import React,{ Fragment } from 'react'
import { connect } from 'react-redux'

const Profile = ({ user }) => {
    return (
        <Fragment>
            profile
        </Fragment>
    )
}

const mapStateToProps = state => ({
    user: state.authReducer.user
})

export default connect( mapStateToProps )(Profile)
