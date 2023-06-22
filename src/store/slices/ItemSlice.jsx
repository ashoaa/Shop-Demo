import { createSlice } from "@reduxjs/toolkit";

const initialItemState = {
  count: 0,
};

export const itemSlice = createSlice({
  name: "item",
  initialState: initialItemState,
  reducers: {
    addItem: (state) => {
      state.count++;
    },
    removeItem: (state) => {
      if (state.count > 0) {
        state.count--;
      }
    },
  },
});

export const itemActions = itemSlice.actions;
