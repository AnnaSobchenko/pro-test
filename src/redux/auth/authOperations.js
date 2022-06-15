import { createAsyncThunk } from "@reduxjs/toolkit";
import { Notify } from "notiflix/build/notiflix-notify-aio";
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
    try {
      const data = await signupUserApi(rest);
      return data;
    } catch (error) {
      Notify.failure("Email or password is incorrect");

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
      Notify.failure("Email or password is incorrect");
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const getInfo = createAsyncThunk(
  "auth/current",
  async (userInfo, thunkApi) => {
    try {
      const data = await getUserInfo(userInfo);
      return data.user.email;
    } catch (error) {
      Notify.failure("No user data :(");
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
    const persistedToken = state.auth.accessToken;
    if (!persistedToken) thunkApi.rejectWithValue();

    try {
      const data = await refreshUserTokenApi({ persistedToken });
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
