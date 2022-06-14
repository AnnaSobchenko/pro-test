import { createSlice } from "@reduxjs/toolkit";

import {
  questions,
  technicalQuestionsCheck,
  theoryQuestionsCheck,
} from "../questions/questionsOperations";

const questionsSlice = createSlice({
  name: "questions",
  initialState: {
    typeOfTesting: "",
    questionsForUser: [],
    isLoading: false,
    error: null,
    userAnswer: [],
    rightAnswers: null,
  },
  reducers: {
    testingType(state, { payload }) {
      state.typeOfTesting = payload;
    },
    getUserAnswer(state, { payload }) {
      state.userAnswer = [...payload];
    },
    setQuestionsForUser(state) {
      state.questionsForUser = [];
      state.typeOfTesting = "";
      state.isLoading = false;
      state.error = null;
    },
  },
  extraReducers: {
    [questions.pending](state) {
      state.isLoading = true;
    },
    [questions.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.error = null;
      state.questionsForUser = [...payload];
    },
    [questions.rejected](state, { payload }) {
      state.isLoading = false;
      state.error = payload;
    },

    [theoryQuestionsCheck.pending](state) {
      state.isLoading = true;
    },
    [theoryQuestionsCheck.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.error = null;
      state.rightAnswers = payload;
    },
    [theoryQuestionsCheck.rejected](state, { payload }) {
      state.isLoading = false;
      state.error = payload;
      state.rightAnswers = null;
    },
    [technicalQuestionsCheck.pending](state) {
      state.isLoading = true;
    },
    [technicalQuestionsCheck.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.error = null;
      state.rightAnswers = payload;
    },
    [technicalQuestionsCheck.rejected](state, { payload }) {
      state.isLoading = false;
      state.error = payload;
      state.rightAnswers = null;
    },
  },
});
export const { getUserAnswer, testingType, setQuestionsForUser } =
  questionsSlice.actions;
export default questionsSlice.reducer;
