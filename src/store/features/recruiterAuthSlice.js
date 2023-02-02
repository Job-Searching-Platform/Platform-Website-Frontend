import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
const initialState = {
  isLoggedIn: Cookies.get("logged_in_recruiter"),
  token: null,
  email: null,
  fullName: null,
};

export const recruiterAuthSlice = createSlice({
  name: "recruiterAuth",
  initialState,
  reducers: {
    signup: (state, action) => {
      const { fullName, email, _id, token } = action.payload;
      state.fullName = fullName;
      state.email = email;
      state._id = _id;
      state.token = token;
    },
    login: (state, action) => {
      const { fullName, email, _id, token } = action.payload;
      state.isLoggedIn = Cookies.get("logged_in_recruiter");
      state.fullName = fullName;
      state.email = email;
      state._id = _id;
      state.token = token;
    },
    logout: (state) => {
      state.isLoggedIn = null;
      state.token = null;
      state.fullName = null;
      state.email = null;
    },
  },
});

export default recruiterAuthSlice.reducer;
export const { login, logout, signup } = recruiterAuthSlice.actions;
