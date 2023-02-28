import { Route, BrowserRouter, Routes } from "react-router-dom";

import Home from "./pages/Home";
import MobileApp from "./pages/MobileApp";
import SignIn from "./pages/Authentication/SignIn";
import SignUp from "./pages/Authentication/SignUp";
import NotFound from "./pages/NotFound";

import Footer from "./layouts/Footer";
import Navbar from "./layouts/Navbar";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Policy from "./pages/Policy";
import Accordion from "./pages/Accordion";
import PrivateRouter from "./utils/PrivateRouter";

// Profile
import Profile from "./pages/Profile/Profile";
import ProfileView from "./pages/Profile/ProfileView";
import ProfileExperience from "./pages/Profile/Experience/ProfileExperience";
import ProfileAbout from "./pages/Profile/ProfileAbout";
import EmptySelect from "./pages/Profile/EmptySelect";
import ProfileSocial from "./pages/Profile/ProfileSocial";
import ProfileEducation from "./pages/Profile/Education/ProfileEducation";
import ProfileIdentity from "./pages/Profile/ProfileIdentity";
import ProfileResume from "./pages/Profile/ProfileResume";
import ProfileDesires from "./pages/Profile/ProfileDesires";
import JobForm from "./pages/Recruiter/Job/JobForm";
import JobHome from "./pages/Recruiter/Job/JobHome";
import Company from "./pages/Recruiter/Company/Company";
import TopBar from "./pages/Recruiter/Company/TopBar";
import CompanyOverview from "./pages/Recruiter/Company/CompanyOverview";
import CompanyCulture from "./pages/Recruiter/Company/CompanyCulture";
import CompanyJobs from "./pages/Recruiter/Company/CompanyJobs";
import CompanyGallery from "./pages/Recruiter/Company/CompanyGallery";
import Applications from "./pages/Application/Applications";
import CompanyForm from "./pages/Recruiter/Company/CompanyForm";
import JobSidebar from "./pages/Recruiter/Job/JobSidebar";
import JobApplicants from "./pages/Recruiter/Job/JobApplicants";
import JobMeeting from "./pages/Recruiter/Job/JobMeeting";
import JobRecording from "./pages/Recruiter/Job/JobRecording";
import JobTrello from "./pages/Recruiter/Job/JobTrello";
import JobPreview from "./pages/Recruiter/Job/JobPreview";
import Jobs from "./pages/Recruiter/Job/Jobs";
// import JobChat from "./pages/Recruiter/Job/JobChat";
// import RecruiterChatList from "./pages/Recruiter/Chat/RecruiterChatList";
// import RecruiterCandidateChat from "./pages/Recruiter/Chat/RecruiterCandidateChat";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {/* Home page */}
        <Route exact path="/" element={<Home />} />
        <Route
          exact
          path="/recruiter/overview"
          element={<Home recruiter={true} />}
        />

        {/* ##############    USER    ################ */}

        {/* #########  USER PROFILE  ######### */}
        <Route exact element={<PrivateRouter />}>
          <Route path="applications" element={<Applications />} />
          {/* <Route exact path="/chats" component={CandidateChatList} /> */}
          {/* <Route exact path="/chats/:id" component={CandidateChat} /> */}
          <Route path="profile" element={<Profile />}>
            <Route path="about" element={<ProfileAbout />} />
            <Route path="social_profile" element={<ProfileSocial />} />
            <Route path="experience" element={<ProfileExperience />} />
            <Route path="education" element={<ProfileEducation />} />
            <Route path="identity" element={<ProfileIdentity />} />
            <Route path="resume" element={<ProfileResume />} />
            <Route path="prefered_job" element={<ProfileDesires />} />
            <Route path="view" element={<ProfileView />} />
            <Route path="" element={<EmptySelect />} />
          </Route>
        </Route>



        {/* ################    RECRUITER    ################## */}

        {/* #######  RECRUITER PROFILE  ####### */}
        <Route exact element={<PrivateRouter />}>
          <Route path="recruiter/profile" element={<Profile />}>
            <Route path="about" element={<ProfileAbout />} />
            <Route path="social_profile" element={<ProfileSocial />} />
            <Route path="experience" element={<ProfileExperience />} />
            <Route path="education" element={<ProfileEducation />} />
            <Route path="resume" element={<ProfileResume />} />
            <Route path="identity" element={<ProfileIdentity />} />
            <Route path="prefered_job" element={<ProfileDesires />} />
            <Route path="view" element={<ProfileView />} />
            <Route path="" element={<EmptySelect />} />
          </Route>
        </Route>

        {/* #######  RECRUITER COMPANY  ####### */}
        <Route exact element={<PrivateRouter />}>
          <Route path="recruiter/company" element={<Company />}>
            <Route path="create" element={<CompanyForm />} />
            <Route path=":id" element={<TopBar />}>
              <Route path="" element={<EmptySelect />} />
              <Route path="overview" element={<CompanyOverview />} />
              {/* <Route path="people" element={<ProfileSocial />} /> */}
              <Route path="culture_benefits" element={<CompanyCulture />} />
              <Route path="jobs" element={<CompanyJobs />} />
              <Route path="gallery" element={<CompanyGallery />} />
            </Route>
          </Route>
        </Route>

        {/* #######  RECRUITER AUTHENTICATION  ####### */}
        <Route exact element={<PrivateRouter />}>
          <Route path="recruiter/jobs" element={<Jobs />}>
            <Route index element={<JobHome />} />
            <Route path="create-job" element={<JobForm />} />
            <Route path=":id" element={<Jobs />}>
              <Route index element={<JobSidebar />} />
              <Route path="details" element={<JobPreview />} />
              <Route path="applicants" element={<JobApplicants />} />
              {/* <Route path="chat" element={<RecruiterChatList />}> */}
                {/* <Route index element={<EmptySelect />} /> */}
                {/* <Route path=":chatID" element={<RecruiterCandidateChat />} /> */}
              {/* </Route> */}
              {/* <Route path="chat" element={<JobChat />} />      */}
              <Route path="meeting" element={<JobMeeting />} />
              <Route path="recording" element={<JobRecording />} />
              <Route path="trello" element={<JobTrello />} />
            </Route>
          </Route>
        </Route>

        {/* #######  AUTHENTICATION  ####### */}
        <Route exact path="/sign-in" element={<SignIn />} />
        <Route exact path="/sign-up" element={<SignUp />} />
        <Route exact path="/recruiter/sign-in" element={<SignIn />} />
        <Route exact path="/recruiter/sign-up" element={<SignUp />} />

        {/* #######   STATIC PAGES  ######## */}
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contacts />} />
        <Route exact path="/privacy-policy" element={<Policy />} />
        <Route exact path="/Accordion" element={<Accordion />} />
        <Route path="/download-mobile" element={<MobileApp />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
