import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import authReducer from "./authReducer";
import storeReducer from "./storeReducer";
import productReducer from "./productReducer";

// ket noi cac reducer lai voi nhau
const rootReducer = combineReducers({
  cartReducer,
  authReducer,
  storeReducer,
  productReducer
});

export default rootReducer;