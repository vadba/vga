import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { request } from "../../tools/request";

export const fetchPostsData = createAsyncThunk(
  "posts/fetchPostsData",

  async (args, { rejectWithValue }) => {
    try {
      const { result } = await request({
        url: args.category ? "post" : "post/edit",
        params: args.category
          ? { category: args.category }
          : { postId: args.postId },
      });

      return { posts: result };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const postsCategorySlice = createSlice({
  name: "posts",
  initialState: {
    posts: false,
    totalFound: 0,
    status: null,
    err: null,
  },
  reducers: {
    clearPosts: (state) => {
      state.posts = false;
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
        state.posts = action.payload.posts;
      })
      .addCase(fetchPostsData.rejected, (state, action) => {
        state.status = "rejected";
        state.err = action.payload;
      });
  },
});

export const { clearPosts } = postsCategorySlice.actions;
export default postsCategorySlice.reducer;
