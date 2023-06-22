import { createSlice } from "@reduxjs/toolkit";

const initialData = {
  data: [],
};

export const dataSlice = createSlice({
  name: "data",
  initialState: initialData,
  reducers: {
    setData: (state, actions) => {
      state.data = actions.payload;
    },
  },
});

export const dataActions = dataSlice.actions;
