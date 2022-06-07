import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  signinUserApi,
  logoutUserApi,
  signupUserApi,
  getUserInfo
} from "../../utils/fetchApi";

export const signup = createAsyncThunk(
  "auth/signup",
  async (userData, thunkApi) => {
    const { confirmPassword, ...rest } = userData;
    try {
      const data = await signupUserApi(rest);
      // console.log("data", data);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const signin = createAsyncThunk(
  "auth/signin",
  async (userData, thunkApi) => {
    try {
      const data = await signinUserApi(userData);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

// export const getInfo = createAsyncThunk(
//   "auth/user",
//   async (userInfo, thunkApi) => {
//     try {
//       const data = await getUserInfo(userInfo);
//       return data.user.email;
//     } catch (error) {
//       return thunkApi.rejectWithValue('No user data :(');
//     }
//   },
// );

export const logout = createAsyncThunk("auth/logout", async (_, thunkApi) => {
  const state = thunkApi.getState();
  const persistedToken = state.auth.accessToken;
  try {
    await logoutUserApi(persistedToken);
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});