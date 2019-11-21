import { combineReducers } from "redux";
import alertReducer from "./alertReducer";
import authReducer from "./authReducer";
import productReducer from "./productReducer";
import cartReducer from "./cartReducer";
import modalReducer from "./modalReducer";

export default combineReducers({
  alertReducer,
  authReducer,
  productReducer,
  cartReducer,
  modalReducer
});
