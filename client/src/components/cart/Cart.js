import React, { Fragment } from "react";
import { connect } from "react-redux";
import CartList from "./CartList";
import EmptyCart from './EmptyCart'

const Cart = ({ cart }) => {
  return (
    <Fragment>
      <div className="cart">
      
      {
        cart.length > 0 ? <CartList /> : <EmptyCart />
      }
      </div>
    </Fragment>
  );
};

const mapStateToProps = state => ({
  cart: state.cartReducer.cart,
  products: state.productReducer
});

export default connect(mapStateToProps)(Cart);
