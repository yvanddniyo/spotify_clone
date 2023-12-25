import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { shazamCoreApi, shazamApi } from "./services/shazamCore";

import playerReducer from "./features/playerSlice";

export const store = configureStore({
  reducer: {
    [shazamCoreApi.reducerPath]: shazamCoreApi.reducer,
    [shazamApi.reducerPath]: shazamApi.reducer,
    player: playerReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      shazamCoreApi.middleware,
      shazamApi.middleware
    ),
});
