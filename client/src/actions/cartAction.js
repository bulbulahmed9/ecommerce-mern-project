import {
  ADD_PRODUCT_TO_CART,
  INCREMENT_CART_ITEM_QUANTITY,
  DECREMENT_CART_ITEM_QUANTITY,
  REMOVE_PRODUCT_FROM_CART
} from "./types";

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