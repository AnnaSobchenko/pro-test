import { createSlice } from "@reduxjs/toolkit";

import {
	technicalQuestions,
	technicalQuestionsCheck,
	theoryQuestions,
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
	},
	extraReducers: {
		[theoryQuestions.pending](state) {
			state.isLoading = true;
		},
		[theoryQuestions.fulfilled](state, { payload }) {
			state.isLoading = false;
			state.error = null;
			state.questionsForUser = [...payload];
		},
		[theoryQuestions.rejected](state, { payload }) {
			state.isLoading = false;
			state.error = payload;
		},
		[technicalQuestions.pending](state) {
			state.isLoading = true;
		},
		[technicalQuestions.fulfilled](state, { payload }) {
			state.isLoading = false;
			state.error = null;
			state.questionsForUser = [...payload];
		},
		[technicalQuestions.rejected](state, { payload }) {
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
export const { getUserAnswer, testingType } = questionsSlice.actions;
export default questionsSlice.reducer;
