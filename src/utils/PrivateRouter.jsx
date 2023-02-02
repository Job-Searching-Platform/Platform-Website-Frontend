import { Outlet, Navigate } from "react-router-dom";
import { useLocation } from "react-router";
import Cookies from "js-cookie";

const PrivateRouter = () => {
  const location = useLocation();
  const logged_in_user = Cookies.get("logged_in_user");
  return (
    <>
      {logged_in_user ? (
        <Outlet />
      ) : (
        <Navigate to="/sign-in" replace state={{ from: location }} />
      )}
      ;
    </>
  );
};

export default PrivateRouter;
