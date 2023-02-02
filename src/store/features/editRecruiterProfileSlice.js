import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  recruiter: null,
  _id: null,
  country: "",
  city: "",
  phoneNumber: null,
  website: "",
  linkedin: "",
  github: "",
  photo:
    "https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg",
  achievement: "",
  bio: "",
  skills: [],
  opentoRoles: [],
  primaryRole: "",
  yearofExperience: "",
  resume: "",
  education: [],
  experience: [],
};

export const editRecruiterProfileSlice = createSlice({
  name: "RecruiterProfile",
  initialState,
  reducers: {
    editRecruiterProfile: (state, action) => {
      state._id = action.payload._id;
      state.recruiter = action.payload.recruiter;
      state.country = action.payload.country;
      state.city = action.payload.city;
      state.phoneNumber = action.payload.phoneNumber;
      state.website = action.payload.website;
      state.linkedin = action.payload.linkedin;
      state.github = action.payload.github;
      state.photo = action.payload.photo;
      state.achievement = action.payload.achievement;
      state.bio = action.payload.bio;
      state.skills = [...state.skills, action.payload.skills];
      state.opentoRoles = [action.payload.opentoRoles];
      state.primaryRole = action.payload.primaryRole;
      state.yearofExperience = action.payload.yearofExperience;
      state.resume = action.payload.resume;
      state.education = action.payload.education;
      state.experience = action.payload.experience;
    },
    addExperience: (state, action) => {
      state.experience.push(action.payload);
    },
    deleteExperience: (state, action) => {
      state.experience = state.experience.filter((exp) => {
        return exp._id !== action.payload._id;
      });
    },
    editExperience: (state, action) => {
      state.experience = state.experience.filter((exp) => {
        return exp._id !== action.payload._id;
      });
      state.experience.push(action.payload);
    },
    addEducation: (state, action) => {
      state.education.push(action.payload);
    },
    deleteEducation: (state, action) => {
      state.education = state.education.filter((edu) => {
        return edu._id !== action.payload._id;
      });
    },
    editEducation: (state, action) => {
      state.education = state.education.filter((edu) => {
        return edu._id !== action.payload._id;
      });
      state.education.push(action.payload);
    },
  },
});

export default editRecruiterProfileSlice.reducer;
export const {
  editRecruiterProfile,
  editExperience,
  deleteExperience,
  addExperience,
  editEducation,
  deleteEducation,
  addEducation,
} = editRecruiterProfileSlice.actions;
