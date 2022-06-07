export const getUserEmail = (state) => state.auth.user.email;
export const getIsErrorAuth = (state) => state.auth.error;
export const getIsLoading = (state) => state.auth.isLoading;
export const getIsLoggedIn = (state) => state.auth.isLoggedIn;
// export const getIsLoggedIn = (state) => !!state.auth.accessToken;
