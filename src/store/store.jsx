import { configureStore } from "@reduxjs/toolkit";
import { itemSlice } from "./slices/ItemSlice.jsx";
const store = configureStore({
  reducer: {
    item: itemSlice.reducer,
  },
});

export default store;
