import { useState, useRef, useEffect } from "react";
import Logo from "../assets/Logo";
import Request from "../utils/API-routers";
import { useDispatch } from "react-redux";
import { logout } from "../store/features/editUserProfileSlice";
import { logoutRecruiter } from "./../store/features/editRecruiterProfileSlice";
import { useNavigate, Link, useLocation } from "react-router-dom";
import Cookies from "js-cookie";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [getToggleProfile, setToggleProfile] = useState(false);
  const [getToggleMenu, setToggleMenu] = useState(false);
  const ref = useRef();
  const refMenu = useRef();

  const name = pathname.split("/")[1].toLocaleLowerCase();
  const path = name === "recruiter" ? "recruiters" : "users";
  const route = name === "recruiter" ? "/recruiter/sign-in" : "/sign-in";
  const cook = name === "recruiter" ? "logged_in_recruiter" : "logged_in_user";
  const reduxData = name === "recruiter" ? logoutRecruiter() : logout();

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (getToggleProfile && ref.current && !ref.current.contains(e.target)) {
        setToggleProfile(false);
      }
    };
    document.addEventListener("mousedown", checkIfClickedOutside);
    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [getToggleProfile]);

  useEffect(() => {
    const checkIfClickedOutsidemenu = (e) => {
      if (
        getToggleMenu &&
        refMenu.current &&
        !refMenu.current.contains(e.target)
      ) {
        setToggleMenu(false);
      }
    };
    document.addEventListener("mousedown", checkIfClickedOutsidemenu);
    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutsidemenu);
    };
  }, [getToggleMenu]);

  const Logout = () => {
    dispatch(reduxData);
    Request.logout(path);
    Cookies.remove(cook);
    navigate(route, { replace: true });
  };

  return (
    <div
      id="page-container"
      className="mx-auto flex w-full flex-col  bg-gray-900"
    >
      {/* <!-- Page Header --> */}
      <header
        id="page-header"
        className="z-1 flex flex-none items-center  shadow-sm"
      >
        <div className="container mx-auto px-4 lg:px-8 xl:max-w-7xl">
          <div className="flex justify-between py-4">
            {/* <!-- Left Section --> */}
            <div className="flex items-center">
              {/* <!-- Logo --> */}
              <Link
                to="/"
                className="group inline-flex items-center space-x-2 text-lg font-bold tracking-wide text-gray-700 hover:text-blue-600 active:text-gray-700"
              >
                <Logo
                  width={128}
                  height={32}
                  css={
                    "opacity-90 text-blue-600 transform transition group-hover:scale-110 hi-solid hi-cube-transparent inline-block"
                  }
                />
              </Link>
              {/* <!-- END Logo --> */}
            </div>
            {/* <!-- END Left Section --> */}

            {/* <!-- Right Section --> */}
            <div className="flex items-center space-x-1 lg:space-x-5">
              {/* <!-- Desktop Navigation --> */}
              <nav className="hidden lg:flex lg:items-center lg:space-x-2">
                <Link
                  to="/"
                  className="flex items-center space-x-2 rounded border border-blue-50 bg-blue-50 px-3 py-2 text-sm font-medium text-blue-500"
                >
                  <svg
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    className="hi-solid hi-home inline-block h-5 w-5 opacity-50"
                  >
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
                  </svg>
                  <span>For job seekers</span>
                </Link>
                <Link
                  to="/recruiter/overview"
                  className="flex items-center space-x-2 rounded border border-transparent px-3 py-2 text-sm font-medium text-gray-600 hover:border-blue-50 hover:bg-blue-50 hover:text-blue-500 active:border-blue-100 active:bg-blue-100"
                >
                  <svg
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    className="hi-solid hi-user-circle inline-block h-5 w-5 opacity-50"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span>For employers</span>
                </Link>
                <Link
                  to="/"
                  className="flex items-center space-x-2 rounded border border-transparent px-3 py-2 text-sm font-medium text-gray-600 hover:border-blue-50 hover:bg-blue-50 hover:text-blue-500 active:border-blue-100 active:bg-blue-100"
                >
                  <svg
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    className="hi-solid hi-briefcase inline-block h-5 w-5 opacity-50"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                      clipRule="evenodd"
                    ></path>
                    <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"></path>
                  </svg>
                  <span>Resumes</span>
                </Link>
                <Link
                  to="/"
                  className="flex items-center space-x-2 rounded border border-transparent px-3 py-2 text-sm font-medium text-gray-600 hover:border-blue-50 hover:bg-blue-50 hover:text-blue-500 active:border-blue-100 active:bg-blue-100"
                >
                  <svg
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    className="hi-solid hi-cog inline-block h-5 w-5 opacity-50"
                  >
                    <path
                      fillRule="evenodd"
                      d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span>Settings</span>
                </Link>
              </nav>
              {/* <!-- END Desktop Navigation --> */}

              {/* <!-- User Dropdown --> */}
              <div className="relative inline-block" ref={ref}>
                {/* <!-- Dropdown Toggle Button --> */}
                <button
                  type="button"
                  onClick={() => setToggleProfile((oldState) => !oldState)}
                  className="inline-flex items-center justify-center space-x-2 rounded-full border border-gray-300 bg-white px-3 py-2 text-sm font-semibold leading-5 text-gray-800 shadow-sm hover:border-gray-300 hover:bg-gray-100 hover:text-gray-800 hover:shadow focus:outline-none focus:ring focus:ring-gray-500 focus:ring-opacity-25 active:border-white active:bg-white active:shadow-none"
                  id="tk-dropdown-layouts-user"
                  aria-haspopup="true"
                  aria-expanded="true"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="4" y1="12" x2="20" y2="12"></line>
                    <line x1="4" y1="6" x2="20" y2="6"></line>
                    <line x1="4" y1="18" x2="20" y2="18"></line>
                  </svg>
                  <svg
                    viewBox="0 0 24 24"
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title />
                    <circle cx="12" cy="8" fill="#464646" r="4" />
                    <path
                      d="M20,19v1a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V19a6,6,0,0,1,6-6h4A6,6,0,0,1,20,19Z"
                      fill="#464646"
                    />
                  </svg>
                </button>
                {/* <!-- END Dropdown Toggle Button -->
  
              <!-- Dropdown -->
              <!-- 
                Visibility
                  Closed        'hidden'
                  Opened        '' (no class)
  
                Show/Hide with transitions
                  enter         'transition ease-out duration-150'
                  enter-start   'transform opacity-0 scale-75'
                  enter-end     'transform opacity-100 scale-100'
                  leave         'transition ease-in duration-100'
                  leave-start   'transform opacity-100 scale-100'
                  leave-end     'transform opacity-0 scale-75'
              --> */}
                {getToggleProfile && (
                  <div
                    role="menu"
                    aria-labelledby="tk-dropdown-with-header-badges"
                    className="absolute right-0 z-10 mt-2 w-64 origin-top-right rounded shadow-xl"
                  >
                    <div className="divide-y divide-gray-100 rounded bg-white ring-1 ring-black ring-opacity-5">
                      <div className="flex items-center space-x-3 p-3">
                        <img
                          src="https://source.unsplash.com/iFgRcqHznqg/160x160"
                          alt="User Avatar"
                          className="inline-block h-10 w-10 flex-none rounded-full"
                        />
                        <div className="grow text-sm">
                          <Link
                            to="/"
                            className="font-semibold text-gray-600 hover:text-gray-500"
                          >
                            John Doe
                          </Link>
                          <p className="text-gray-500">john.doe@example.com</p>
                        </div>
                      </div>
                      <div className="space-y-1 p-2">
                        <Link
                          role="menuitem"
                          to="/"
                          className="flex items-center justify-between space-x-2 rounded py-2 px-3 text-sm font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-700 focus:bg-gray-100 focus:text-gray-700 focus:outline-none"
                        >
                          <div className="flex flex-none items-center space-x-2">
                            <svg
                              className="hi-solid hi-annotation inline-block h-5 w-5 opacity-50"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z"
                                clipRule="evenodd"
                              />
                            </svg>
                            <span>Notifications</span>
                          </div>
                          <div className="ml-2 inline-flex rounded-full bg-emerald-200 px-2 py-1 text-sm font-semibold leading-4 text-emerald-700">
                            3
                          </div>
                        </Link>
                        <Link
                          role="menuitem"
                          to="/"
                          className="flex items-center justify-between space-x-2 rounded py-2 px-3 text-sm font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-700 focus:bg-gray-100 focus:text-gray-700 focus:outline-none"
                        >
                          <div className="flex flex-none items-center space-x-2">
                            <svg
                              className="hi-solid hi-inbox inline-block h-5 w-5 opacity-50"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                d="M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm0 2h10v7h-2l-1 2H8l-1-2H5V5z"
                                clipRule="evenodd"
                              />
                            </svg>
                            <span>Inbox</span>
                          </div>
                          <div className="ml-2 inline-flex rounded-full bg-emerald-200 px-2 py-1 text-sm font-semibold leading-4 text-emerald-700">
                            5
                          </div>
                        </Link>
                      </div>
                      <div className="space-y-1 p-2">
                        <form onSubmit="return false;">
                          {Cookies.get(cook) ? (
                            <button
                              onClick={Logout}
                              type="submit"
                              role="menuitem"
                              className="flex w-full items-center space-x-2 rounded py-2 px-3 text-left text-sm font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-700 focus:bg-gray-100 focus:text-gray-700 focus:outline-none"
                            >
                              <svg
                                className="hi-solid hi-lock-closed inline-block h-5 w-5 opacity-50"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                                  clipRule="evenodd"
                                />
                              </svg>
                              <span>Sign out</span>
                            </button>
                          ) : (
                            <Link
                              to="/sign-in"
                              role="menuitem"
                              className="flex w-full items-center space-x-2 rounded py-2 px-3 text-left text-sm font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-700 focus:bg-gray-100 focus:text-gray-700 focus:outline-none"
                            >
                              <svg
                                className="hi-solid hi-lock-closed inline-block h-5 w-5 opacity-50"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                                  clipRule="evenodd"
                                />
                              </svg>

                              <span>Sign In</span>
                            </Link>
                          )}
                        </form>
                      </div>
                    </div>
                  </div>
                )}
                {/* <!-- END Dropdown --> */}
              </div>
              {/* <!-- END User Dropdown --> */}

              {/* <!-- Toggle Mobile Navigation --> */}
              <div className="lg:hidden" ref={refMenu}>
                <button
                  type="button"
                  onClick={() => setToggleMenu((oldState) => !oldState)}
                  className="inline-flex items-center justify-center space-x-2 rounded border border-gray-300 bg-white px-3 py-2 font-semibold leading-6 text-gray-800 shadow-sm hover:border-gray-300 hover:bg-gray-100 hover:text-gray-800 hover:shadow focus:outline-none focus:ring focus:ring-gray-500 focus:ring-opacity-25 active:border-white active:bg-white active:shadow-none"
                >
                  <svg
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    className="hi-solid hi-menu inline-block h-5 w-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>
              {/* <!-- END Toggle Mobile Navigation --> */}
            </div>
            {/* <!-- END Right Section --> */}
          </div>

          {/* <!-- Mobile Navigation -->
        <!-- 
          Visibility
            Closed        'hidden'
            Opened        '' (no class)
        --> */}
          <div className="lg:hidden">
            {getToggleMenu && (
              <nav className="flex flex-col space-y-2 border-t py-4">
                <Link
                  to="/"
                  className="flex items-center space-x-2 rounded border border-blue-50 bg-blue-50 px-3 py-2 text-sm font-medium text-blue-500"
                >
                  <svg
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    className="hi-solid hi-home inline-block h-5 w-5 opacity-50"
                  >
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
                  </svg>
                  <span>For job seekers</span>
                </Link>
                <Link
                  to="/"
                  className="flex items-center space-x-2 rounded border border-transparent px-3 py-2 text-sm font-medium text-gray-600 hover:border-blue-50 hover:bg-blue-50 hover:text-blue-500 active:border-blue-100 active:bg-blue-100"
                >
                  <svg
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    className="hi-solid hi-user-circle inline-block h-5 w-5 opacity-50"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span>For employers</span>
                </Link>
                <Link
                  to="/"
                  className="flex items-center space-x-2 rounded border border-transparent px-3 py-2 text-sm font-medium text-gray-600 hover:border-blue-50 hover:bg-blue-50 hover:text-blue-500 active:border-blue-100 active:bg-blue-100"
                >
                  <svg
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    className="hi-solid hi-briefcase inline-block h-5 w-5 opacity-50"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                      clipRule="evenodd"
                    ></path>
                    <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"></path>
                  </svg>
                  <span>Resumes</span>
                </Link>
                <Link
                  to="/"
                  className="flex items-center space-x-2 rounded border border-transparent px-3 py-2 text-sm font-medium text-gray-600 hover:border-blue-50 hover:bg-blue-50 hover:text-blue-500 active:border-blue-100 active:bg-blue-100"
                >
                  <svg
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    className="hi-solid hi-cog inline-block h-5 w-5 opacity-50"
                  >
                    <path
                      fillRule="evenodd"
                      d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span>Settings</span>
                </Link>
              </nav>
            )}
          </div>
          {/* <!-- END Mobile Navigation --> */}
        </div>
      </header>
      {/* {/* <!-- END Page Header --> */}
    </div>
  );
};

export default Navbar;
