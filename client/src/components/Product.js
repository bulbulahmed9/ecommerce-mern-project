import React, { Fragment, useEffect } from "react";
import { addToCart } from "../actions/cartAction";
import { modalOpen, modalClose } from "../actions/modalAction";
import { seeDetails } from '../actions/detailsAction'
import { setAlert } from '../actions/alertAction'
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'


const Product = ({seeDetails, product, addToCart, modalOpen,modalClose, products, cart, setAlert, detailsProduct}) => {


  const handleDetails = (products, id) => {
    seeDetails(products, id);
  }

  return (
    <Fragment>
      <div className="card">
        <img
          className={product.name}
          src={require(`../img/${product.info.name}.jpg`)}
          alt="img"
        />
        <div className="card-body">
          <h5 className="card-title">{product.info.name}</h5>
          <p className="card-text">{product.info.os}
          <br/> {product.info.ram}
          <br/> {product.info.internalMemory}
          </p>
          <div className="addtocart">
            <Link onClick={() => handleDetails(products, product._id)} to="/details" className="btn btn-primary">See details</Link>
  <button onClick={() => {
    addToCart(product)
    modalOpen(products, product._id)
    setAlert("Product Added to Cart" , 'success')
    }} className="btn btn-info">Add to Cart</button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

Product.propTypes = {
  cart: PropTypes.array,
}

const mapStateToProps = state => ({
  cart : state.cartReducer,
  products: state.productReducer.product,
  detailsProduct: state.detailsReducer
})

export default connect(mapStateToProps, { addToCart, modalOpen, modalClose, setAlert, seeDetails })(Product);
