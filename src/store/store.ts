import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./Slices/AuthSlice/authSlice";
import blogReducer from "./Slices/BlogSlice/blogSlice";
import blogDetailsReducer from "./Slices/BlogSlice/blogDetailsSlice";
import serviceReducer from "./Slices/ServiceSlice/serviceSlice";
import productReducer from "./Slices/ProductSlice/productSlice";
import productDetailsReducer from "./Slices/ProductSlice/productDetailsSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    blog: blogReducer,
    blogDetails: blogDetailsReducer,
    service: serviceReducer,
    product: productReducer,
    productDetails: productDetailsReducer,
  },
});

// Define RootState and AppDispatch types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
