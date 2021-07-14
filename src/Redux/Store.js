import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { userReducer } from "./User/userReducer";
import { guestReducers } from "./Guest/guestReducers";
import { cartReducer } from "./Cart/cartReducer";
import {ordersReducers} from "./Orders/orderReducer"

const reducers = combineReducers({
  userDetails: userReducer,
  guestState: guestReducers, 
  cart: cartReducer,
  orders: ordersReducers
}); 

// check from save the data in local storage
// Because not Empty data
// || {} any or Empty oject in case not user any no login no view error and pass object
const userFromLocalStorage = JSON.parse(localStorage.getItem("user")) || {};
const cartFromLocalStorage = JSON.parse(localStorage.getItem("cart")) || [];
const shippingFromLocalStorage =
  JSON.parse(localStorage.getItem("shipping")) || {};

const initialState = {
  userDetails: {
    user: userFromLocalStorage,
  },
  cart: {
    cart: cartFromLocalStorage,
    shippingAddress: shippingFromLocalStorage,
  },
}; 

const middlewares = [thunk];

const store = createStore(
  reducers,
  initialState,
  applyMiddleware(...middlewares)
);

export default store;
