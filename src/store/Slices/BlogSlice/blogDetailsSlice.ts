import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

const baseUrl = import.meta.env.VITE_BASE_URL;

interface BlogDetailsPost {
  id: string;
  title: string;
  content: string;
  finalWords: string;
  image: string;
  createdAt: string;
}

interface BlogDetailState {
  post: BlogDetailsPost | null;
  loading: boolean;
  error: string | null;
}

const initialState: BlogDetailState = {
  post: null,
  loading: false,
  error: null,
};

export const fetchBlogDetails = createAsyncThunk<
  BlogDetailsPost,
  string,
  { rejectValue: string }
>("blogDetails/fetchBlogDetails", async (id, thunkAPI) => {
  try {
    const response = await axios.get(`${baseUrl}/blog/${id}`);
    return response.data;
  } catch (error: any) {
    return thunkAPI.rejectWithValue(
      error.message || "Failed to fetch blog details"
    );
  }
});

const blogDetailsSlice = createSlice({
  name: "blogDetails",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBlogDetails.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchBlogDetails.fulfilled,
        (state, action: PayloadAction<BlogDetailsPost>) => {
          state.loading = false;
          state.post = action.payload;
        }
      )
      .addCase(fetchBlogDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to fetch blog details";
      });
  },
});

export default blogDetailsSlice.reducer;
