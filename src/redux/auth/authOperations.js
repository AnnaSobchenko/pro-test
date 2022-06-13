import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  signinUserApi,
  logoutUserApi,
  signupUserApi,
  getUserInfo,
  refreshUserTokenApi,
} from "../../utils/fetchApi";

export const signup = createAsyncThunk(
  "auth/signup",
  async (userData, thunkApi) => {
    const { confirmPassword, ...rest } = userData;
    console.log("rest", rest);
    try {
      const data = await signupUserApi(rest);
      // console.log("datasignupUserApi", data);
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
      // console.log('data.ResponseBody', data)
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const getInfo = createAsyncThunk(
  "auth/current",
  async (userInfo, thunkApi) => {
    try {
      const data = await getUserInfo(userInfo);
      // console.log(data)
      return data.user.email;
    } catch (error) {
      return thunkApi.rejectWithValue("No user data :(");
    }
  }
);

export const logout = createAsyncThunk("auth/logout", async (_, thunkApi) => {
  const state = thunkApi.getState();
  const persistedToken = state.auth.accessToken;
  try {
    return await logoutUserApi(persistedToken);
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});

export const getNewTokens = createAsyncThunk(
  "auth/refresh",
  async (_, thunkApi) => {
    const state = thunkApi.getState();
    // const refreshToken = state.auth.refreshToken;
    const persistedToken = state.auth.accessToken;
    // const sid = state.auth.sid;
    if (!persistedToken) {
      return thunkApi.rejectWithValue();
    }
    try {
      const data = await refreshUserTokenApi(persistedToken);
      console.log("data", data);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
