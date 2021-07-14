import {
  ADD_SHIPPING_ADDRESS,
  ADD_TO_CART,
  DECREASE_COUNT,
  DELETE_CART_ITEM,
  INCREASE_COUNT,
} from "./cartTypesConstants";

// Add Cart Item
export const addCartItem = (product, quantity) => (dispatch, getState) => {
  const state = getState();
  const isProductExist = state.cart.cart.find(
    (item) => item._id == product._id
  );
  if (isProductExist) {
    isProductExist.quantity += quantity;
    isProductExist.qty += quantity;
    const index = state.cart.cart.findIndex(
      (item) => item._id == isProductExist._id  // Add New product if Equal product Existing
    );
    state.cart.cart[index] = isProductExist; //  add idex in array cart and update on isProductExist
    dispatch({
      type: INCREASE_COUNT,
      payload: state.cart.cart,
    });
  } else {
    // check if add Product Not Existing in ListCart  work Add Product in List cart
    product.quantity = quantity;
    product.qty = quantity;
    product.product = product._id;
    dispatch({
      type: ADD_TO_CART,
      payload: product,
    });
  }
  // save New state in localStorage
  localStorage.setItem("cart", JSON.stringify(getState().cart.cart));
};

// Decrease Cart
export const decreaseCartItemQty =
  (product, quantity) => (dispatch, getState) => {
    const state = getState();
    const isProductExist = state.cart.cart.find(
      (item) => item._id == product._id
    );
    if (isProductExist) {
      isProductExist.quantity -= quantity;
      isProductExist.qty -= quantity;
      // get idex product
      const index = state.cart.cart.findIndex(
        // give me new product in inside new quantity replace Product old in inside old quantity
        // but not ubdate in store but ubdate  only function
        // work ubdate store need pass to payload inside in dispatch
        (item) => item._id == isProductExist._id
      );
      state.cart.cart[index] = isProductExist;
      dispatch({
        type: DECREASE_COUNT,
        payload: state.cart.cart, // that go cart to state
      });
    }
    // getState => it's a New state next ubdate giv me on cart and Next add in locaalStorage
    localStorage.setItem("cart", JSON.stringify(getState().cart.cart));
  };

// Delete Cart Item
export const deleteCartItem = (id) => (dispatch, getState) => {
  dispatch({
    type: DELETE_CART_ITEM,
    payload: id,
  });
  localStorage.setItem("cart", JSON.stringify(getState().cart.cart));
};

// Add Shipping Address
export const addShippingAddress = (values) => {
  localStorage.setItem("shipping", JSON.stringify(values));
  return {
    type: ADD_SHIPPING_ADDRESS,
    payload: values,
  };
};
