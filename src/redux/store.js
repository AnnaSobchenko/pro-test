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
import questionsReducer from "./questions/questionsSlice";

const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["accessToken"],
};

const questionsPersistConfig = {
  key: "questions",
  storage,
  whitelist: ["accessToken", "refreshToken"],
};

const authPersistedReducer = persistReducer(authPersistConfig, authReducer);
const questionsPersistedReducer = persistReducer(
  questionsPersistConfig,
  questionsReducer
);

const store = configureStore({
  reducer: {
    auth: authPersistedReducer,
    questions: questionsPersistedReducer,
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
