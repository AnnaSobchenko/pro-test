import { createSlice } from "@reduxjs/toolkit";

import {
  technicalQuestions,
  theoryQuestions,
} from "../questions/questionsOperations";

const questionsSlice = createSlice({
  name: "questions",
  initialState: {
    typeOfTesting: "",
    questions: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    technicalTesting(state, { payload }) {
      state.typeOfTesting = payload;
    },
    // theoryTesting(state) {
    //   state.typeOfTesting = "Testing theory";
    // },
  },
  extraReducers: {
    [theoryQuestions.pending](state, { payload }) {
      state.isLoading = true;
      state.error = null;
    },
    [theoryQuestions.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.error = null;
      state.questions = payload;
    },
    [theoryQuestions.rejected](state, { payload }) {
      state.isLoading = false;
      state.error = payload;
    },
    [technicalQuestions.pending](state, { payload }) {
      state.isLoading = true;
    },
    [technicalQuestions.fulfilled](state, { payload }) {
      state.isLoading = true;
      state.error = null;
      state.questions = payload;
    },
    [technicalQuestions.rejected](state, { payload }) {
      state.isLoading = false;
      state.error = payload;
    },
  },
});
export const { theoryTesting, technicalTesting } = questionsSlice.actions;
export default questionsSlice.reducer;
