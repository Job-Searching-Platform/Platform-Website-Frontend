import { Outlet, Navigate } from "react-router-dom";
import { useLocation } from "react-router";
import Cookies from "js-cookie";

const PrivateRouter = () => {
  const location = useLocation();
  const name = location.pathname.split("/")[1].toLocaleLowerCase();
  const path = name === "recruiter" ? "/recruiter/sign-in" : "/sign-in";
  const logged_in =
    name === "recruiter"
      ? Cookies.get("logged_in_recruiter")
      : Cookies.get("logged_in_candidate");
  return (
    <>
      {logged_in ? (
        <Outlet />
      ) : (
        <Navigate to={path} replace state={{ from: location }} />
      )}
    </>
  );
};

export default PrivateRouter;
