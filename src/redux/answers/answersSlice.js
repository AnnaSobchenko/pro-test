import { createSlice } from "@reduxjs/toolkit";

import { questions, answersCheck } from "../answers/answersOperations";

const answersSlice = createSlice({
  name: "answers",
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
    [answersCheck.pending](state) {
      state.isLoading = true;
    },
    [answersCheck.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.error = null;
      state.rightAnswers = payload;
    },
    [answersCheck.rejected](state, { payload }) {
      state.isLoading = false;
      state.error = payload;
      state.rightAnswers = null;
    },
  },
});

export const { getUserAnswer, testingType, setQuestionsForUser } =
answersSlice.actions;
export default answersSlice.reducer;
