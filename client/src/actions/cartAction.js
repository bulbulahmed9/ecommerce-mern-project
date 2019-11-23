import {
  ADD_PRODUCT_TO_CART,
  INCREMENT_CART_ITEM_QUANTITY,
  DECREMENT_CART_ITEM_QUANTITY,
  REMOVE_PRODUCT_FROM_CART,
  CLEAR_CART,
  CHECKOUT,
  CHECKOUT_FAILED
} from "./types";

import { loadUser } from "./authAction";

import axios from "axios";

export const addToCart = product => dispatch => {
  dispatch({
    type: ADD_PRODUCT_TO_CART,
    payload: product
  });
};

export const increment = product => dispatch => {
  dispatch({
    type: INCREMENT_CART_ITEM_QUANTITY,
    payload: product
  });
};

export const decrement = product => dispatch => {
  dispatch({
    type: DECREMENT_CART_ITEM_QUANTITY,
    payload: product
  });
};

export const remove = product => dispatch => {
  dispatch({
    type: REMOVE_PRODUCT_FROM_CART,
    payload: product
  });
};

export const clearCart = () => dispatch => {
  dispatch({
    type: CLEAR_CART
  });
};

export const checkout = cartItem => async dispatch => {
  const order = cartItem.map(item => {
    var d = new Date();
    var n = d.toLocaleDateString();
    let order = {
      name: item.info.name,
      price: item.info.price,
      quantity: item.quantity,
      dateCreated: n
    };
    return order;
  });

  try {
    await axios.post("/api/order", { order: order });
    dispatch({
      type: CHECKOUT
    });
    dispatch(loadUser());
  } catch (err) {
    if (err) {
      console.log("error");
    }
  }
};
