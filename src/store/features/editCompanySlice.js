import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  recruiter: null,
  _id: null,
  title: "",
  subTitle: "",
  descriptionText: "",
  founder: [],
  industry: [],
  openedDate: null,
  country: "",
  city: "",
  phoneNumber: null,
  website: "",
  linkedin: "",
  companySize: "",
  skills: [],
  gallery: [],
  photo:
    "https://images.ctfassets.net/hrltx12pl8hq/6czYVzKLCtCAjcfDc6Q9h2/b268534ee924bcd993e530919d5f96d1/Holiday-Look-Book_Thumb.jpg?fit=fill&w=480&h=270&fm=webp",
  companyValue: null,
  job: [],
};

export const editCompanySlice = createSlice({
  name: "Company",
  initialState,
  reducers: {
    editInitialCompany: (state, action) => {
      state._id = action.payload._id;
      state.recruiter = action.payload.recruiter;
      state.title = action.payload.title;
      state.subTitle = action.payload.subTitle;
      state.descriptionText = action.payload.descriptionText;
      state.founder = [...state.founder, action.payload.founder];
      state.industry = action.payload.industry;
      state.openedDate = action.payload.openedDate;
      state.country = action.payload.country;
      state.city = action.payload.city;
      state.phoneNumber = action.payload.phoneNumber;
      state.website = action.payload.website;
      state.linkedin = action.payload.linkedin;
      state.companySize = [action.payload.companySize];
      state.skills = action.payload.skills;
      state.gallery = action.payload.gallery;
      state.photo = action.payload.photo;
      state.companyValue = action.payload.companyValue;
      state.job = action.payload.job;
    },
    addCompany: (state, action) => {
      state.experience.push(action.payload);
    },
    deleteCompany: (state, action) => {
      state.experience = state.experience.filter((exp) => {
        return exp._id !== action.payload._id;
      });
    },
    editCompany: (state, action) => {
      state.experience = state.experience.filter((exp) => {
        return exp._id !== action.payload._id;
      });
      state.experience.push(action.payload);
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
