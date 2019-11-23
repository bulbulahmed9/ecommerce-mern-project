import {
  ADD_PRODUCT_TO_CART,
  INCREMENT_CART_ITEM_QUANTITY,
  DECREMENT_CART_ITEM_QUANTITY,
  REMOVE_PRODUCT_FROM_CART,
  CLEAR_CART,
  CHECKOUT,
  CHECKOUT_FAILED
} from "../actions/types";

const initialState = {
  products: null,
  cart: []
};

const cartReducer = (state = initialState, action) => {
  let updatedCart;
  let updatedItemIndex;

  const { type, payload } = action;
  switch (type) {
    case ADD_PRODUCT_TO_CART:
      updatedCart = [...state.cart];
      updatedItemIndex = updatedCart.findIndex(
        item => item._id === payload._id
      );
      if (updatedItemIndex < 0) {
        updatedCart.push({ ...payload, quantity: 1, inCart: true });
      } else {
        const updatedItem = {
          ...updatedCart[updatedItemIndex]
        };
        updatedItem.quantity++;
        updatedCart[updatedItemIndex] = updatedItem;
      }
      return { ...state, cart: updatedCart };

    case INCREMENT_CART_ITEM_QUANTITY:
      updatedCart = [...state.cart];
      updatedItemIndex = updatedCart.findIndex(
        item => item._id === payload._id
      );

      const incrementItem = {
        ...updatedCart[updatedItemIndex]
      };
      incrementItem.quantity++;
      updatedCart[updatedItemIndex] = incrementItem;
      return {
        ...state,
        cart: updatedCart
      };

    case DECREMENT_CART_ITEM_QUANTITY:
      updatedCart = [...state.cart];
      updatedItemIndex = updatedCart.findIndex(
        item => item._id === payload._id
      );

      const decrementItem = {
        ...updatedCart[updatedItemIndex]
      };
      decrementItem.quantity--;
      updatedCart[updatedItemIndex] = decrementItem;

      if (decrementItem.quantity < 1) {
        updatedCart.splice(updatedItemIndex, 1);
      }

      return {
        ...state,
        cart: updatedCart
      };

    case REMOVE_PRODUCT_FROM_CART:
      updatedCart = [...state.cart];
      updatedItemIndex = updatedCart.findIndex(
        item => item._id === payload._id
      );

      updatedCart.splice(updatedItemIndex, 1);

      return { ...state, cart: updatedCart };
case CLEAR_CART:
  return {
    ...state,
    products: null,
    cart: []
  }
  case CHECKOUT:
    return {
      ...state,
      products: null,
      cart: []
    }
    default:
      return state;
  }
};


export default cartReducer;
