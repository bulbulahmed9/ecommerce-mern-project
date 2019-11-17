import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Alert = ({ alerts }) =>
  alerts !== null &&
  alerts.length > 0 &&
  alerts.map(alert => (
    <div className="alert" key={alert.id} >
      {alert.msg} 
    </div>
  ));


Alert.propTypes = {
  alerts: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
    alerts: state.alertReducer
})

export default connect(mapStateToProps)(Alert);
