import { createSlice } from "@reduxjs/toolkit";

const singInSlice = createSlice({
  name: "singIn",
  initialState: {
    singIn: false,
    users: false,
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
