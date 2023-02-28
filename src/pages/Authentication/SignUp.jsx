import Request from "../../utils/API-routers";
import { signup } from "../../store/features/editUserProfileSlice";
import { signupRecruiter } from "../../store/features/editRecruiterProfileSlice";
import ErrorBar from "../../components/ErrorBar";
import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";

const SignUp = () => {
  const [, setLoad] = useState(false);
  const [getError, setError] = useState("");
  const [getSignup, setSignup] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const name = pathname.split("/")[1].toLocaleLowerCase();
  const path = name === "recruiter" ? "recruiters" : "candidates";
  const cook =
    name === "recruiter" ? "logged_in_recruiter" : "logged_in_candidate";

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setSignup({
      ...getSignup,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoad(true);
    if (getSignup.fullName.split(" ").length !== 2) {
      setError("Full Name should consist of first name and last name!");
    }
    Request.signup(path, getSignup)
      .then((res) => {
        Cookies.set(cook, "yes", {
          secure: true,
          expires: new Date(res.data.user.password),
        });
        dispatch(
          name === "recruiter"
            ? signupRecruiter({
                email: res.data.user.email,
                fullName: res.data.user.fullName,
                token: res.data.token,
                _id: res.data.user._id,
              })
            : signup({
                email: res.data.user.email,
                fullName: res.data.user.fullName,
                token: res.data.token,
                _id: res.data.user._id,
              })
        );

        res.data.status === "success" &&
          (name === "recruiter"
            ? navigate("/recruiter/overview")
            : navigate("/"));

        setLoad(false);
      })
      .catch((error) => {
        setError(error.response?.data.message);
        if (error.response?.data.error.code === 11000) {
          setError("duplicate email address");
        }
        setLoad(false);
      });
  };
  return (
    // <!-- Dojo down -->
    <section className="relative bg-white py-0 lg:py-20">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between px-10 lg:flex-row xl:px-5">
        <div className="flex w-full flex-col items-center px-10 pt-5 pb-20 lg:flex-row lg:pt-20">
          <div className="relative w-full max-w-md bg-cover lg:w-7/12 lg:max-w-2xl">
            <div className="relative flex h-full w-full flex-col items-center justify-center lg:pr-10">
              {/* <img
                src="https://cdn.devdojo.com/images/december2020/taxi-programming.png"
                alt=""
              /> */}
              {<ErrorBar setError={setError}>{getError}</ErrorBar>}
            </div>
          </div>

          <div className="relative z-10 mt-20 w-full max-w-2xl lg:mt-0 lg:w-5/12">
            <div className="relative z-10 flex flex-col items-start justify-start rounded-xl bg-white p-10 shadow-2xl">
              <h4 className="font-serif w-full text-4xl font-medium leading-snug">
                Schedule a Demo <br />
                of our product
              </h4>
              <form
                className="relative mt-6 w-full space-y-8"
                onSubmit={handleSubmit}
              >
                <div className="relative">
                  <label className="absolute ml-2 -mt-3 bg-white px-2 font-medium text-gray-600">
                    Full Name
                  </label>
                  <input
                    onChange={onChangeHandler}
                    required
                    value={getSignup.fullName}
                    type="text"
                    className="mt-2 block w-full rounded-md border border-gray-300 bg-white px-4 py-4 text-base placeholder-gray-400 focus:border-black focus:outline-none"
                    placeholder="John Doe"
                    name="fullName"
                  />
                </div>
                <div className="relative">
                  <label className="absolute ml-2 -mt-3 bg-white px-2 font-medium text-gray-600">
                    Email Address
                  </label>
                  <input
                    onChange={onChangeHandler}
                    required
                    value={getSignup.email}
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
                    onChange={onChangeHandler}
                    required
                    value={getSignup.password}
                    type="password"
                    name="password"
                    className="mt-2 block w-full rounded-md border border-gray-300 bg-white px-4 py-4 text-base placeholder-gray-400 focus:border-black focus:outline-none"
                    placeholder="Password"
                  />
                </div>
                <div className="relative">
                  <label className="absolute ml-2 -mt-3 bg-white px-2 font-medium text-gray-600">
                    Confirm Password
                  </label>
                  <input
                    onChange={onChangeHandler}
                    required
                    value={getSignup.confirmPassword}
                    type="password"
                    name="confirmPassword"
                    className="mt-2 block w-full rounded-md border border-gray-300 bg-white px-4 py-4 text-base placeholder-gray-400 focus:border-black focus:outline-none"
                    placeholder="Confirm Password"
                  />
                </div>
                <div className="relative">
                  <button
                    type="submit"
                    className="ease inline-block w-full rounded-lg bg-yellow-300 px-5 py-4 text-center text-xl font-medium text-white transition duration-200 hover:bg-yellow-400"
                  >
                    Submit
                  </button>
                </div>
              </form>
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

export default SignUp;
