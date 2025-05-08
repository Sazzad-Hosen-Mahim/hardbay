import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./Slices/AuthSlice/authSlice";
import blogReducer from "./Slices/BlogSlice/blogSlice";
import blogDetailsReducer from "./Slices/BlogSlice/blogDetailsSlice";
import serviceReducer from "./Slices/ServiceSlice/serviceSlice";
import productReducer from "./Slices/ProductSlice/productSlice";
import productDetailsReducer from "./Slices/ProductSlice/productDetailsSlice";
import cartReducer from "./Slices/CartSlice/cartSlice";
import dynamicProductReducer from "./Slices/ProductSlice/dynamicProductSlice";
import searchedProductReducer from "./Slices/ProductSlice/searchedProductSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    blog: blogReducer,
    blogDetails: blogDetailsReducer,
    service: serviceReducer,
    product: productReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer,
    dynamicProduct: dynamicProductReducer,
    searchedProduct: searchedProductReducer,
  },
});

// Define RootState and AppDispatch types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
