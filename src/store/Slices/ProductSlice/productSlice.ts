import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const baseURL = import.meta.env.VITE_BASE_URL;

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

interface ProductSliceState {
  loading: boolean;
  error: string | null;
  products: Product[];
  total: number;
  currentPage: number;
  limit: number;
}

const initialState: ProductSliceState = {
  loading: false,
  error: null,
  products: [],
  total: 0,
  currentPage: 1,
  limit: 10,
};

// Async thunk with pagination
export const fetchProducts = createAsyncThunk<
  { data: Product[]; total: number },
  { page: number; limit: number },
  { rejectValue: string }
>("products/fetch", async ({ page, limit }, { rejectWithValue }) => {
  try {
    const response = await axios.get(`${baseURL}/products`, {
      params: { page, limit },
    });

    return {
      data: response.data.data,
      total: response.data.total || response.data.data.length,
    };
  } catch (error: unknown) {
    if (axios.isAxiosError(error) && error.message) {
      return rejectWithValue(error.message);
    }
    return rejectWithValue("Unknown error");
  }
});

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setPage(state, action) {
      state.currentPage = action.payload;
    },
    setLimit(state, action) {
      state.limit = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload.data;
        state.total = action.payload.total;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { setPage, setLimit } = productSlice.actions;
export default productSlice.reducer;
