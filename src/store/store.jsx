import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialLogInState = {
  finishSignUp: false,
  logout: true,
};

const formSlice = createSlice({
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

const initialInfoState = {
  id: "",
  password: "",
};

const infoSlice = createSlice({
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
const initialItemState = {
  count: 0,
};

const itemSlice = createSlice({
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

const store = configureStore({
  reducer: {
    info: infoSlice.reducer,
    form: formSlice.reducer,
    item: itemSlice.reducer,
  },
});

export default store;
export const infoActions = infoSlice.actions;
export const formAction = formSlice.actions;
export const itemAction = itemSlice.actions;
