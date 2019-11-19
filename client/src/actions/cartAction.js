import {
  ADD_TO_CART,
  REMOVE_ITEM,
  SUB_QUANTITY,
  ADD_QUANTITY,
  ADD_SHIPPING
} from "./types";


export const addToCart = product => dispatch => {
	dispatch({
    type: ADD_TO_CART,
	  item: product
  })	
};
