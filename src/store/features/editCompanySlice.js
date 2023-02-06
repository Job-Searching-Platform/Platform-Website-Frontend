import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  jobs: [],
};

export const editCompanySlice = createSlice({
  name: "Company",
  initialState,
  reducers: {
    editInitialCompany: (state, action) => {
      state.jobs = action.payload;
    },
    addCompany: (state, action) => {
      state.jobs.push(action.payload);
    },
    deleteCompany: (state, action) => {
      state.jobs = state.jobs.filter((com) => {
        return com._id !== action.payload._id;
      });
    },
    editCompany: (state, action) => {
      state.jobs = state.jobs.filter((com) => {
        return com._id !== action.payload._id;
      });
      state.jobs.push(action.payload);
    },
  },
});

export default editCompanySlice.reducer;
export const {
  RecruiterUserProfile,
  editCompany,
  editInitialCompany,
  deleteCompany,
  addCompany,
} = editCompanySlice.actions;
