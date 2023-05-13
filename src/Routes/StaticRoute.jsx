import { Routes, Route, BrowserRouter } from "react-router-dom";

import MobileApp from "../pages/MobileApp";
import About from "../pages/About";
import Contacts from "../pages/Contacts";
import Policy from "../pages/Policy";
import Accordion from "../pages/Accordion";

const StaticRoute = () => {
  return (
    <Routes>
      {/* #######   STATIC PAGES  ######## */}
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contacts />} />
      <Route path="/privacy-policy" element={<Policy />} />
      <Route path="/Accordion" element={<Accordion />} />
      <Route path="/download-mobile" element={<MobileApp />} />
    </Routes>
  );
};

export default StaticRoute;
