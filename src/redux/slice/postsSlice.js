import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { request } from "../../tools/request";

export const fetchPostsData = createAsyncThunk(
  "editPosts/fetchPostsData",

  async (args, { rejectWithValue }) => {
    try {
      const { result } = await request({
        url: "post",
      });

      return { posts: result };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const postsSlice = createSlice({
  name: "editPosts",
  initialState: {
    editPosts: [],
    totalFound: 0,
    status: null,
    err: null,
  },
  reducers: {
    clearPosts: (state) => {
      state.editPosts = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPostsData.pending, (state) => {
        state.status = "loading";
        state.err = null;
      })
      .addCase(fetchPostsData.fulfilled, (state, action) => {
        state.status = "resolved";
        state.editPosts = action.payload.posts;
      })
      .addCase(fetchPostsData.rejected, (state, action) => {
        state.status = "rejected";
        state.err = action.payload;
      });
  },
});

export const { clearPosts } = postsSlice.actions;
export default postsSlice.reducer;
