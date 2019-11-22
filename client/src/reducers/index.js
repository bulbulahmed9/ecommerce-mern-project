import { combineReducers } from "redux";
import alertReducer from "./alertReducer";
import authReducer from "./authReducer";
import productReducer from "./productReducer";
import cartReducer from "./cartReducer";
import modalReducer from "./modalReducer";
import detailsReducer from "./detailsReducer";

export default combineReducers({
  alertReducer,
  authReducer,
  productReducer,
  cartReducer,
  modalReducer,
  detailsReducer
});
