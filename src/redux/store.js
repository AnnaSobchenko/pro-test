import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import authReducer from "./auth/authSlice";
import answersReducer from "./answers/answersSlice";

const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["accessToken", "user"],
};

const answersPersistConfig = {
  key: "answers",
  storage,
  whitelist: ["accessToken", "refreshToken"],
};

const authPersistedReducer = persistReducer(authPersistConfig, authReducer);
const answersPersistedReducer = persistReducer(
  answersPersistConfig,
  answersReducer
);

const store = configureStore({
  reducer: {
    auth: authPersistedReducer,
    answers: answersPersistedReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  //   devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);

setupListeners(store.dispatch);

export default store;
