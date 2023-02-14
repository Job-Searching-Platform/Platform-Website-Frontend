import { useLocation, Outlet } from "react-router-dom";
import { useEffect } from "react";

const Jobs = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div>
      {/* <Navbar transparentBg={true} Home={false} /> */}
      <Outlet />
    </div>
  );
};

export default Jobs;
