import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { request } from "../../tools/request.js";

export const fetchCategoriesData = createAsyncThunk(
  "dataCategories/fetchData",

  async (args, { rejectWithValue }) => {
    try {
      const { result } = await request({
        url: "categories",
      });

      return { categories: result };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const categorySlice = createSlice({
  name: "categorySlice",
  initialState: {
    dataCategories: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategoriesData.pending, (state) => {
        state.status = "loading";
        state.err = null;
      })
      .addCase(fetchCategoriesData.fulfilled, (state, action) => {
        state.status = "resolved";
        state.dataCategories = action.payload.categories;
      })
      .addCase(fetchCategoriesData.rejected, (state, action) => {
        state.status = "rejected";
        state.err = action.payload;
      });
  },
});

export default categorySlice.reducer;
