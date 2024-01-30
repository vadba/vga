import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { request } from "../../tools/request";

export const fetchPostData = createAsyncThunk(
  "post/fetchPostData",

  async (slug, { rejectWithValue }) => {
    try {
      const { result } = await request({
        url: `post/article/${slug}`,
      });

      return { post: result };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const postSlice = createSlice({
  name: "post",
  initialState: {
    post: false,
    totalFound: 0,
    status: null,
    err: null,
  },
  reducers: {
    clearPost: (state) => {
      state.post = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPostData.pending, (state) => {
        state.status = "loading";
        state.err = null;
      })
      .addCase(fetchPostData.fulfilled, (state, action) => {
        state.status = "resolved";
        state.post = action.payload.post;
      })
      .addCase(fetchPostData.rejected, (state, action) => {
        state.status = "rejected";
        state.err = action.payload;
      });
  },
});

export const { clearPost } = postSlice.actions;
export default postSlice.reducer;
