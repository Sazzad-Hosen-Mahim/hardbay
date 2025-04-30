import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const baseURL = import.meta.env.VITE_BASE_URL;

interface ServiceState {
  id: string;
  title: string;
  description: string;
  products: [];
}

interface ServiceSliceState {
  loading: boolean;
  error: string | null;
  service: ServiceState | null;
}

const initialState: ServiceSliceState = {
  loading: false,
  error: null,
  service: null,
};

export const fetchService = createAsyncThunk<ServiceState>(
  "fetchService",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${baseURL}/services`);
      return response.data;
    } catch (error: unknown) {
      if (axios.isAxiosError(error) && error.message) {
        return rejectWithValue(error.message);
      }
      return rejectWithValue("Unknown error");
    }
  }
);

const serviceSlice = createSlice({
  name: "service",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchService.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchService.fulfilled, (state, action) => {
        state.loading = false;
        state.service = action.payload;
      })
      .addCase(fetchService.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default serviceSlice.reducer;
