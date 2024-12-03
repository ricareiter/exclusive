import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const { productName, productPrice, productReviews } = action.payload;
      const productQuantity = 1;
      return [
        ...state,
        {
          productName,
          productPrice,
          productReviews,
          productQuantity,
        },
      ];
    },
  },
});

export const { addProduct } = cartSlice.actions;
export default cartSlice.reducer;
