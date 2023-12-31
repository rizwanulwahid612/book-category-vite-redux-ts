import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IBook } from "../../../types/globalTypes";
import toast from "react-hot-toast";

interface ICart {
  products: IBook[];
}

const initialState: ICart = {
  products: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // addToCart: (state, action: PayloadAction<IBook>) => {
    //   const existing = state.products.find(
    //     (product) => product._id === action.payload._id
    //   );
    //   if (existing) {
    //     existing.quantity = existing.quantity! + 1;
    //   } else {
    //     state.products.push({ ...action.payload, quantity: 1 });
    //   }
    // },
    addToCart: (state, action: PayloadAction<IBook>) => {
      const existing = state.products.find(
        (product) => product._id === action.payload._id
      );
      if (existing) {
        toast.error("Alreadey Added");
      } else {
        state.products.push({ ...action.payload });
        toast.success("Book Added Successfully");
      }
    },

    removeOne: (state, action: PayloadAction<IBook>) => {
      const existing = state.products.find(
        (product) => product._id === action.payload._id
      );
      if (existing && existing.quantity! > 1) {
        existing.quantity = existing.quantity! - 1;
      } else {
        state.products = state.products.filter(
          (product) => product._id !== action.payload._id
        );
      }
    },
    removeFromCart: (state, action: PayloadAction<IBook>) => {
      state.products = state.products.filter(
        (product) => product._id !== action.payload._id
      );
    },
  },
});

export const { addToCart, removeFromCart, removeOne } = cartSlice.actions;

export default cartSlice.reducer;
