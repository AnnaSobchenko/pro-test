import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  questionsApi,
  answersCheckApi,
} from "../../utils/fetchApi";

export const questions = createAsyncThunk(
  "test/:type",
  async (testingType, thunkApi) => {
    try {
      const getQuestion = await questionsApi(testingType);
      return getQuestion;
    } catch (error) {
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
      return thunkApi.rejectWithValue(error);
    }
  }
);
