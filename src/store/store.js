import { configureStore } from "@reduxjs/toolkit";
import editUserProfileSlice from "./features/editUserProfileSlice";
// import userAuthSlice from "./features/userAuthSlice";
import editRecruiterProfileSlice from "./features/editRecruiterProfileSlice";
// import recruiterAuthSlice from "./features/recruiterAuthSlice";
import editCompanySlice from "./features/editCompanySlice";
import editJobSlice from "./features/editJobSlice";

export const store = configureStore({
  reducer: {
    // User Redux
    UserProfile: editUserProfileSlice,
    // userAuth: userAuthSlice,

    // Recruiter Redux
    RecruiterProfile: editRecruiterProfileSlice,
    // recruiterAuth: recruiterAuthSlice,
    Company: editCompanySlice,
    Job: editJobSlice,
  },
  devTools: true,
});
