import React from "react";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import axios from "axios";

const Facebook = ({ informParent = (f) => f }) => {
  const responseFacebook = (response) => {
    axios({
      method: "POST",
      url: `${process.env.REACT_APP_API}/facebook-login`,
      data: { userID: response.userID, accessToken: response.accessToken },
    })
      .then((response) => {
        // console.log("FACEBOOK SIGNIN SUCCESS", response);
        // inform parent component
        informParent(response);
      })
      .catch((error) => {
        // console.log("FACEBOOK SIGNIN ERROR", error.response);
      });
  };
  return (
    <div className="">
      <FacebookLogin
        appId={`${process.env.REACT_APP_FACEBOOK_APP_ID}`}
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
