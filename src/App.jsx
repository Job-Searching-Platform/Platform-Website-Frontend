import { Route, BrowserRouter, Routes } from "react-router-dom";

import Home from "./pages/Home";
import MobileApp from "./layouts/MobileApp";
import SignIn from "./pages/Authentication/SignIn";
import SignUp from "./pages/Authentication/SignUp";
import NotFound from "./pages/NotFound";

import Footer from "./layouts/Footer";
import Navbar from "./layouts/Navbar";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Policy from "./pages/Policy";
import Accordion from "./pages/Accordion";
import Profile from "./pages/Recruiter/Profile";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {/* Home page */}
        <Route exact path="/" element={<Home />} />
        <Route exact path="/sign-in" element={<SignIn />} />
        <Route exact path="/sign-up" element={<SignUp />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contacts />} />
        <Route exact path="/privacy-policy" element={<Policy />} />
        <Route exact path="/Accordion" element={<Accordion />} />
        <Route exact path="/profile" element={<Profile />} />

        <Route path="/download-mobile" element={<MobileApp />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
