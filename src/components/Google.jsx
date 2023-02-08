import GoogleLogin from "react-google-login";
import Cookies from "js-cookie";
import { gapi } from "gapi-script";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Request from "../utils/API-routers";
import { login } from "../store/features/editUserProfileSlice";
import { loginRecruiter } from "../store/features/editRecruiterProfileSlice";

const Google = () => {
  const [, setError] = useState("");
  const [, setLoad] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const name = location.pathname.split("/")[1].toLocaleLowerCase();
  const path = name === "recruiter" ? "recruiters" : "users";
  const cook = name === "recruiter" ? "logged_in_recruiter" : "logged_in_user";
  useEffect(() => {
    const start = () => {
      gapi.client.init({
        clientId: process.env.REACT_APP_GOOGLE_CLIENT_ID,
        scope: "email",
      });
    };

    gapi.load("client:auth2", start);
  }, []);

  const responseGoogle = (response) => {
    console.log(response);
    Request.googleLogin(path, { idToken: response.tokenId })
      .then((res) => {
        console.log(res);
        Cookies.set(cook, "yes", {
          secure: true,
          expires: new Date(res.data.user.password),
        });

        dispatch(
          name === "recruiter"
            ? loginRecruiter({
                _id: res.data.user._id,
                token: res.data.token,
                fullName: res.data.user.fullName,
                email: res.data.user.email,
                skills: res.data.user.skills,
                opentoRoles: res.data.user.opentoRoles,
                country: res.data.user.address.country,
                city: res.data.user.address.city,
                phoneNumber: res.data.user.address.phoneNumber,
                website: res.data.user.socialLinks.website,
                linkedin: res.data.user.socialLinks.linkedin,
                github: res.data.user.socialLinks.github,
                achievement: res.data.user.achievement,
                bio: res.data.user.bio,
                photo: res.data.user.photo,
                primaryRole: res.data.user.primaryRole,
                resume: res.data.user.resume,
                yearofExperience: res.data.user.yearofExperience,
              })
            : login({
                _id: res.data.user._id,
                token: res.data.token,
                fullName: res.data.user.fullName,
                email: res.data.user.email,
                skills: res.data.user.skills,
                opentoRoles: res.data.user.opentoRoles,
                country: res.data.user.address.country,
                city: res.data.user.address.city,
                phoneNumber: res.data.user.address.phoneNumber,
                website: res.data.user.socialLinks.website,
                linkedin: res.data.user.socialLinks.linkedin,
                github: res.data.user.socialLinks.github,
                achievement: res.data.user.achievement,
                bio: res.data.user.bio,
                photo: res.data.user.photo,
                primaryRole: res.data.user.primaryRole,
                resume: res.data.user.resume,
                yearofExperience: res.data.user.yearofExperience,
              })
        );

        res.data.status === "success" &&
          (location.state?.from
            ? navigate(location.state.from)
            : name === "recruiter"
            ? navigate("/recruiter/overview")
            : navigate("/"));
        setLoad(false);
      })
      .catch((error) => {
        setError(error.response?.message);
        console.log(error);
        setLoad(false);
      });
  };
  return (
    <div className="pb-3">
      <GoogleLogin
        clientId={`${process.env.REACT_APP_GOOGLE_CLIENT_ID}`}
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        render={(renderProps) => (
          <button
            onClick={renderProps.onClick}
            disabled={renderProps.disabled}
            className="flex w-full items-center justify-center rounded border py-4 hover:bg-gray-50"
          >
            <img
              className="mr-4"
              src="https://shuffle.dev/atis-assets/social/google-logo.png"
              alt=""
            />
            <span
              className="text-xs font-bold text-gray-500 transition duration-200"
              data-config-id="google-action"
            >
              Sign In with Google
            </span>
          </button>
        )}
        cookiePolicy={"single_host_origin"}
      />
    </div>
  );
};

export default Google;
