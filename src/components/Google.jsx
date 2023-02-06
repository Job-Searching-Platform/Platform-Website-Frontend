import GoogleLogin from "react-google-login";
import axios from "axios";

const Google = ({ informParent = (f) => f }) => {
  const responseGoogle = (response) => {
    // console.log(response.tokenId);
    axios({
      method: "POST",
      url: `${process.env.REACT_APP_API}/google-login`,
      data: { idToken: response.tokenId },
    })
      .then((response) => {
        // console.log("GOOGLE SIGNIN SUCCESS", response);
        // inform parent component
        informParent(response);
      })
      .catch((error) => {
        // console.log("GOOGLE SIGNIN ERROR", error.response);
      });
  };
  return (
    <div className="">
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
