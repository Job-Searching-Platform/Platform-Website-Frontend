import { Route, BrowserRouter, Routes  } from "react-router-dom";

import Home from "./pages/Home"
import MobileApp from "./layouts/MobileApp";
import SignIn from "./pages/Authentication/SignIn";


import NotFound from "./pages/NotFound";



import Footer from "./layouts/Footer";
import Navbar from "./layouts/Navbar";

const App = () => {
  return (
    <BrowserRouter >
    <Navbar />
      <Routes>
        {/* Home page */}
        <Route exact path="/" element={<Home />} />
        <Route exact path="/sign-in" element={<SignIn />} />


        <Route path="/download-mobile" element={<MobileApp />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />  
    </BrowserRouter >
  );
}

export default App;
