import { createAsyncThunk } from "@reduxjs/toolkit";
import { Notify } from "notiflix/build/notiflix-notify-aio";
import { questionsApi, answersCheckApi } from "../../utils/fetchApi";

export const questions = createAsyncThunk(
  "test/:type",
  async (testingType, thunkApi) => {
    try {
      const getQuestion = await questionsApi(testingType);
      return getQuestion;
    } catch (error) {
      Notify.failure("Server problem, please try again later");
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const answersCheck = createAsyncThunk(
  "test/check/:type",
  async (data, thunkApi) => {
    try {
      const getRightAnswersQuantity = await answersCheckApi(data);
      return getRightAnswersQuantity;
    } catch (error) {
      Notify.failure("Server problem, please try again later");
      return thunkApi.rejectWithValue(error);
    }
  }
);
