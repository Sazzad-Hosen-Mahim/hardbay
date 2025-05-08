// src/redux/slices/dynamicProductSlice.ts
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const baseURL = import.meta.env.VITE_BASE_URL;

export interface DynamicProduct {
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

interface DynamicProductSliceState {
  loading: boolean;
  error: string | null;
  filteredProducts: DynamicProduct[];
}

const initialState: DynamicProductSliceState = {
  loading: false,
  error: null,
  filteredProducts: [],
};

const buildQueryString = (params: Record<string, string[]>) => {
  const searchParams = new URLSearchParams();

  for (const key in params) {
    params[key].forEach((value) => {
      searchParams.append(key, value);
    });
  }

  return searchParams.toString();
};

export const fetchFilteredProducts = createAsyncThunk<
  DynamicProduct[],
  Record<string, string[]>,
  { rejectValue: string }
>("dynamicProducts/fetch", async (queryParams, { rejectWithValue }) => {
  try {
    const queryString = buildQueryString(queryParams);
    console.log("Query String:", queryString); // Debugging line
    const response = await axios.get(`${baseURL}/products?${queryString}`);
    return response.data.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
    return rejectWithValue("Unknown error");
  }
});

// Slice
const dynamicProductSlice = createSlice({
  name: "dynamicProducts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFilteredProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchFilteredProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.filteredProducts = action.payload;
      })
      .addCase(fetchFilteredProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default dynamicProductSlice.reducer;
