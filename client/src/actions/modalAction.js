import { MODAL_OPEN, MODAL_CLOSE } from "./types";

export const modalOpen = (products, id) => dispatch => {
  const modalProduct = products.find(item => item._id === id);
  dispatch({
    type: MODAL_OPEN,
    payload: modalProduct
  });
};

export const modalClose = (products, product) => dispatch => {
  // const modalProduct = products.find(item => item.id !== product.id)
  dispatch({
    type: MODAL_CLOSE
  });
};
