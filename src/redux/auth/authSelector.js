export const getIsLoading = (state) => state.auth.isLoading;
export const getIsLoggedIn = (state) => !!state.auth.accessToken;