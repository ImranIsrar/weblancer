import { configureStore } from "@reduxjs/toolkit";
import userDetails from "../features/userDetails";

export const store = configureStore({
  reducer: {
    app: userDetails
  },
  // This is Used When to Saved Non Serialized Data to Redux
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: false,
  }),
});