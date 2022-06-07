import { createSlice } from "@reduxjs/toolkit";
import { logout, signin, signup, getInfo } from "./authOperations";
// import { getUserInfo } from "../../utils/fetchApi";

const getFromLS = key => {
  const valueFromLS = localStorage.getItem(key);
  return typeof valueFromLS === 'string'
    ? valueFromLS
    : JSON.parse(valueFromLS);
};

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: { email: getFromLS('email') || 'null' },
    accessToken: null,
    refreshToken: null,
    _id: null,
    isLoading: false,
    isLoggedIn: false,
    error: null,
  },
  reducers: {
    logoutUser(state) {
      state.user = { email: null };
      state.accessToken = null;
      state.refreshToken = null;
      state._id = null;
      state.isLoggedIn = false;
      state.isLoading = false;
      state.error = null;
    },
  },
  extraReducers: {
    [signup.pending](state) {
      state.isLoading = true;
      state.error = null;
    },
    [signup.fulfilled](state, { payload }) {
      state.user = payload.user;
      state.accessToken = payload.accessToken;
      state.refreshToken = payload.refreshToken;
      state._id = payload._id;
      state.isLoggedIn = true;
      state.isLoading = false;
    },
    [signup.rejected](state, { payload }) {
      state.isLoading = false;
      state.isLoggedIn = false;
      state.error = payload;
    },
    [signin.pending](state) {
      state.isLoading = true;
      state.error = null;
    },
    [signin.fulfilled](state, { payload }) {
      state.user.email = payload.ResponseBody.user.email;
      state.accessToken = payload.accessToken;
      state.refreshToken = payload.refreshToken;
      state._id = payload._id;
      state.isLoggedIn = true;
      state.isLoading = false;
    },
    [signin.rejected](state, { payload }) {
      state.isLoading = false;
      state.isLoggedIn = false;
      state.error = payload;
    },
    [getInfo.pending](state) {
      state.isLoading = true;
      state.error = null;
    },
    [getInfo.fulfilled](state, { payload }) {
      state.user.email = payload.email;
      state.accessToken = payload.accessToken;
      state.refreshToken = payload.refreshToken;
      state.isLoggedIn = true;
      state.isLoading = false;
    },
    [getInfo.rejected](state, { payload }) {
      state.isLoading = false;
      state.isLoggedIn = false;
      state.error = payload;
    },
    [logout.pending](state) {
      state.isLoading = true;
      state.error = null;
    },
    [logout.fulfilled](state) {
      state.user = { email: null };
      state.accessToken = null;
      state.refreshToken = null;
      state._id = null;
      state.isLoggedIn = false;
      state.isLoading = false;
    },
    [logout.rejected](state, { payload }) {
      state.isLoading = false;
      state.isLoggedIn = true;
      state.error = payload;
    },
  },
});
export const { logoutUser } = authSlice.actions;
export default authSlice.reducer;
