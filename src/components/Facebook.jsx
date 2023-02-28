import React from "react";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import Cookies from "js-cookie";
// import { gapi } from "gapi-script";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import Request from "../utils/API-routers";

const Facebook = () => {
  const [, setError] = useState("");
  const [, setLoad] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const name = location.pathname.split("/")[1].toLocaleLowerCase();
  const path = name === "recruiter" ? "recruiters" : "candidates";
  const cook =
    name === "recruiter" ? "logged_in_recruiter" : "logged_in_candidate";

  const responseFacebook = (response) => {
    Request.facebookLogin(path, {
      userID: response.userID,
      accessToken: response.accessToken,
    })
      .then((res) => {
        console.log(res);
        Cookies.set(cook, "yes", {
          secure: true,
          expires: new Date(res.data.user.password),
        });

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
    <div className="">
      <FacebookLogin
        appId={`${process.env.REACT_APP_FACEBOOK_CLIENT_ID}`}
        autoLoad={false}
        callback={responseFacebook}
        render={(renderProps) => (
          <button
            onClick={renderProps.onClick}
            className="mb-4 flex w-full items-center justify-center rounded border py-4 hover:bg-gray-50"
          >
            <img
              className="mr-4"
              src="https://shuffle.dev/atis-assets/social/facebook-logo.png"
              alt=""
            />
            <span
              className="text-xs font-bold text-gray-500 transition duration-200"
              data-config-id="fb-action"
            >
              Sign In with Facebook
            </span>
          </button>
        )}
      />
    </div>
  );
};

export default Facebook;
