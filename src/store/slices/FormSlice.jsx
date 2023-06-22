import { createSlice } from "@reduxjs/toolkit";

const initialLogInState = {
  finishSignUp: false,
  logout: true,
};

export const formSlice = createSlice({
  name: "login",
  initialState: initialLogInState,
  reducers: {
    signUp: (state) => {
      state.finishSignUp = true;
    },
    logIn: (state) => {
      state.logout = false;
    },
    logout: (state) => {
      state.logout = true;
    },
  },
});

export const formActions = formSlice.actions;
