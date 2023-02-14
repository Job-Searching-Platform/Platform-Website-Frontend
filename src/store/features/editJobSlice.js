import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  job_initials: [],
};

export const editJobSlice = createSlice({
  name: "Job",
  initialState,
  reducers: {
    editInitialJob: (state, action) => {
      state.job_initials = action.payload;

      // state._id = action.payload._id;
      // state.recruiter = action.payload.recruiter;
      // state.company = action.payload.company;
      // state.title = action.payload.title;
      // state.descriptionText = action.payload.descriptionText;
      // state.responsibilitiesText = action.payload.responsibilitiesText;
      // state.skillsText = action.payload.skillsText;
      // state.postedDate = action.payload.postedDate;
      // state.location = action.payload.location;
      // state.jobType = action.payload.jobType;
      // state.remote = action.payload.remote;
      // state.experience = action.payload.experience;
      // state.skills = action.payload.skills;
      // state.salary = action.payload.salary;
      // state.candidateNumber = action.payload.candidateNumber;
      // state.candidateLevel = action.payload.candidateLevel;
      // state.benefitsForCandidate = action.payload.benefitsForCandidate;
      // state.requiredLanguages = action.payload.requiredLanguages;
    },
    addJob: (state, action) => {
      state.job_initials.push(action.payload);
    },
    deleteJob: (state, action) => {
      state.job_initials = state.job_initials.filter((exp) => {
        return exp.job_initials._id !== action.payload._id;
      });
    },
    editJob: (state, action) => {
      state.job_initials = state.job_initials.filter((exp) => {
        return exp.job_initials._id !== action.payload._id;
      });
      state.job_initials.push(action.payload);
    },
    editApplicant: (state, action) => {
      state.job_initials = state.job_initials.filter((exp) => {
        return exp.job_initials._id === action.payload[1];
      });
      state.job_initials.applicants.push(action.payload[0]);
    },
  },
});

export default editJobSlice.reducer;
export const { editJob, editApplicant, editInitialJob, deleteJob, addJob } =
  editJobSlice.actions;
