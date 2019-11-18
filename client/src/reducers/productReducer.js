import { GET_PRODUCT, FAILED_PRODUCT } from "../actions/types";

const initialState = {
    product: [],
    loading: true
};

export default function(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_PRODUCT:
      return {
          ...state,
          product: payload,
          loading: false
      }
    case FAILED_PRODUCT:
      return {
          ...state,
          product: []
      };
    default:
      return state;
  }
}
