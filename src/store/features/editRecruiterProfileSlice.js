import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const initialState = {
  isLoggedIn: Cookies.get("logged_in_recruiter"),
  _id: null,
  token: null,
  email: null,
  fullName: null,
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
      state.token = action.payload.token;
      state.fullName = action.payload.fullName;
      state.email = action.payload.email;
      state.country = action.payload.country;
      state.city = action.payload.city;
      state.phoneNumber = action.payload.phoneNumber;
      state.website = action.payload.website;
      state.linkedin = action.payload.linkedin;
      state.github = action.payload.github;
      state.photo = action.payload.photo;
      state.achievement = action.payload.achievement;
      state.bio = action.payload.bio;
      state.skills = action.payload.skills;
      state.opentoRoles = action.payload.opentoRoles;
      state.primaryRole = action.payload.primaryRole;
      state.yearofExperience = action.payload.yearofExperience;
      state.resume = action.payload.resume;
      state.education = action.payload.education;
      state.experience = action.payload.experience;
    },
    addExperienceRecruiter: (state, action) => {
      state.experience.push(action.payload);
    },
    deleteExperienceRecruiter: (state, action) => {
      state.experience = state.experience.filter((exp) => {
        return exp._id !== action.payload._id;
      });
    },
    editExperienceRecruiter: (state, action) => {
      state.experience = state.experience.filter((exp) => {
        return exp._id !== action.payload._id;
      });
      state.experience.push(action.payload);
    },
    addEducationRecruiter: (state, action) => {
      state.education.push(action.payload);
    },
    deleteEducationRecruiter: (state, action) => {
      state.education = state.education.filter((edu) => {
        return edu._id !== action.payload._id;
      });
    },
    editEducationRecruiter: (state, action) => {
      state.education = state.education.filter((edu) => {
        return edu._id !== action.payload._id;
      });
      state.education.push(action.payload);
    },

    signupRecruiter: (state, action) => {
      const { fullName, email, _id, token } = action.payload;
      state.fullName = fullName;
      state.email = email;
      state._id = _id;
      state.token = token;
    },
    loginRecruiter: (state, action) => {
      state.isLoggedIn = Cookies.get("logged_in_recruiter");
      state.fullName = action.payload.fullName;
      state.email = action.payload.email;
      state._id = action.payload._id;
      state.token = action.payload.token;
      state.country = action.payload.country;
      state.city = action.payload.city;
      state.phoneNumber = action.payload.phoneNumber;
      state.website = action.payload.website;
      state.linkedin = action.payload.linkedin;
      state.github = action.payload.github;
      state.photo = action.payload.photo;
      state.achievement = action.payload.achievement;
      state.bio = action.payload.bio;
      state.skills = action.payload.skills;
      state.opentoRoles = action.payload.opentoRoles;
      state.primaryRole = action.payload.primaryRole;
      state.yearofExperience = action.payload.yearofExperience;
      state.resume = action.payload.resume;
    },
    logoutRecruiter: (state) => {
      state.isLoggedIn = null;
      state.token = null;
      state.fullName = null;
      state.email = null;
      state._id = null;
    },
  },
});

export default editRecruiterProfileSlice.reducer;
export const {
  editRecruiterProfile,
  editExperienceRecruiter,
  deleteExperienceRecruiter,
  addExperienceRecruiter,
  editEducationRecruiter,
  deleteEducationRecruiter,
  addEducationRecruiter,
  loginRecruiter,
  logoutRecruiter,
  signupRecruiter,
} = editRecruiterProfileSlice.actions;
