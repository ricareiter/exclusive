import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const { productName, productPrice, productReviews, productQuantity } =
        action.payload;
      const productSubtotal = productPrice * productQuantity;
      return [
        ...state,
        {
          productName,
          productPrice,
          productReviews,
          productQuantity,
          productSubtotal,
        },
      ];
    },
  },
});

export const { addProduct } = cartSlice.actions;
export default cartSlice.reducer;
