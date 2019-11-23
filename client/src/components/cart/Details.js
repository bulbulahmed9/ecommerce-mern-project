import React from "react";
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { addToCart } from '../../actions/cartAction'

const details = ({ detailsProduct, addToCart }) => {
  return (
    <div className="container">
      {
          detailsProduct !== null ? <div className="card">
          <h5 className="card-header">{ detailsProduct.info.name }</h5>
                <div className="card-body">
                    <img className="card-img" src={require(`../../img/${detailsProduct.info.name}.jpg`)} />
      <h5 className="card-title">Make your life awesome with {detailsProduct.info.name}</h5>
      <p className="card-text"> Dimensions : {detailsProduct.info.dimensions}</p>
      <p className="card-text"> Weight : {detailsProduct.info.weight}</p>
      <p className="card-text"> Display Type : {detailsProduct.info.displayType}</p>
      <p className="card-text"> Display Size : {detailsProduct.info.displaySize}</p>
      <p className="card-text"> Display Resolution : {detailsProduct.info.displayResolution}</p>
      <p className="card-text"> Operating System {detailsProduct.info.os}</p>
      <p className="card-text"> CPU : {detailsProduct.info.cpu}</p>
      <p className="card-text"> Rom : {detailsProduct.info.internalMemory}</p>
      <p className="card-text"> Ram : {detailsProduct.info.ram}</p>
      <p className="card-text"> Camera : {detailsProduct.info.camera}</p>
      <p className="card-text"> Battery : {detailsProduct.info.batery}</p>
      <p className="card-text"> Color : {detailsProduct.info.color}</p>
      <p className="card-text"> Price : {detailsProduct.info.price} USD</p>
                  <Link className="details-btn btn" to="/">Go Back</Link>
                  <button className="details-btn btn" onClick={() => addToCart(detailsProduct)}>Add to Card</button>
                </div>
              </div> : 
              <div className="details-warning">Please Select Which product you want to see Details <br/>
              <Link className="details-btn btn" to="/">Go Back</Link>
              </div>
      }
    </div>
  );
};

const mapStateToProps = state => ({
    detailsProduct: state.detailsReducer.detail_product
})


export default connect(mapStateToProps, { addToCart })(details);
