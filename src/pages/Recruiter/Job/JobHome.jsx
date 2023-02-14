import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import Request from "./../../../utils/API-routers";
import { editInitialJob } from "../../../store/features/editJobSlice";
import JobCard from "../../../components/JobCard";
// import JobPreview from "./JobPreview";

const JobHome = () => {
  const dispatch = useDispatch();
  const job_initials = useSelector((state) => state.Job.job_initials);
  const _idRecruiter = useSelector((state) => state.RecruiterProfile._id);
  // console.log(job_initials);
  console.log(_idRecruiter);

  const [, setLoad] = useState(false);
  const [, setError] = useState("");
  const [pageNumber, setPageNumber] = useState(0);
  const [numberOfPages, setNumberOfPages] = useState(0);
  // const [news, setNews] = useState([]);

  const pages = new Array(numberOfPages).fill(null).map((v, i) => i);

  useEffect(() => {
    setLoad(true);
    Request.getRecruiterJobCompany("job", { recruiter: _idRecruiter })
      .then((res) => {
        console.log(res);
        dispatch(editInitialJob(res.data.doc));
        setNumberOfPages(res.data.totalPages);
        setLoad(false);
      })
      .catch((error) => {
        setError(error.response.data.msg);
        setLoad(false);
      });
  }, [_idRecruiter, dispatch, pageNumber]);

  const gotoPrevious = () => {
    window.scrollTo(0, 0);
    setPageNumber(Math.max(0, pageNumber - 1));
  };

  const gotoNext = () => {
    window.scrollTo(0, 0);
    setPageNumber(Math.min(numberOfPages - 1, pageNumber + 1));
  };

  const setPage = (pageIndex) => {
    window.scrollTo(0, 0);
    setPageNumber(pageIndex);
  };
  return (
    <>
      <div class="mt-9 flex flex-col space-y-10 sm:flex-row sm:space-x-6 sm:space-y-0 md:flex-col md:space-x-0 md:space-y-10 xl:flex-row xl:space-x-6 xl:space-y-0">
        <div class="space-y-8">
          <div class="min-w-60 relative rounded-sm bg-indigo-200 p-5">
            <div class="absolute bottom-0 -mb-3">
              {/* <svg
              width="44"
              height="42"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <defs>
                <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="ill-b">
                  <stop stop-color="#A5B4FC" offset="0%"></stop>
                  <stop stop-color="#818CF8" offset="100%"></stop>
                </linearGradient>
                <linearGradient
                  x1="50%"
                  y1="24.537%"
                  x2="50%"
                  y2="100%"
                  id="ill-c"
                >
                  <stop stop-color="#4338CA" offset="0%"></stop>
                  <stop
                    stop-color="#6366F1"
                    stop-opacity="0"
                    offset="100%"
                  ></stop>
                </linearGradient>
                <path id="ill-a" d="m20 0 20 40-20-6.25L0 40z"></path>
              </defs>
              <g
                transform="scale(-1 1) rotate(-51 -11.267 67.017)"
                fill="none"
                fill-rule="evenodd"
              >
                <mask id="ill-d" fill="#fff">
                  <use xlinkHref="#ill-a"></use>
                </mask>
                <use fill="url(#ill-b)" xlink:href="#ill-a"></use>
                <path
                  fill="url(#ill-c)"
                  mask="url(#ill-d)"
                  d="M20.586-7.913h25v47.5h-25z"
                ></path>
              </g>
            </svg> */}
            </div>
            <div class="relative">
              <div class="mb-2 text-sm font-medium text-slate-800">
                Remember to keep track of your job research.
              </div>
              <div class="text-right">
                <a
                  class="text-sm font-medium text-indigo-500 hover:text-indigo-600"
                  href="#0"
                >
                  Create Alert -&gt;
                </a>
              </div>
            </div>
          </div>
          <div class="min-w-60 rounded-sm border border-slate-200 bg-white p-5 shadow-lg">
            <div class="grid gap-6 md:grid-cols-2 xl:grid-cols-1">
              <div>
                <div class="mb-3 text-sm font-semibold text-slate-800">
                  Job Types
                </div>
                <ul class="space-y-2">
                  <li>
                    <label class="flex items-center">
                      <input type="checkbox" class="form-checkbox" checked="" />
                      <span class="ml-2 text-sm font-medium text-slate-600">
                        Programming
                      </span>
                    </label>
                  </li>
                  <li>
                    <label class="flex items-center">
                      <input type="checkbox" class="form-checkbox" />
                      <span class="ml-2 text-sm font-medium text-slate-600">
                        Design
                      </span>
                    </label>
                  </li>
                  <li>
                    <label class="flex items-center">
                      <input type="checkbox" class="form-checkbox" />
                      <span class="ml-2 text-sm font-medium text-slate-600">
                        Management / Finance
                      </span>
                    </label>
                  </li>
                  <li>
                    <label class="flex items-center">
                      <input type="checkbox" class="form-checkbox" />
                      <span class="ml-2 text-sm font-medium text-slate-600">
                        Customer Support
                      </span>
                    </label>
                  </li>
                  <li>
                    <label class="flex items-center">
                      <input type="checkbox" class="form-checkbox" />
                      <span class="ml-2 text-sm font-medium text-slate-600">
                        Sales / Marketing
                      </span>
                    </label>
                  </li>
                </ul>
              </div>
              <div>
                <div class="mb-3 text-sm font-semibold text-slate-800">
                  Company Culture
                </div>
                <div class="flex items-center" x-data="{ checked: true }">
                  <div class="form-switch">
                    <input
                      type="checkbox"
                      id="company-toggle"
                      class="sr-only"
                      x-model="checked"
                    />
                    <label class="bg-slate-400" for="company-toggle">
                      <span
                        class="bg-white shadow-sm"
                        aria-hidden="true"
                      ></span>
                      <span class="sr-only">Company Culture</span>
                    </label>
                  </div>
                  <div
                    class="ml-2 text-sm italic text-slate-400"
                    x-text="checked ? 'On' : 'Off'"
                  >
                    On
                  </div>
                </div>
                <div class="mt-3 text-sm italic">
                  Only show companies that are creating a positive culture
                </div>
              </div>
              <div>
                <div class="mb-3 text-sm font-semibold text-slate-800">
                  Salary Range
                </div>
                <ul class="space-y-2">
                  <li>
                    <label class="flex items-center">
                      <input type="checkbox" class="form-checkbox" checked="" />
                      <span class="ml-2 text-sm font-medium text-slate-600">
                        $20K - $50K
                      </span>
                    </label>
                  </li>
                  <li>
                    <label class="flex items-center">
                      <input type="checkbox" class="form-checkbox" />
                      <span class="ml-2 text-sm font-medium text-slate-600">
                        $50K - $100K
                      </span>
                    </label>
                  </li>
                  <li>
                    <label class="flex items-center">
                      <input type="checkbox" class="form-checkbox" />
                      <span class="ml-2 text-sm font-medium text-slate-600">
                        &gt; $100K
                      </span>
                    </label>
                  </li>
                  <li>
                    <label class="flex items-center">
                      <input type="checkbox" class="form-checkbox" />
                      <span class="ml-2 text-sm font-medium text-slate-600">
                        Drawing / Painting
                      </span>
                    </label>
                  </li>
                </ul>
              </div>

              <div>
                <div class="mb-3 text-sm font-semibold text-slate-800">
                  Immigration
                </div>
                <div class="flex items-center" x-data="{ checked: false }">
                  <div class="form-switch">
                    <input
                      type="checkbox"
                      id="immigration-toggle"
                      class="sr-only"
                      x-model="checked"
                    />
                    <label class="bg-slate-400" for="immigration-toggle">
                      <span
                        class="bg-white shadow-sm"
                        aria-hidden="true"
                      ></span>
                      <span class="sr-only">Immigration</span>
                    </label>
                  </div>
                  <div
                    class="ml-2 text-sm italic text-slate-400"
                    x-text="checked ? 'On' : 'Off'"
                  >
                    Off
                  </div>
                </div>
                <div class="mt-3 text-sm italic">
                  Only show companies that can sponsor a visa
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="w-full">
          <div class="mb-5">
            <form class="relative">
              <label for="job-search" class="sr-only">
                Search
              </label>
              <input
                id="job-search"
                class="form-input w-full pl-9 focus:border-slate-300"
                type="search"
                placeholder="Search job title or keyword…"
              />
              <button
                class="group absolute inset-0 right-auto"
                type="submit"
                aria-label="Search"
              >
                {/* <svg
                class="ml-3 mr-2 h-4 w-4 shrink-0 fill-current text-slate-400 group-hover:text-slate-500"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7 14c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zM7 2C4.243 2 2 4.243 2 7s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5z"></path>
                <path d="M15.707 14.293L13.314 11.9a8.019 8.019 0 01-1.414 1.414l2.393 2.393a.997.997 0 001.414 0 .999.999 0 000-1.414z"></path>
              </svg> */}
              </button>
            </form>
          </div>

          <div class="mb-4 flex items-center justify-between">
            <div class="text-sm italic text-slate-500">Showing 289 Jobs</div>

            <div class="text-sm">
              <span>Sort by </span>
              <div class="relative inline-flex" x-data="{ open: false }">
                {/* @click.prevent="open = !open" :aria-expanded="open" */}
                <button
                  class="group inline-flex items-center justify-center"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <div class="flex items-center truncate">
                    <span class="truncate font-medium text-indigo-500 group-hover:text-indigo-600">
                      Newest
                    </span>
                    <svg
                      class="ml-1 h-3 w-3 shrink-0 fill-current text-indigo-400"
                      viewBox="0 0 12 12"
                    >
                      <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z"></path>
                    </svg>
                  </div>
                </button>
                {/* @click.outside="open = false" @keydown.escape.window="open = false" */}
                <div
                  class="absolute top-full right-0 z-10 mt-1 origin-top-right overflow-hidden rounded border border-slate-200 bg-white py-1.5 shadow-lg"
                  x-show="open"
                  x-transitionEnter="transition ease-out duration-200 transform"
                  x-transitionEnter-start="opacity-0 -translate-y-2"
                  x-transitionEnter-end="opacity-100 translate-y-0"
                  x-transitionLeave="transition ease-out duration-200"
                  x-transitionLeave-start="opacity-100"
                  x-transitionLeave-end="opacity-0"
                  style={{ display: "none" }}
                >
                  <ul>
                    <li>
                      {/* @click="open = false" @focus="open = true" @focusout="open = false" */}
                      <a
                        class="flex items-center py-1 px-3 text-sm font-medium text-slate-600 hover:text-slate-800"
                        href="#0"
                      >
                        Oldest
                      </a>
                    </li>
                    <li>
                      {/* @click="open = false" @focus="open = true" @focusout="open = false" */}
                      <a
                        class="flex items-center py-1 px-3 text-sm font-medium text-slate-600 hover:text-slate-800"
                        href="#0"
                      >
                        Featured
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div class="space-y-2">
            {job_initials.map((jobElement, index) => (
              <JobCard key={index} jobElement={jobElement} />
            ))}
          </div>

          <div class="mt-6">
            <div class="flex justify-center">
              <nav class="flex" role="navigation" aria-label="Navigation">
                <div class="mr-2">
                  <span class="inline-flex items-center justify-center rounded border border-slate-200 bg-white px-2.5 py-2 leading-5 text-slate-300">
                    <span class="sr-only">Previous</span>
                    <svg class="h-4 w-4 fill-current" viewBox="0 0 16 16">
                      <path d="M9.4 13.4l1.4-1.4-4-4 4-4-1.4-1.4L4 8z"></path>
                    </svg>
                  </span>
                </div>
                <ul class="inline-flex -space-x-px text-sm font-medium shadow-sm">
                  <li>
                    <span class="inline-flex items-center justify-center rounded-l border border-slate-200 bg-white px-3.5 py-2 leading-5 text-indigo-500">
                      1
                    </span>
                  </li>
                  <li>
                    <a
                      class="inline-flex items-center justify-center border border-slate-200 bg-white px-3.5 py-2 leading-5 text-slate-600 hover:bg-indigo-500 hover:text-white"
                      href="#0"
                    >
                      2
                    </a>
                  </li>
                  <li>
                    <a
                      class="inline-flex items-center justify-center border border-slate-200 bg-white px-3.5 py-2 leading-5 text-slate-600 hover:bg-indigo-500 hover:text-white"
                      href="#0"
                    >
                      3
                    </a>
                  </li>
                  <li>
                    <span class="inline-flex items-center justify-center border border-slate-200 bg-white px-3.5 py-2 leading-5 text-slate-400">
                      …
                    </span>
                  </li>
                  <li>
                    <a
                      class="inline-flex items-center justify-center rounded-r border border-slate-200 bg-white px-3.5 py-2 leading-5 text-slate-600 hover:bg-indigo-500 hover:text-white"
                      href="#0"
                    >
                      9
                    </a>
                  </li>
                </ul>
                <div class="ml-2">
                  <a
                    href="#0"
                    class="inline-flex items-center justify-center rounded border border-slate-200 bg-white px-2.5 py-2 leading-5 text-slate-600 shadow-sm hover:bg-indigo-500 hover:text-white"
                  >
                    <span class="sr-only">Next</span>
                    <wbr />
                    <svg class="h-4 w-4 fill-current" viewBox="0 0 16 16">
                      <path d="M6.6 13.4L5.2 12l4-4-4-4 1.4-1.4L12 8z"></path>
                    </svg>
                  </a>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* The pagination */}
      <div className="flex flex-row items-center justify-center space-x-2">
        <button
          onClick={gotoPrevious}
          className="rounded-lg border-2 border-primary p-2 text-primary duration-200 ease-linear hover:bg-primary hover:text-white "
        >
          Previous
        </button>
        {pageNumber >= 2 && <span className="mt-4 text-primary">. . .</span>}
        {numberOfPages > 2
          ? pages
              .slice(pageNumber === 0 ? 0 : pageNumber - 1, pageNumber + 2)
              .map((page, index) => {
                return (
                  <button
                    key={index}
                    onClick={() => setPage(page)}
                    className={` ${
                      page === pageNumber
                        ? "rounded-lg border-2 border-primary bg-primary p-2 text-white duration-200 ease-linear hover:bg-white hover:text-primary"
                        : "rounded-lg border-2 border-primary p-2 text-primary duration-200 ease-linear hover:bg-primary hover:text-white"
                    }`}
                  >
                    {page + 1}
                  </button>
                );
              })
          : pages.map((pageIndex) => (
              <button
                key={pageIndex}
                onClick={() => setPage(pageIndex)}
                className={` ${
                  pageIndex === pageNumber
                    ? "rounded-lg border-2 border-primary bg-primary p-2 text-white duration-200 ease-linear hover:bg-white hover:text-primary"
                    : "rounded-lg border-2 border-primary p-2 text-primary duration-200 ease-linear hover:bg-primary hover:text-white"
                }`}
              >
                {pageIndex + 1}
              </button>
            ))}
        {numberOfPages > 2 && numberOfPages !== pageNumber + 1 && (
          <span className="mt-4 text-primary">. . .</span>
        )}
        <button
          onClick={gotoNext}
          className="rounded-lg border-2 border-primary p-2 text-primary duration-200 ease-linear hover:bg-primary hover:text-white "
        >
          Next
        </button>
      </div>
      <Link
        className="inline-block w-full rounded-l-xl rounded-t-xl bg-white py-2 px-6 font-semibold leading-loose transition duration-200 hover:bg-gray-50 lg:w-auto"
        to="/recruiter/jobs/create-job"
        // data-config-id="secondary-action-hero"
      >
        + Create a job
      </Link>

      <Outlet />
    </>
  );
};

export default JobHome;
