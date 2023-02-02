import Google from "../../components/Google";
import Facebook from "../../components/Facebook";

import Request from "../../utils/API-routers";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { signup } from "../../store/features/userAuthSlice";
import Cookies from "js-cookie";
import { useState } from "react";
import ErrorBar from "../../components/ErrorBar";

const SignIn = () => {
  const [, setLoad] = useState(false);
  const [getError, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const [getSignin, setSignin] = useState({ email: "", password: "" });

  const handleInput = (event) => {
    setSignin((values) => ({
      ...values,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoad(true);
    Request.login("users", getSignin)
      .then((res) => {
        Cookies.set("logged_in_user", "yes", {
          secure: true,
          expires: new Date(res.data.expires),
        });
        dispatch(
          signup({
            email: res.data.user.email,
            firstName: res.data.user.firstName,
            lastName: res.data.user.lastName,
            _id: res.data.user._id,
          })
        );
        res.data.status === "success" &&
          (location.state?.from
            ? navigate(location.state.from)
            : navigate("/"));
        setLoad(false);
      })
      .catch((error) => {
        setError(error.response.data?.message);
        console.log(error.response);
        setLoad(false);
      });
  };
  return (
    <section className="relative bg-white py-0 lg:py-20">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between px-10 lg:flex-row xl:px-5">
        <div className="flex w-full flex-col items-center px-10 pt-5 pb-20 ">
          {/* <div className="relative w-full max-w-md bg-cover lg:max-w-2xl lg:w-7/12">
                    <div className="relative flex flex-col items-center justify-center w-full h-full lg:pr-10">
                        <img src="https://cdn.devdojo.com/images/december2020/taxi-programming.png" alt=''/>
                    </div>
                </div> */}
          {<ErrorBar setError={setError}>{getError}</ErrorBar>}
          <div className="relative z-10 mt-20 w-full max-w-2xl lg:mt-0 lg:w-5/12">
            <div className="relative z-10 flex flex-col items-start justify-start rounded-xl bg-white p-10 shadow-2xl">
              <h4 className="font-serif flex w-full items-center justify-center text-xl font-medium leading-snug">
                Sign In
              </h4>
              <div className="relative mt-6 w-full space-y-8">
                <Google informParent={"informParent=sdfssdfg"} />
                <Facebook informParent={"informParent=sdfsdf"} />
                {/* <div className="px-3 text-center">
                  <a
                    className=" mb-4 p-4 flex justify-center items-center border rounded hover:bg-gray-50"
                    href="/"
                  >
                    <img
                      className="mr-4"
                      src="https://shuffle.dev/atis-assets/social/facebook-logo.png"
                      alt=""
                    />
                    <span
                      className="text-xs text-gray-500 font-bold transition duration-200"
                      data-config-id="fb-action"
                    >
                      Sign In with Facebook
                    </span>
                  </a>
                  <a
                    className="p-4 flex justify-center items-center border rounded hover:bg-gray-50"
                    href="/"
                  >
                    <img
                      className="mr-4"
                      src="https://shuffle.dev/atis-assets/social/google-logo.png"
                      alt=""
                    />
                    <span
                      className="text-xs text-gray-500 font-bold transition duration-200"
                      data-config-id="google-action"
                    >
                      Sign In with Google
                    </span>
                  </a>
                </div> */}
                {/* <div className="border-1 border-white flex items-center justify-center">
                  <h4>or</h4>
                </div> */}
                <div className="my-4 flex items-center space-x-3">
                  <div className="dark:bg-navy-500 h-px flex-1 bg-slate-200"></div>
                  <p>OR</p>
                  <div className="dark:bg-navy-500 h-px flex-1 bg-slate-200"></div>
                </div>
                <form onSubmit={handleSubmit}>
                  <div className="relative">
                    <label className="absolute ml-2 -mt-3 bg-white px-2 font-medium text-gray-600">
                      Email Address
                    </label>
                    <input
                      onChange={handleInput}
                      value={getSignin.email}
                      name="email"
                      type="text"
                      className="mt-2 block w-full rounded-md border border-gray-300 bg-white px-4 py-4 text-base placeholder-gray-400 focus:border-black focus:outline-none"
                      placeholder="janedoe@email.com"
                    />
                  </div>
                  <div className="relative">
                    <label className="absolute ml-2 -mt-3 bg-white px-2 font-medium text-gray-600">
                      Password
                    </label>
                    <input
                      onChange={handleInput}
                      value={getSignin.password}
                      required
                      name="password"
                      type="password"
                      className="mt-2 block w-full rounded-md border border-gray-300 bg-white px-4 py-4 text-base placeholder-gray-400 focus:border-black focus:outline-none"
                      placeholder="Password"
                    />
                  </div>
                  <label className="mb-10 inline-flex text-left">
                    <input
                      className="mr-2"
                      type="checkbox"
                      name="terms"
                      value="1"
                    />
                    <span
                      className="-mt-1 inline-block text-sm text-gray-500"
                      data-config-id="terms"
                    >
                      By signing up, you agree to our{" "}
                      <a className="text-red-400 hover:underline" href="/">
                        Terms, Data Policy
                      </a>{" "}
                      and{" "}
                      <a className="text-red-400 hover:underline" href="/">
                        Cookies Policy
                      </a>
                      .
                    </span>
                  </label>
                  <div className="relative">
                    <button
                      type="submit"
                      className="ease inline-block w-full rounded-lg bg-yellow-300 px-5 py-4 text-center text-xl font-medium text-white transition duration-200 hover:bg-yellow-400"
                    >
                      Submit
                    </button>
                  </div>
                </form>

                <div className="flex items-center justify-center">
                  <a
                    className="text-sm text-green-600 hover:underline"
                    href="/"
                    data-config-id="03_secondary-action"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
            </div>
            <svg
              className="absolute top-0 left-0 z-0 -mt-12 -ml-12 h-32 w-32 fill-current text-gray-200"
              viewBox="0 0 91 91"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g stroke="none" strokeWidth="1" fillRule="evenodd">
                <g fillRule="nonzero">
                  <g>
                    <g>
                      <circle cx="3.261" cy="3.445" r="2.72"></circle>
                      <circle cx="15.296" cy="3.445" r="2.719"></circle>
                      <circle cx="27.333" cy="3.445" r="2.72"></circle>
                      <circle cx="39.369" cy="3.445" r="2.72"></circle>
                      <circle cx="51.405" cy="3.445" r="2.72"></circle>
                      <circle cx="63.441" cy="3.445" r="2.72"></circle>
                      <circle cx="75.479" cy="3.445" r="2.72"></circle>
                      <circle cx="87.514" cy="3.445" r="2.719"></circle>
                    </g>
                    <g transform="translate(0 12)">
                      <circle cx="3.261" cy="3.525" r="2.72"></circle>
                      <circle cx="15.296" cy="3.525" r="2.719"></circle>
                      <circle cx="27.333" cy="3.525" r="2.72"></circle>
                      <circle cx="39.369" cy="3.525" r="2.72"></circle>
                      <circle cx="51.405" cy="3.525" r="2.72"></circle>
                      <circle cx="63.441" cy="3.525" r="2.72"></circle>
                      <circle cx="75.479" cy="3.525" r="2.72"></circle>
                      <circle cx="87.514" cy="3.525" r="2.719"></circle>
                    </g>
                    <g transform="translate(0 24)">
                      <circle cx="3.261" cy="3.605" r="2.72"></circle>
                      <circle cx="15.296" cy="3.605" r="2.719"></circle>
                      <circle cx="27.333" cy="3.605" r="2.72"></circle>
                      <circle cx="39.369" cy="3.605" r="2.72"></circle>
                      <circle cx="51.405" cy="3.605" r="2.72"></circle>
                      <circle cx="63.441" cy="3.605" r="2.72"></circle>
                      <circle cx="75.479" cy="3.605" r="2.72"></circle>
                      <circle cx="87.514" cy="3.605" r="2.719"></circle>
                    </g>
                    <g transform="translate(0 36)">
                      <circle cx="3.261" cy="3.686" r="2.72"></circle>
                      <circle cx="15.296" cy="3.686" r="2.719"></circle>
                      <circle cx="27.333" cy="3.686" r="2.72"></circle>
                      <circle cx="39.369" cy="3.686" r="2.72"></circle>
                      <circle cx="51.405" cy="3.686" r="2.72"></circle>
                      <circle cx="63.441" cy="3.686" r="2.72"></circle>
                      <circle cx="75.479" cy="3.686" r="2.72"></circle>
                      <circle cx="87.514" cy="3.686" r="2.719"></circle>
                    </g>
                    <g transform="translate(0 49)">
                      <circle cx="3.261" cy="2.767" r="2.72"></circle>
                      <circle cx="15.296" cy="2.767" r="2.719"></circle>
                      <circle cx="27.333" cy="2.767" r="2.72"></circle>
                      <circle cx="39.369" cy="2.767" r="2.72"></circle>
                      <circle cx="51.405" cy="2.767" r="2.72"></circle>
                      <circle cx="63.441" cy="2.767" r="2.72"></circle>
                      <circle cx="75.479" cy="2.767" r="2.72"></circle>
                      <circle cx="87.514" cy="2.767" r="2.719"></circle>
                    </g>
                    <g transform="translate(0 61)">
                      <circle cx="3.261" cy="2.846" r="2.72"></circle>
                      <circle cx="15.296" cy="2.846" r="2.719"></circle>
                      <circle cx="27.333" cy="2.846" r="2.72"></circle>
                      <circle cx="39.369" cy="2.846" r="2.72"></circle>
                      <circle cx="51.405" cy="2.846" r="2.72"></circle>
                      <circle cx="63.441" cy="2.846" r="2.72"></circle>
                      <circle cx="75.479" cy="2.846" r="2.72"></circle>
                      <circle cx="87.514" cy="2.846" r="2.719"></circle>
                    </g>
                    <g transform="translate(0 73)">
                      <circle cx="3.261" cy="2.926" r="2.72"></circle>
                      <circle cx="15.296" cy="2.926" r="2.719"></circle>
                      <circle cx="27.333" cy="2.926" r="2.72"></circle>
                      <circle cx="39.369" cy="2.926" r="2.72"></circle>
                      <circle cx="51.405" cy="2.926" r="2.72"></circle>
                      <circle cx="63.441" cy="2.926" r="2.72"></circle>
                      <circle cx="75.479" cy="2.926" r="2.72"></circle>
                      <circle cx="87.514" cy="2.926" r="2.719"></circle>
                    </g>
                    <g transform="translate(0 85)">
                      <circle cx="3.261" cy="3.006" r="2.72"></circle>
                      <circle cx="15.296" cy="3.006" r="2.719"></circle>
                      <circle cx="27.333" cy="3.006" r="2.72"></circle>
                      <circle cx="39.369" cy="3.006" r="2.72"></circle>
                      <circle cx="51.405" cy="3.006" r="2.72"></circle>
                      <circle cx="63.441" cy="3.006" r="2.72"></circle>
                      <circle cx="75.479" cy="3.006" r="2.72"></circle>
                      <circle cx="87.514" cy="3.006" r="2.719"></circle>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
            <svg
              className="absolute bottom-0 right-0 z-0 -mb-12 -mr-12 h-32 w-32 fill-current text-yellow-400"
              viewBox="0 0 91 91"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g stroke="none" strokeWidth="1" fillRule="evenodd">
                <g fillRule="nonzero">
                  <g>
                    <g>
                      <circle cx="3.261" cy="3.445" r="2.72"></circle>
                      <circle cx="15.296" cy="3.445" r="2.719"></circle>
                      <circle cx="27.333" cy="3.445" r="2.72"></circle>
                      <circle cx="39.369" cy="3.445" r="2.72"></circle>
                      <circle cx="51.405" cy="3.445" r="2.72"></circle>
                      <circle cx="63.441" cy="3.445" r="2.72"></circle>
                      <circle cx="75.479" cy="3.445" r="2.72"></circle>
                      <circle cx="87.514" cy="3.445" r="2.719"></circle>
                    </g>
                    <g transform="translate(0 12)">
                      <circle cx="3.261" cy="3.525" r="2.72"></circle>
                      <circle cx="15.296" cy="3.525" r="2.719"></circle>
                      <circle cx="27.333" cy="3.525" r="2.72"></circle>
                      <circle cx="39.369" cy="3.525" r="2.72"></circle>
                      <circle cx="51.405" cy="3.525" r="2.72"></circle>
                      <circle cx="63.441" cy="3.525" r="2.72"></circle>
                      <circle cx="75.479" cy="3.525" r="2.72"></circle>
                      <circle cx="87.514" cy="3.525" r="2.719"></circle>
                    </g>
                    <g transform="translate(0 24)">
                      <circle cx="3.261" cy="3.605" r="2.72"></circle>
                      <circle cx="15.296" cy="3.605" r="2.719"></circle>
                      <circle cx="27.333" cy="3.605" r="2.72"></circle>
                      <circle cx="39.369" cy="3.605" r="2.72"></circle>
                      <circle cx="51.405" cy="3.605" r="2.72"></circle>
                      <circle cx="63.441" cy="3.605" r="2.72"></circle>
                      <circle cx="75.479" cy="3.605" r="2.72"></circle>
                      <circle cx="87.514" cy="3.605" r="2.719"></circle>
                    </g>
                    <g transform="translate(0 36)">
                      <circle cx="3.261" cy="3.686" r="2.72"></circle>
                      <circle cx="15.296" cy="3.686" r="2.719"></circle>
                      <circle cx="27.333" cy="3.686" r="2.72"></circle>
                      <circle cx="39.369" cy="3.686" r="2.72"></circle>
                      <circle cx="51.405" cy="3.686" r="2.72"></circle>
                      <circle cx="63.441" cy="3.686" r="2.72"></circle>
                      <circle cx="75.479" cy="3.686" r="2.72"></circle>
                      <circle cx="87.514" cy="3.686" r="2.719"></circle>
                    </g>
                    <g transform="translate(0 49)">
                      <circle cx="3.261" cy="2.767" r="2.72"></circle>
                      <circle cx="15.296" cy="2.767" r="2.719"></circle>
                      <circle cx="27.333" cy="2.767" r="2.72"></circle>
                      <circle cx="39.369" cy="2.767" r="2.72"></circle>
                      <circle cx="51.405" cy="2.767" r="2.72"></circle>
                      <circle cx="63.441" cy="2.767" r="2.72"></circle>
                      <circle cx="75.479" cy="2.767" r="2.72"></circle>
                      <circle cx="87.514" cy="2.767" r="2.719"></circle>
                    </g>
                    <g transform="translate(0 61)">
                      <circle cx="3.261" cy="2.846" r="2.72"></circle>
                      <circle cx="15.296" cy="2.846" r="2.719"></circle>
                      <circle cx="27.333" cy="2.846" r="2.72"></circle>
                      <circle cx="39.369" cy="2.846" r="2.72"></circle>
                      <circle cx="51.405" cy="2.846" r="2.72"></circle>
                      <circle cx="63.441" cy="2.846" r="2.72"></circle>
                      <circle cx="75.479" cy="2.846" r="2.72"></circle>
                      <circle cx="87.514" cy="2.846" r="2.719"></circle>
                    </g>
                    <g transform="translate(0 73)">
                      <circle cx="3.261" cy="2.926" r="2.72"></circle>
                      <circle cx="15.296" cy="2.926" r="2.719"></circle>
                      <circle cx="27.333" cy="2.926" r="2.72"></circle>
                      <circle cx="39.369" cy="2.926" r="2.72"></circle>
                      <circle cx="51.405" cy="2.926" r="2.72"></circle>
                      <circle cx="63.441" cy="2.926" r="2.72"></circle>
                      <circle cx="75.479" cy="2.926" r="2.72"></circle>
                      <circle cx="87.514" cy="2.926" r="2.719"></circle>
                    </g>
                    <g transform="translate(0 85)">
                      <circle cx="3.261" cy="3.006" r="2.72"></circle>
                      <circle cx="15.296" cy="3.006" r="2.719"></circle>
                      <circle cx="27.333" cy="3.006" r="2.72"></circle>
                      <circle cx="39.369" cy="3.006" r="2.72"></circle>
                      <circle cx="51.405" cy="3.006" r="2.72"></circle>
                      <circle cx="63.441" cy="3.006" r="2.72"></circle>
                      <circle cx="75.479" cy="3.006" r="2.72"></circle>
                      <circle cx="87.514" cy="3.006" r="2.719"></circle>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
