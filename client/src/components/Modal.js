import React, { Fragment } from "react";
import { connect } from "react-redux";
import { modalClose } from "../actions/modalAction";
import { Link } from 'react-router-dom'

const Modal = ({ item, modalClose, alert }) => {
  return (
    <Fragment>
      {!item.modal ? null : (
        <div className="modal-card">
          <div className="card">
            <div className="card-body">
                {
alert !== null && alert.map(x => <p className="modal-alert">{x.msg}</p>)
                }
              <h5 className="card-title">{item.modalProduct.info.name}</h5>
              <img src={require(`../img/${item.modalProduct.info.name}.jpg`)} />
              <h6 className="card-subtitle mb-2 text-muted">
                {item.modalProduct.info.os}
              </h6>
              <p className="card-text">
               Size: {item.modalProduct.info.displaySize} <br />
                Camera: {item.modalProduct.info.camera} <br /> Ram: {item.modalProduct.info.ram} <br />
            Memory: {item.modalProduct.info.internalMemory} <br />
              Price:  {item.modalProduct.info.price} USD
              </p>
              <button onClick={() => modalClose()} className="card-link">
                Continue Shopping
              </button>
              <Link onClick={() => modalClose()} to="/cart" className="card-link">
                Go to Cart
              </Link>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};

const mapStateToProps = state => ({
  item: state.modalReducer,
  alert: state.alertReducer
});

export default connect(mapStateToProps, { modalClose })(Modal);
