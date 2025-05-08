import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { SearchResponse } from "@/types/ProductInterface";

const baseURL =
  import.meta.env.VITE_BASE_URL || "https://tortuga7-backend.onrender.com";

interface SearchedProductState {
  searchedResults: SearchResponse;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: SearchedProductState = {
  searchedResults: {
    data: [],
    total: 0,
    currentPage: null,
    totalPages: null,
  },
  status: "idle",
  error: null,
};

export const searchedProduct = createAsyncThunk(
  "product/searchedProduct",
  async (searchTerm: string): Promise<SearchResponse> => {
    const response = await axios.get(
      `${baseURL}/products?search=${searchTerm}`
    );
    const data = response?.data;
    console.log("Searched Product Data in slice: ", data);
    return data;
  }
);

const searchedProductSlice = createSlice({
  name: "searchedProduct",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(searchedProduct.pending, (state) => {
        state.status = "loading";
      })
      .addCase(searchedProduct.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.searchedResults = action.payload;
      })
      .addCase(searchedProduct.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? null;
      });
  },
});

export default searchedProductSlice.reducer;
