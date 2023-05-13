import { Outlet } from "react-router-dom";
import { HomeSidebar } from "../../layouts/SideBar";
import Navbar from "../../layouts/Navbar";
import RecruiterLandingPage from "./RecruiterLandingPage";
import Footer from "../../layouts/Footer";

const RecruiterHome = ({ isAuthorized }) => {
  if (isAuthorized) {
    return (
      <div>
        <Navbar isAuthorized={isAuthorized} />
        <HomeSidebar isAuthorized={isAuthorized} />
        <div className="ml-44">
          <Outlet />
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <Navbar isAuthorized={isAuthorized} />
        <RecruiterLandingPage />
        <Footer />
      </div>
    );
  }
};

export default RecruiterHome;
