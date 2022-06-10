import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  technicalQuestionsApi,
  theoryQuestionsApi,
} from "../../utils/fetchApi";

export const theoryQuestions = createAsyncThunk(
  "test/theory",
  async (_, thunkApi) => {
    try {
      const getTheoryQuestion = await theoryQuestionsApi();
      return getTheoryQuestion;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const technicalQuestions = createAsyncThunk(
  "test/technical",
  async (_, thunkApi) => {
    try {
      const getTechnicalQuestion = await technicalQuestionsApi();
      return getTechnicalQuestion;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
