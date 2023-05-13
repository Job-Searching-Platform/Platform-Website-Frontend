import { Route, BrowserRouter, Routes } from "react-router-dom";
import Cookies from "js-cookie";

import CandidateHome from "./pages/Home/CandidateHome";
import RecruiterHome from "./pages/Home/RecruiterHome";
import MobileApp from "./pages/MobileApp";
import SignIn from "./pages/Authentication/SignIn";
import SignUp from "./pages/Authentication/SignUp";
import NotFound from "./pages/NotFound";

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
import JobList from "./pages/Recruiter/Job/JobList";
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
import SearchPage from "./pages/Search/SearchPage";
import { CandidateDetails, JobDetails } from "./layouts/Fullviewer";

// import JobChat from "./pages/Recruiter/Job/JobChat";
// import RecruiterChatList from "./pages/Recruiter/Chat/RecruiterChatList";
// import RecruiterCandidateChat from "./pages/Recruiter/Chat/RecruiterCandidateChat";

const App = () => {
  const candidateIsAuthorized = Cookies.get("logged_in_candidate");
  const recruiterIsAuthorized = Cookies.get("logged_in_recruiter");
  return (
    <BrowserRouter>
      <Routes>
        {/* ##########################################    
                        CANDIDATE Unauthorized    
        ############################################## */}
        {!candidateIsAuthorized && (
          <Route>
            <Route
              exact
              path="/"
              element={<CandidateHome isAuthorized={false} />}
            />
            <Route path="/job/search" element={<SearchPage />}>
              <Route path="view/:detailID" element={<JobDetails />} />
            </Route>
            <Route path="company/search" element={<SearchPage />}>
              <Route path="view/:detailID" element={<TopBar />}>
                <Route path="" element={<EmptySelect />} />
                <Route path="overview" element={<CompanyOverview />} />
                {/* <Route path="people" element={<ProfileSocial />} /> */}
                <Route path="culture_benefits" element={<CompanyCulture />} />
                <Route path="jobs" element={<CompanyJobs />} />
                <Route path="gallery" element={<CompanyGallery />} />
              </Route>
            </Route>
          </Route>
        )}

        {/* ##########################################    
                      CANDIDATE Authorized    
        ############################################### */}
        {candidateIsAuthorized && (
          <Route exact path="/" element={<CandidateHome isAuthorized={true} />}>
            <Route exact element={<PrivateRouter />}>
              {/* #########   Chat  ############# */}
              <Route path="applications" element={<Applications />} />
              {/* <Route exact path="/chats" component={CandidateChatList} /> */}
              {/* <Route exact path="/chats/:id" component={CandidateChat} /> */}

              {/* #########  Candidate Profile  ############# */}
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

              {/* #########   Jobs  Search  ############# */}
              <Route path="/job/search" element={<SearchPage />}>
                <Route path="view/:detailID" element={<JobDetails />} />
              </Route>
              {/* #########   Company Search  ############# */}
              <Route path="company/search" element={<SearchPage />}>
                <Route path="view/:detailID" element={<TopBar />}>
                  <Route path="" element={<EmptySelect />} />
                  <Route path="overview" element={<CompanyOverview />} />
                  {/* <Route path="people" element={<ProfileSocial />} /> */}
                  <Route path="culture_benefits" element={<CompanyCulture />} />
                  <Route path="jobs" element={<CompanyJobs />} />
                  <Route path="gallery" element={<CompanyGallery />} />
                </Route>
              </Route>
            </Route>
          </Route>
        )}

        {/* ##########################################   
                    RECRUITER  Unauthorized  
         ############################################## */}
        {!recruiterIsAuthorized && (
          <Route>
            <Route
              exact
              path="/recruiter"
              element={<RecruiterHome isAuthorized={false} />}
            />

            <Route path="/candidate/search" element={<SearchPage />}>
              <Route path="view/:detailID" element={<CandidateDetails />} />
            </Route>
          </Route>
        )}

        {/* #########################################  
                    RECRUITER  Authorized   
         ############################################ */}
        {recruiterIsAuthorized && (
          <Route
            exact
            path="/recruiter"
            element={<RecruiterHome isAuthorized={true} />}
          >
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
              {/* #######  RECRUITER COMPANY  ####### */}
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

              {/* #######  RECRUITER JOB  ####### */}
              <Route path="recruiter/jobs" element={<Jobs />}>
                <Route index element={<JobList />} />
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

              {/* #######  RECRUITER Candidate Search  ####### */}
              <Route path="candidate/search" element={<SearchPage />}>
                <Route path="view/:detailID" element={<CandidateDetails />} />
              </Route>
            </Route>
          </Route>
        )}

        {/* #########################################  
                      AUTHENTICATION  
        ############################################# */}
        <Route exact path="/sign-in" element={<SignIn />} />
        <Route exact path="/sign-up" element={<SignUp />} />
        <Route exact path="/recruiter/sign-in" element={<SignIn />} />
        <Route exact path="/recruiter/sign-up" element={<SignUp />} />

        {/* ######################################   
                        STATIC PAGES  
        ########################################## */}
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contacts />} />
        <Route exact path="/privacy-policy" element={<Policy />} />
        <Route exact path="/Accordion" element={<Accordion />} />
        <Route path="/download-mobile" element={<MobileApp />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
