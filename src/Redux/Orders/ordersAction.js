import axios from "axios";
import {
  PLACE_ORDER_FAILED,
  PLACE_ORDER_START,
  PLACE_ORDER_SUCCESS,
  GET_ORDERS_START,
  GET_ORDERS_SUCCESS,
  GET_ORDERS_FAILED,
  GET_ORDER_START,
  GET_ORDER_SUCCESS,
  GET_ORDER_FAILED,
  PAY_ORDER_START,
  PAY_ORDER_SUCCESS,
  PAY_ORDER_FAILED,
} from "./orderTypesConstants";
import { RESET_CART } from "../Cart/cartTypesConstants";
import API_URL from "../../API";

// send order to backend
export const placeOrder = (history) => async (dispatch, getState) => {
  try {
    dispatch({
      type: PLACE_ORDER_START,
    });
    const state = getState(); // getstate from store
    // data send requst
    const requestData = {
      orderItems: state.cart.cart,
      shippingAddress: state.cart.shippingAddress,
      paymentMethod: "PayPal", // static
      totalPrice: state.cart.cart
        // 0 => initial value   // acc => accumulator   // item => product
        .reduce((acc, item) => acc + item.price * item.quantity, 0)
        .toFixed(2),
    };
    const config = {
      headers: {
        // Authorization any work cheack
        // type Authorization token from type Bearer
        "Content-Type": "application/json", // it's data on way json to backend
        Authorization: `Bearer ${state.userDetails.user.token}`, // get token from user
      },
    };
    const response = await axios.post(`${API_URL}/orders`, requestData, config);
    dispatch({
      type: PLACE_ORDER_SUCCESS,
      payload: response.data._id,
    });

    //  action old not ready Because need RESET_CART and remove from localStorage
    // in case success in send cart by order to backend work RESET_CART and remove cart
    dispatch({
      type: RESET_CART,
    });
    localStorage.removeItem("cart");
    // Next It's go to order in file PlaceOrderComponent.js
    history.push("/order/" + response.data._id);
  } catch (e) {
    console.log(e.response);
    dispatch({
      type: PLACE_ORDER_FAILED, //in case not write await no view arror
      payload: e?.response?.data?.message,
    });
  }
};

// get Orders
export const getOrders = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: GET_ORDERS_START,
    });
    const state = getState();
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${state.userDetails.user.token}`,
      },
    };
    const response = await axios.get(`${API_URL}/orders`, config);
    dispatch({
      type: GET_ORDERS_SUCCESS,
      payload: response.data,
    });
  } catch (e) {
    console.log(e.response);
    dispatch({
      payload: e?.response?.data?.message,
      type: GET_ORDERS_FAILED,
    });
  }
};

// get Order By Id
export const getOrderById = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: GET_ORDER_START,
    });
    const state = getState();
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${state.userDetails.user.token}`,
      },
    };
    const response = await axios.get(`${API_URL}/orders/${id}`, config);
    dispatch({
      type: GET_ORDER_SUCCESS,
      payload: response.data,
    });
  } catch (e) {
    dispatch({
      payload: e?.response?.data?.message,
      type: GET_ORDER_FAILED,
    });
  }
};

export const payOrder = (id, paymentRequest) => async (dispatch, getState) => {
  try {
    dispatch({
      type: PAY_ORDER_START,
    });
    const state = getState();
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${state.userDetails.user.token}`,
      },
    };
    const response = await axios.put(
      `${API_URL}/orders/${id}/pay`,
      paymentRequest,
      config
    );
    dispatch({
      type: PAY_ORDER_SUCCESS,
      payload: response.data,
    });
  } catch (e) {
    dispatch({
      type: PAY_ORDER_FAILED,
      payload: e.response.data.message,
    });
  }
};
