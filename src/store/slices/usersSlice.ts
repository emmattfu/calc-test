import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    status: "idle",
    error: null as null | string,
  },
  reducers: {
    getUsersLoading: (state) => {
      state.status = "loading";
    },
    getUsersSuccessed: (state, action) => {
      state.status = "success";
      state.users = action.payload;
    },
    getUsersError: (state, action) => {
      state.status = "error";
      state.error = action.payload;
    },
  },
});

export const {
  getUsersError,
  getUsersLoading,
  getUsersSuccessed,
} = usersSlice.actions;

export default usersSlice.reducer;
