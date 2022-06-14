import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  questionsApi,
  questionsCheckApi,
} from "../../utils/fetchApi";

export const questions = createAsyncThunk(
  "test/:type",
  async (testingType, thunkApi) => {
    try {
      const getTheoryQuestion = await questionsApi(testingType);
      return getTheoryQuestion;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const questionsCheck = createAsyncThunk(
  "test/check/:type",
  async (data, thunkApi) => {
    try {
      const getTechnicalQuestion = await questionsCheckApi(data);
      return getTechnicalQuestion;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);
