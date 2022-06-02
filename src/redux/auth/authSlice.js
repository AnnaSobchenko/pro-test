import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: {
      user: { name: null, email: null },
      accessToken: null,
      refreshToken: null,
      sid: null,
      isLoading: false,
      isLoggedIn: false,
      error: null,
    },
    reducers: {
     
    },
    extraReducers: {
     
    },
  });
//   export const {  } = authSlice.actions;
  export default authSlice.reducer;