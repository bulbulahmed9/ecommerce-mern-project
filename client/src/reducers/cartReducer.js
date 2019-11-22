import {
  ADD_PRODUCT_TO_CART,
  INCREMENT_CART_ITEM_QUANTITY,
  DECREMENT_CART_ITEM_QUANTITY,
  REMOVE_PRODUCT_FROM_CART
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
      updatedItemIndex = updatedCart.findIndex(item => item._id === payload._id);
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
        updatedItemIndex = updatedCart.findIndex(item => item._id === payload._id);

      const incrementItem = {
        ...updatedCart[updatedItemIndex]
      }
      incrementItem.quantity++;
      updatedCart[updatedItemIndex] = incrementItem;
      return {
        ...state,cart: updatedCart
      }

      case DECREMENT_CART_ITEM_QUANTITY:
        updatedCart = [...state.cart];
        updatedItemIndex = updatedCart.findIndex(item => item._id === payload._id);

      const decrementItem = {
        ...updatedCart[updatedItemIndex]
      }
      decrementItem.quantity--;
      updatedCart[updatedItemIndex] = decrementItem;

      if(decrementItem.quantity < 1){
        updatedCart.splice(updatedItemIndex, 1)
      }

      return {
        ...state,cart: updatedCart
      }

      case REMOVE_PRODUCT_FROM_CART:
            updatedCart = [...state.cart];
            updatedItemIndex = updatedCart.findIndex(
                item => item._id === payload._id
            );

            updatedCart.splice(updatedItemIndex, 1);

            return {...state, cart: updatedCart};

    default:
      return state;
  }
};

// export default function(state = [], action) {
//   const selectItemInCart = (state, action) =>
//     action !== undefined &&
//     state.filter(
//       x =>
//         x._id === action._id
//     )[0];
//   const cartWithoutItem = (state, action) =>
//     action !== undefined &&
//     state.filter(x => selectItemInCart(state, action) !== x);

//   switch (action.type) {
//     case ADD_TO_CART:
//       return selectItemInCart(state, action.item) // Check if selected item through action (action.item) is already in cart array
//         ? [
//             ...cartWithoutItem(state, action.item),
//             {
//               ...selectItemInCart(state, action.item),
//               quantity: selectItemInCart(state, action.item).quantity + 1,
//             }
//           ] // If Yes: return the cart array without the item to avoid duplicate. Then select the item by lookup the id of action (action.item) to match the id of cart array (state) to increment +1 to its quantity propriety.
//         : [...state, { ...action.item, quantity: 1,inCart: true }]; // If No: return cart array. Then add object of added item by concatenation, initialize its propriety quantity by 1.

//     default:
//       return state;
//   }
// };

export default cartReducer;
