import React, { Fragment, useEffect } from "react";
import { addToCart } from "../actions/cartAction";
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'


const Product = ({ product, addToCart,cart }) => {
  
  

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
            <button onClick={() => addToCart(product)} className="btn btn-info">Add Cart</button>
  <p>{cart}</p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

Product.propTypes = {
  cart: PropTypes.number,
}

const mapStateToProps = state => ({
  cart : state.cartReducer.length
})

export default connect(mapStateToProps, { addToCart })(Product);
