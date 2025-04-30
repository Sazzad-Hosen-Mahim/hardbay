import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const baseURL = import.meta.env.VITE_BASE_URL;

interface ProductDetailsState {
  loading: boolean;
  error: string | null;
  product: Product | null;
}

// You can import Product type from productSlice if it's in a shared location
export interface Product {
  id: string;
  productName: string;
  productModel: string;
  brandName: string;
  slug: string;
  description: string;
  filters: { name: string; value: string | number }[];
  keyApplications: string[];
  keyFeatures: string[];
  images: string[];
  price: number;
  available: boolean;
  serviceId: string;
  createdAt: string;
  updatedAt: string;
  service: {
    id: string;
    title: string;
    description: string;
    createdAt: string;
    updatedAt: string;
  };
  specs: {
    id: string;
    title: string;
    description: string;
    data: Record<string, string>[];
    productId: string;
    createdAt: string;
    updatedAt: string;
  }[];
}

const initialState: ProductDetailsState = {
  loading: false,
  error: null,
  product: null,
};

// Async thunk to fetch product by ID
export const fetchProductDetails = createAsyncThunk<
  Product,
  string,
  { rejectValue: string }
>("productDetails/fetch", async (id, { rejectWithValue }) => {
  try {
    const response = await axios.get(`${baseURL}/products/${id}`);
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error) && error.message) {
      return rejectWithValue(error.message);
    }
    return rejectWithValue("Unknown error");
  }
});

const productDetailsSlice = createSlice({
  name: "productDetails",
  initialState,
  reducers: {
    clearProductDetails(state) {
      state.product = null;
      state.error = null;
      state.loading = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductDetails.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.product = null;
      })
      .addCase(fetchProductDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.product = action.payload;
      })
      .addCase(fetchProductDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload ?? "Failed to load product details.";
      });
  },
});

export const { clearProductDetails } = productDetailsSlice.actions;
export default productDetailsSlice.reducer;
