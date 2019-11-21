import React, { Fragment } from "react";
import { connect } from "react-redux";
import { modalClose } from '../actions/modalAction'

const Modal = ({ item, modalClose }) => {
  return (
    <Fragment>
      {
          !item.modal ?
           null :
          <div className="modal-card">
        <div className="card">
          <div className="card-body">
      <h5 className="card-title">{ item.modalProduct.info.name }</h5>
            <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <button onClick={() => modalClose()} className="card-link">Continue Shopping</button>
            <a href="#" className="card-link">
              Another link
            </a>
          </div>
        </div>
      </div>
      }
    </Fragment>
  );
};

const mapStateToProps = state => ({
    item : state.modalReducer
})

export default connect(mapStateToProps, { modalClose })(Modal);
