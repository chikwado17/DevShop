import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [
    {
      id: 21,
      name: "Mediterranean",
      quantity: 2,
      price: 16,
      totalPrice: 32,
    },
  ],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: [],
});

export default cartSlice.reducer;
