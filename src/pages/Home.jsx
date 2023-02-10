import { useState } from "react";
import { Link } from "react-router-dom";
import SearchModal from "../layouts/SearchModal";

const Home = ({ recruiter = false }) => {
  const [getToggleFilter, setToggleFilter] = useState(false);

  if (recruiter) {
    return (
      <>
        <div>
          <Link
            className="inline-block w-full rounded-l-xl rounded-t-xl bg-white py-2 px-6 font-semibold leading-loose transition duration-200 hover:bg-gray-50 lg:w-auto"
            to="/recruiter/profile"
            data-config-id="secondary-action-hero"
          >
            Profile
          </Link>
          <Link
            className="inline-block w-full rounded-l-xl rounded-t-xl bg-white py-2 px-6 font-semibold leading-loose transition duration-200 hover:bg-gray-50 lg:w-auto"
            to="/recruiter/company"
            data-config-id="secondary-action-hero"
          >
            Company
          </Link>
          <Link
            className="inline-block w-full rounded-l-xl rounded-t-xl bg-white py-2 px-6 font-semibold leading-loose transition duration-200 hover:bg-gray-50 lg:w-auto"
            to="/recruiter/jobs"
            data-config-id="secondary-action-hero"
          >
            Jobs
          </Link>
        </div>
      </>
    );
  } else {
    return (
      <div className="flex  items-center justify-center bg-blue-700 ">
        <div className="relative bg-gray-50 pt-12 pb-12 md:pb-24 lg:pt-20">
          <div className="container mx-auto px-4">
            <div className="-mx-4 flex flex-wrap">
              <div className="mb-12 flex w-full items-center px-4 md:mb-20 lg:mb-0 lg:w-1/2">
                <div className="w-full text-center lg:text-left">
                  <div className="mx-auto max-w-md lg:mx-0">
                    <h2 className="font-heading mb-3 text-4xl font-bold lg:text-5xl">
                      <span data-config-id="header-p1">
                        Build &amp; Launch without
                      </span>
                      <span
                        className="text-green-600"
                        data-config-id="header-p2"
                      >
                        problems
                      </span>
                    </h2>
                  </div>
                  <div className="mx-auto max-w-sm lg:mx-0">
                    <p
                      className="mb-6 leading-loose text-gray-400"
                      data-config-id="desc"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Pellentesque efficitur nisl sodales egestas lobortis.
                    </p>
                    <div>
                      <Link
                        className="mb-3 inline-block w-full rounded-l-xl rounded-t-xl bg-green-600 py-2 px-6 font-semibold leading-loose text-white transition duration-200 hover:bg-green-700 lg:mb-0 lg:mr-3 lg:w-auto"
                        to="/sign-in"
                        data-config-id="primary-action-hero"
                      >
                        Sign In
                      </Link>
                      <Link
                        className="inline-block w-full rounded-l-xl rounded-t-xl bg-white py-2 px-6 font-semibold leading-loose transition duration-200 hover:bg-gray-50 lg:w-auto"
                        to="/sign-up"
                        data-config-id="secondary-action-hero"
                      >
                        Sign Up
                      </Link>
                      <Link
                        className="inline-block w-full rounded-l-xl rounded-t-xl bg-white py-2 px-6 font-semibold leading-loose transition duration-200 hover:bg-gray-50 lg:w-auto"
                        to="/profile"
                        data-config-id="secondary-action-hero"
                      >
                        Profile
                      </Link>
                      <Link
                        className="inline-block w-full rounded-l-xl rounded-t-xl bg-white py-2 px-6 font-semibold leading-loose transition duration-200 hover:bg-gray-50 lg:w-auto"
                        to="/applications"
                        data-config-id="secondary-action-hero"
                      >
                        Applied
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex w-full items-center justify-center px-4 lg:w-1/2">
                <div className="relative" style={{ zIndex: "0" }}>
                  <img
                    className="h-128 w-full max-w-lg rounded-3xl object-cover md:rounded-br-none"
                    src="https://images.unsplash.com/photo-1462826303086-329426d1aef5?ixlib=rb-1.2.1&amp;ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;auto=format&amp;fit=crop&amp;w=1050&amp;q=80"
                    alt=""
                    data-config-id="image1"
                  />
                  <img
                    className="absolute hidden md:block"
                    style={{ top: "-2rem", right: "3rem", zIndex: "-1" }}
                    src="https://shuffle.dev/atis-assets/elements/green-dark-up.svg"
                    alt=""
                  />
                  <img
                    className="absolute hidden md:block"
                    style={{ bottom: "-2rem", right: "-2rem", zIndex: "-1" }}
                    src="https://shuffle.dev/atis-assets/elements/wing-green-down.svg"
                    alt=""
                  />
                  <img
                    className="absolute hidden md:block"
                    style={{ top: "3rem", right: "-3rem", zIndex: "-1" }}
                    src="https://shuffle.dev/atis-assets/elements/bullets-gray-right.svg"
                    alt=""
                  />
                  <img
                    className="absolute hidden md:block"
                    style={{ bottom: "2.5rem", left: "-4.5rem", zIndex: "-1" }}
                    src="https://shuffle.dev/atis-assets/elements/bullets-gray-left.svg"
                    alt=""
                  />
                </div>
              </div>
              <div>
                <div className=" ml-32 mt-24 h-48 bg-white px-10 lg:h-32">
                  <form
                    // onSubmit="return false;"
                    className="mx-auto flex h-auto max-w-lg -translate-y-12 transform flex-col items-center space-y-3 overflow-hidden rounded-lg bg-white p-6 shadow-md lg:h-24 lg:max-w-6xl lg:flex-row lg:space-y-0 lg:space-x-3"
                  >
                    <div className="h-12 w-full rounded-lg border-2 border-gray-200 lg:w-auto lg:flex-1 lg:border-0">
                      <input
                        type="search"
                        className="h-full w-full rounded-lg px-4 font-medium text-gray-700 focus:bg-gray-50 focus:outline-none sm:text-lg"
                        placeholder="What Are You Searching For?"
                      />
                    </div>
                    <div className="hidden h-10 w-0.5 bg-gray-100 lg:block"></div>
                    <div className="relative flex h-12 w-full items-center rounded-lg border-2 border-gray-200 lg:w-auto lg:flex-1 lg:border-0">
                      <input
                        type="search"
                        className="h-full w-full rounded-lg px-4 font-medium text-gray-700 focus:bg-gray-50 focus:outline-none sm:text-lg"
                        placeholder="Location?"
                      />
                      <svg
                        className="absolute right-0 mr-4 h-6 w-6 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        ></path>
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        ></path>
                      </svg>
                    </div>
                    <button
                      className="h-6 w-6"
                      type="button"
                      onClick={() => setToggleFilter(true)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#c8c8c8"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        data-darkreader-inline-stroke=""
                        style={{ darkreaderInlineStroke: "currentColor" }}
                      >
                        <line x1="21" y1="4" x2="14" y2="4"></line>
                        <line x1="10" y1="4" x2="3" y2="4"></line>
                        <line x1="21" y1="12" x2="12" y2="12"></line>
                        <line x1="8" y1="12" x2="3" y2="12"></line>
                        <line x1="21" y1="20" x2="16" y2="20"></line>
                        <line x1="12" y1="20" x2="3" y2="20"></line>
                        <line x1="14" y1="2" x2="14" y2="6"></line>
                        <line x1="8" y1="10" x2="8" y2="14"></line>
                        <line x1="16" y1="18" x2="16" y2="22"></line>
                      </svg>
                    </button>
                    <div className="h-full w-full lg:w-auto">
                      <button
                        type="submit"
                        className="whitespace-no-wrap inline-flex h-full w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium leading-6 text-white shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 lg:w-64"
                      >
                        SEARCH
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            {getToggleFilter ? (
              <>
                <SearchModal setToggleFilter={setToggleFilter} />
              </>
            ) : null}
          </div>
        </div>
      </div>
    );
  }
};

export default Home;
