import {
  ADD_TO_CART,
  REMOVE_ITEM,
  SUB_QUANTITY,
  ADD_QUANTITY,
  ADD_SHIPPING
} from "../actions/types";

export default function(state = [], action) {
  const selectItemInCart = (state, action) =>
    action !== undefined &&
    state.filter(
      x =>
        // x.selectedSize === action.selectedSize &&
        // x.selectedColor === action.selectedColor &&
        x._id === action._id
    )[0];
  const cartWithoutItem = (state, action) =>
    action !== undefined &&
    state.filter(x => selectItemInCart(state, action) !== x);

  switch (action.type) {
    case ADD_TO_CART:
      return selectItemInCart(state, action.item) // Check if selected item through action (action.item) is already in cart array
        ? [
            ...cartWithoutItem(state, action.item),
            {
              ...selectItemInCart(state, action.item),
              quantity: selectItemInCart(state, action.item).quantity + 1
            }
          ] // If Yes: return the cart array without the item to avoid duplicate. Then select the item by lookup the id of action (action.item) to match the id of cart array (state) to increment +1 to its quantity propriety.
        : [...state, { ...action.item, quantity: 1 }]; // If No: return cart array. Then add object of added item by concatenation, initialize its propriety quantity by 1.

    default:
      return state;
  }
};
