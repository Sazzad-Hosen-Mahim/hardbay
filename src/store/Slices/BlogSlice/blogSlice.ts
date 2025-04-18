import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

const baseUrl = import.meta.env.VITE_BASE_URL;

interface BlogPost {
  id: number;
  title: string;
  content: string;
  createdAt: string;
}

interface BlogResponse {
  data: BlogPost[];
  total: number;
  page: number;
  lastPage: number;
}

interface BlogState {
  posts: BlogResponse | null;
  loading: boolean;
  error: string | null;
}

const initialState: BlogState = {
  posts: null,
  loading: false,
  error: null,
};

export const fetchPosts = createAsyncThunk<
  BlogResponse,
  { page: number; limit: number },
  { rejectValue: string }
>("fetchPosts", async ({ page, limit }, thunkAPI) => {
  try {
    const response = await axios.get(
      `${baseUrl}/blog?limit=${limit}&page=${page}`
    );
    return response.data;
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error.message || "Failed to fetch posts");
  }
});
const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchPosts.fulfilled,
        (state, action: PayloadAction<BlogResponse>) => {
          state.loading = false;
          state.posts = action.payload;
        }
      )
      .addCase(
        fetchPosts.rejected,
        (state, action: PayloadAction<string | undefined>) => {
          state.loading = false;
          state.error = action.payload || "Failed to fetch posts";
        }
      );
  },
});

export default blogSlice.reducer;
