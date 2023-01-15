import React from "react";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import axios from "axios";

const Facebook = ({ informParent = (f) => f }) => {
  const responseFacebook = (response) => {
    console.log(response);
    axios({
      method: "POST",
      url: `${process.env.REACT_APP_API}/facebook-login`,
      data: { userID: response.userID, accessToken: response.accessToken },
    })
      .then((response) => {
        console.log("FACEBOOK SIGNIN SUCCESS", response);
        // inform parent component
        informParent(response);
      })
      .catch((error) => {
        console.log("FACEBOOK SIGNIN ERROR", error.response);
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
            className="mb-4 py-4 w-full flex justify-center items-center border rounded hover:bg-gray-50"
          >
            <img
              class="mr-4"
              src="https://shuffle.dev/atis-assets/social/facebook-logo.png"
              alt=""
            />
            <span
              class="text-xs text-gray-500 font-bold transition duration-200"
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
