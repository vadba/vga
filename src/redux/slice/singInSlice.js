import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { request } from "../../tools/request.js";

export const fetchUsersData = createAsyncThunk(
  "dataUsers/fetchData",

  async (args, { rejectWithValue }) => {
    try {
      const { result } = await request({
        url: "users",
      });

      return { users_result: result };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const singInSlice = createSlice({
  name: "singIn",
  initialState: {
    singIn: false,
    usersData: false,
    users: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsersData.pending, (state) => {
        state.status = "loading";
        state.err = null;
      })
      .addCase(fetchUsersData.fulfilled, (state, action) => {
        state.status = "resolved";
        state.usersData = action.payload.users_result;
        !!action.payload.users_result.length
          ? (state.users = true)
          : (state.users = false);
      })
      .addCase(fetchUsersData.rejected, (state, action) => {
        state.status = "rejected";
        state.err = action.payload;
      });
  },
  reducers: {
    stateSingIn: (state) => {
      state.singIn = true;
    },
    stateSingOut: (state) => {
      state.singIn = false;
    },
    stateUsers: (state) => {
      state.users = true;
    },
    stateNoUsers: (state) => {
      state.users = false;
    },
  },
});

export const { stateSingIn, stateSingOut, stateUsers, stateNoUsers } =
  singInSlice.actions;
export default singInSlice.reducer;
