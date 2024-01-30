import { configureStore } from "@reduxjs/toolkit";
import postsCategorySlice from "../slice/postsCategorySlice.js";
import postsSlice from "../slice/postsSlice.js";
import singInSlice from "../slice/singInSlice.js";
import categorySlice from "../slice/categorySlice.js";
import postsSliderSlice from "../slice/postsSliderSlice.js";
import recentNewsSlice from "../slice/recentNewsSlice.js";
import postSlice from "../slice/postSlice.js";

const store = configureStore({
  reducer: {
    postsSlice,
    postSlice,
    singInSlice,
    categorySlice,
    postsCategorySlice,
    postsSliderSlice,
    recentNewsSlice,
  },
});

export default store;
