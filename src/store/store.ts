import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./Slices/AuthSlice/authSlice";
import blogReducer from "./Slices/BlogSlice/blogSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    blog: blogReducer,
  },
});

// Define RootState and AppDispatch types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
