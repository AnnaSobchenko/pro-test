import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  //   technicalQuestionsApi,
  //   theoryQuestionsApi,
  technicalQuestionsCheckApi,
  theoryQuestionsCheckApi,
  questionsApi,
} from "../../utils/fetchApi";

export const questions = createAsyncThunk(
  "test/:question",
  async (testingType, thunkApi) => {
    try {
      const getTheoryQuestion = await questionsApi(testingType);
      return getTheoryQuestion;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

// export const technicalQuestions = createAsyncThunk(
// 	"test/technical",
// 	async (_, thunkApi) => {
// 		try {
// 			const getTechnicalQuestion = await technicalQuestionsApi();
// 			return getTechnicalQuestion;
// 		} catch (error) {
// 			return thunkApi.rejectWithValue(error.message);
// 		}
// 	}
// );

export const theoryQuestionsCheck = createAsyncThunk(
  "test/theory/check",
  async (questionInfo, thunkApi) => {
    try {
      // console.log("theoryQuestionsCheck:", questionInfo);
      const getTheoryQuestion = await theoryQuestionsCheckApi(questionInfo);
      return getTheoryQuestion;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const technicalQuestionsCheck = createAsyncThunk(
  "test/technical/check",
  async (questionInfo, thunkApi) => {
    try {
      const getTechnicalQuestion = await technicalQuestionsCheckApi(
        questionInfo
      );
      return getTechnicalQuestion;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);
