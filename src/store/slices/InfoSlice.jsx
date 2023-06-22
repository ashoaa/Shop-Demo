import { createSlice } from "@reduxjs/toolkit";

const initialInfoState = {
  id: "",
  password: "",
};

export const infoSlice = createSlice({
  name: "info",
  initialState: initialInfoState,
  reducers: {
    setID: (state, action) => {
      state.id = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
  },
});

export const infoActions = infoSlice.actions;
