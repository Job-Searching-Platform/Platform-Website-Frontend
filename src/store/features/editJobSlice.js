import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  _id: null,
  recruiter: null,
  company: "",
  title: "",
  descriptionText: "",
  responsibilitiesText: "",
  skillsText: "",
  postedDate: "",
  location: "",
  jobType: "",
  remote: "",
  experience: null,
  skills: [],
  salary: [],
  candidateNumber: null,
  candidateLevel: [],
  benefitsForCandidate: "",
  requiredLanguages: [],
};

export const editJobSlice = createSlice({
  name: "Job",
  initialState,
  reducers: {
    editInitialJob: (state, action) => {
      state._id = action.payload._id;
      state.recruiter = action.payload.recruiter;
      state.company = action.payload.company;
      state.title = action.payload.title;
      state.descriptionText = action.payload.descriptionText;
      state.responsibilitiesText = action.payload.responsibilitiesText;
      state.skillsText = action.payload.skillsText;
      state.postedDate = action.payload.postedDate;
      state.location = action.payload.location;
      state.jobType = action.payload.jobType;
      state.remote = action.payload.remote;
      state.experience = action.payload.experience;
      state.skills = action.payload.skills;
      state.salary = action.payload.salary;
      state.candidateNumber = action.payload.candidateNumber;
      state.candidateLevel = action.payload.candidateLevel;
      state.benefitsForCandidate = action.payload.benefitsForCandidate;
      state.requiredLanguages = action.payload.requiredLanguages;
    },
    addJob: (state, action) => {
      state.experience.push(action.payload);
    },
    deleteJob: (state, action) => {
      state.experience = state.experience.filter((exp) => {
        return exp._id !== action.payload._id;
      });
    },
    editJob: (state, action) => {
      state.experience = state.experience.filter((exp) => {
        return exp._id !== action.payload._id;
      });
      state.experience.push(action.payload);
    },
  },
});

export default editJobSlice.reducer;
export const {
  RecruiterUserProfile,
  editJob,
  editInitialJob,
  deleteJob,
  addJob,
} = editJobSlice.actions;
