import { createSlice } from "@reduxjs/toolkit";

import { questions, questionsCheck } from "../questions/questionsOperations";

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
    [questionsCheck.pending](state) {
      state.isLoading = true;
    },
    [questionsCheck.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.error = null;
      state.rightAnswers = payload;
    },
    [questionsCheck.rejected](state, { payload }) {
      state.isLoading = false;
      state.error = payload;
      state.rightAnswers = null;
    },
  },
});

export const { getUserAnswer, testingType, setQuestionsForUser } =
  questionsSlice.actions;
export default questionsSlice.reducer;
