import { configureStore } from "@reduxjs/toolkit";
import { formSlice } from "./slices/FormSlice.jsx";
import { infoSlice } from "./slices/InfoSlice.jsx";
import { itemSlice } from "./slices/ItemSlice.jsx";
import { dataSlice } from "./slices/DataSlice.jsx";
const store = configureStore({
  reducer: {
    info: infoSlice.reducer,
    form: formSlice.reducer,
    item: itemSlice.reducer,
    data: dataSlice.reducer,
  },
});

export default store;
