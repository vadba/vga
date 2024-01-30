import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { request } from "../../tools/request.js";

export const fetchPostsData = createAsyncThunk(
  "dataSliderPosts/fetchData",

  async (args, { rejectWithValue }) => {
    try {
      const { result } = await request({
        url: "post/main",
      });

      return { posts: result };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const postsSliderSlice = createSlice({
  name: "postsSliderSlice",
  initialState: {
    dataPosts: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPostsData.pending, (state) => {
        state.status = "loading";
        state.err = null;
      })
      .addCase(fetchPostsData.fulfilled, (state, action) => {
        state.status = "resolved";
        state.dataPosts = action.payload.posts;
      })
      .addCase(fetchPostsData.rejected, (state, action) => {
        state.status = "rejected";
        state.err = action.payload;
      });
  },
});

export default postsSliderSlice.reducer;
