import React, { Fragment } from "react";
import { connect } from "react-redux";
import CartColumn from "./CartColumn";
import {
  increment,
  decrement,
  remove,
  clearCart,
  checkout
} from "../../actions/cartAction";
import { loadUser } from "../../actions/authAction";
import { setAlert } from "../../actions/alertAction";

import Alert from '../Alert'

const CartList = ({
  cart,
  increment,
  decrement,
  product,
  remove,
  totalprice,
  clearCart,
  checkout,
  cartItem,
  loadUser,
  isAuthenticated,
}) => {
  return (
    <Fragment>
      
      {cart.length > 0 && <CartColumn />}
      <div className="container-fluid">
        {cart.length > 0
          ? cart.map(
              item =>
                item.quantity > 0 && (
                  <div className="row my-1 text-capitalize text-center">
                    <div className="col-10 mx-auto col-lg-2 ">
                      <span className="d-lg-none">product :</span>{" "}
                      {item.info.name}
                    </div>
                    <div className="col-10 mx-auto col-lg-2 ">
                      <span className="d-lg-none">Price :</span>{" "}
                      {item.info.price} USD
                    </div>
                    <div className="col-10 mx-auto my-1 col-lg-2 ">
                      <span className="d-lg-none">Quantity :</span>
                      <span
                        onClick={() => decrement(item)}
                        className="quantity"
                      >
                        -
                      </span>
                      <span className="quantity">{item.quantity}</span>
                      <span
                        onClick={() => increment(item)}
                        className="quantity"
                      >
                        +
                      </span>
                    </div>
                    <div className="col-10 mx-auto col-lg-2 ">
                      <span className="d-lg-none">Remove :</span>{" "}
                      <span className="remove" onClick={() => remove(item)}>
                        <i className="fa fa-trash" />
                      </span>
                    </div>
                    <div className="col-10 mx-auto col-lg-2 ">
                      <span className="d-lg-none">Total :</span>{" "}
                      {item.info.price * item.quantity} USD
                    </div>
                  </div>
                )
            )
          : null}
      </div>
      <div className="cartlist-footer">
        {isAuthenticated ? (
          <button
            onClick={() => {
              checkout(cart);
              alert("Order Successfully Processed")
            }}
            className="cart-btn btn"
            type="button"
          >
            Check Out
          </button>
        ) : (
          <span className="mx-1">Please log in for Check Out</span>
        )}
        <button
          onClick={() => clearCart()}
          className="cart-btn btn"
          type="button"
        >
          Clear Cart
        </button>
        <span>Subtotal : {totalprice}</span>
      </div>
    </Fragment>
  );
};

const mapStateToProps = state => {
  return {
    cart: state.cartReducer.cart,
    isAuthenticated: state.authReducer.isAuthenticated,
    product: state.productReducer.product,
    totalprice: state.cartReducer.cart.reduce((count, cartItem) => {
      return count + cartItem.info.price * cartItem.quantity;
    }, 0),
    cartItem: state.cartReducer.cart.map(item => {
      return item;
    })
  };
};

export default connect(mapStateToProps, {
  increment,
  decrement,
  remove,
  clearCart,
  checkout,
  loadUser,
  setAlert
})(CartList);
