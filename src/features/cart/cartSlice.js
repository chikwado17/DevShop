import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  orders: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      state.cart.push(action.payload);
    },

    deleteCart(state, action) {
      state.cart = state.cart.filter(
        (item) => item.productId !== action.payload
      );
    },

    incrementCartQuantity(state, action) {
      const item = state.cart.find((itm) => itm.productId === action.payload);
      item.quantity++;
      item.totalPrice = item.quantity * item.price;
    },
    decrementCartQuantity(state, action) {
      const item = state.cart.find((itm) => itm.productId === action.payload);
      item.quantity--;
      item.totalPrice = item.quantity * item.price;

      if (item.quantity === 0) {
        state.cart = state.cart.filter(
          (item) => item.productId !== action.payload
        );
      }
    },

    clearCartItem(state) {
      state.cart = [];
    },
    userOrders(state, action) {
      state.orders.push(action.payload);
    },
    clearOrders(state) {
      state.orders = [];
    },
  },
});

export const {
  addToCart,
  deleteCart,
  incrementCartQuantity,
  decrementCartQuantity,
  clearCartItem,
  userOrders,
  clearOrders,
} = cartSlice.actions;

export default cartSlice.reducer;

export const getCurrentQuantityById = (id) => (state) =>
  state.carts.cart.find((item) => item.productId === id)?.quantity ?? 0;

//function to get totalPrices in cart
export const getTotalAmountInCart = (state) =>
  state.carts.cart.reduce(
    (accumulator, currentValue) => accumulator + currentValue.totalPrice,
    0
  );
