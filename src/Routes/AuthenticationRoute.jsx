import { Routes, Route, BrowserRouter } from "react-router-dom";

import SignIn from "./pages/Authentication/SignIn";
import SignUp from "./pages/Authentication/SignUp";

const AuthenticationRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* #######  AUTHENTICATION  ####### */}
        <Route exact path="/sign-in" element={<SignIn />} />
        <Route exact path="/sign-up" element={<SignUp />} />
        <Route exact path="/recruiter/sign-in" element={<SignIn />} />
        <Route exact path="/recruiter/sign-up" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AuthenticationRoute;
