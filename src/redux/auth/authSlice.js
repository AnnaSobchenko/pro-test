import { createSlice } from "@reduxjs/toolkit";
import { logout, signin, signup } from "./authOperations";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: { name: null, email: null },
    accessToken: null,
    refreshToken: null,
    _id: null,
    isLoading: false,
    isLoggedIn: false,
    error: null,
  },
  reducers: {
    logoutUser(state) {
      state.user = { name: null, email: null };
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
      state.user.name = payload.userData.name;
      state.user.email = payload.userData.email;
      state.accessToken = payload.accessToken;
      state.refreshToken = payload.refreshToken;
      state._id = payload.sid;
      state.isLoggedIn = true;
      state.isLoading = false;
    },
    [signin.rejected](state, { payload }) {
      state.isLoading = false;
      state.isLoggedIn = false;
      state.error = payload;
    },
    [logout.pending](state) {
      state.isLoading = true;
      state.error = null;
    },
    [logout.fulfilled](state) {
      state.user = { name: null, email: null };
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
