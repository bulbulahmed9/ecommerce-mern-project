import React, { Fragment, useEffect } from "react";
import { addToCart } from "../actions/cartAction";
import { modalOpen, modalClose } from "../actions/modalAction";
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'


const Product = ({ product, addToCart, modalOpen,modalClose, products}) => {
  
  

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
   {/* <span>{product._id}</span> */}
          <div className="addtocart">
            <Link className="btn btn-primary" to="/details">See details</Link>
  <button onClick={() => {
    addToCart(product)
    modalOpen(products, product._id)
    }} className="btn btn-info">add</button>
          </div>
          {/* <button onClick={() => modalClose(products, product._id)}>close modal</button> */}
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
  products: state.productReducer.product
})

export default connect(mapStateToProps, { addToCart, modalOpen, modalClose })(Product);
