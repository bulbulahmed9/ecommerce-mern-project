import React, { Fragment } from "react";
import { connect } from "react-redux";
import CartColumn from "./CartColumn";
import { increment, decrement, remove } from '../../actions/cartAction'

const CartList = ({ cart, increment ,decrement, product, remove}) => {

  return (
    <Fragment>
      { cart.length > 0 && <CartColumn /> }
      <div className="container-fluid">
        {cart.length > 0
          ? cart.map(item => item.quantity > 0 && (
              <div className="row my-1 text-capitalize text-center">
                <div className="col-10 mx-auto col-lg-2 ">
                  <span className="d-lg-none">product :</span> {item.info.name}
                </div>
                <div className="col-10 mx-auto col-lg-2 ">
                  <span className="d-lg-none">product :</span> {item.info.price}
                </div>
                <div className="col-10 mx-auto col-lg-2 ">
                  <span className="d-lg-none">product :</span>
                  <span onClick={() => decrement(item)} className="quantity">-</span>
                  <span className="quantity">{item.quantity}</span>
                  <span onClick={() => increment(item)} className="quantity">+</span>
                </div>
                <div className="col-10 mx-auto col-lg-2 ">
                  <span className="d-lg-none">product :</span> <span onClick={() => remove(item)} >remove</span>
                </div>
                <div className="col-10 mx-auto col-lg-2 ">
                  <span className="d-lg-none">product :</span>{" "}
                  {item.info.price * item.quantity}
                </div>
              </div>
            ))
          : null}
      </div>
      <button
        className="btn btn-outline-danger text-uppercase"
        type="button"
      >
        clear cart
      </button>
      <button
        className="btn btn-outline-danger text-uppercase"
        type="button"
      >
        Subtotal Value
      </button>
    </Fragment>
  );
};

const mapStateToProps = state => ({
  cart: state.cartReducer.cart,
  product: state.productReducer.product
});

export default connect(mapStateToProps, { increment,decrement, remove })(CartList);
