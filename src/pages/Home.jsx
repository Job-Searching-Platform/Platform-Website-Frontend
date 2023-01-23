import { useState, Fragment } from "react";
import Select from "react-select";
import Slider, { SliderThumb } from "@mui/material/Slider";
import { styled } from "@mui/material/styles";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  JobTitleOptions,
  LocationOptions,
  CurrencyOptions,
} from "./../data/JobTitle";
const AirbnbSlider = styled(Slider)(({ theme }) => ({
  color: "#3a8589",
  height: 3,
  padding: "13px 0",
  "& .MuiSlider-thumb": {
    height: 27,
    width: 27,
    backgroundColor: "#fff",
    border: "1px solid currentColor",
    "&:hover": {
      boxShadow: "0 0 0 8px rgba(58, 133, 137, 0.16)",
    },
    "& .airbnb-bar": {
      height: 9,
      width: 1,
      backgroundColor: "currentColor",
      marginLeft: 1,
      marginRight: 1,
    },
  },
  "& .MuiSlider-track": {
    height: 3,
  },
  "& .MuiSlider-rail": {
    color: theme.palette.mode === "dark" ? "#bfbfbf" : "#d8d8d8",
    opacity: theme.palette.mode === "dark" ? undefined : 1,
    height: 3,
  },
}));

function AirbnbThumbComponent(props) {
  const { children, ...other } = props;
  return (
    <SliderThumb {...other}>
      {children}
      <span className="airbnb-bar" />
      <span className="airbnb-bar" />
      <span className="airbnb-bar" />
    </SliderThumb>
  );
}

const Home = () => {
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;

  const [getToggleFilter, setToggleFilter] = useState(false);
  const [getSwitchVisa, setSwitchVisa] = useState(true);
  const [getCurrency, setCurrency] = useState(CurrencyOptions[0]);
  const [getJobTitleSelector, setJobTitleSelector] = useState({
    selectedJobTitle: [],
  });
  const [getLocationSelector, setLocationSelector] = useState({
    selectedLocation: [],
  });
  const [checked, setChecked] = useState({
    fulltime: false,
    contract: false,
    internship: false,
    cofounder: false,
    newgrad: false,
  });

  const handleCheckbox = (e) => {
    const answer =
      e.target.name === "fulltime"
        ? checked.fulltime
        : e.target.name === "contract"
        ? checked.contract
        : e.target.name === "internship"
        ? checked.internship
        : e.target.name === "cofounder"
        ? checked.cofounder
        : checked.newgrad;

    const name = e.target.name;
    setChecked((values) => ({ ...values, [name]: !answer }));
  };
  const handleVisaSwitcher = () => {
    setSwitchVisa(!getSwitchVisa);
  };

  const handleJobTitleSelector = (selectedJobTitle) => {
    setJobTitleSelector({ selectedJobTitle });
  };
  const handleLocationSelector = (selectedLocation) => {
    setLocationSelector({ selectedLocation });
  };

  const handleCurrencySelector = (selectedCurrency) => {
    setCurrency(selectedCurrency);
  };

  const [value, setValue] = useState([20, 37]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="flex  items-center justify-center bg-blue-700 ">
      <div class="relative bg-gray-50 pt-12 pb-12 md:pb-24 lg:pt-20">
        <div class="container mx-auto px-4">
          <div class="-mx-4 flex flex-wrap">
            <div class="mb-12 flex w-full items-center px-4 md:mb-20 lg:mb-0 lg:w-1/2">
              <div class="w-full text-center lg:text-left">
                <div class="mx-auto max-w-md lg:mx-0">
                  <h2 class="font-heading mb-3 text-4xl font-bold lg:text-5xl">
                    <span data-config-id="header-p1">
                      Build &amp; Launch without
                    </span>
                    <span class="text-green-600" data-config-id="header-p2">
                      problems
                    </span>
                  </h2>
                </div>
                <div class="mx-auto max-w-sm lg:mx-0">
                  <p
                    class="mb-6 leading-loose text-gray-400"
                    data-config-id="desc"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Pellentesque efficitur nisl sodales egestas lobortis.
                  </p>
                  <div>
                    <a
                      class="mb-3 inline-block w-full rounded-l-xl rounded-t-xl bg-green-600 py-2 px-6 font-semibold leading-loose text-white transition duration-200 hover:bg-green-700 lg:mb-0 lg:mr-3 lg:w-auto"
                      href="/sign-in"
                      data-config-id="primary-action-hero"
                    >
                      Sign In
                    </a>
                    <a
                      class="inline-block w-full rounded-l-xl rounded-t-xl bg-white py-2 px-6 font-semibold leading-loose transition duration-200 hover:bg-gray-50 lg:w-auto"
                      href="/sign-up"
                      data-config-id="secondary-action-hero"
                    >
                      Sign Up
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex w-full items-center justify-center px-4 lg:w-1/2">
              <div class="relative" style={{ zIndex: "0" }}>
                <img
                  class="h-128 w-full max-w-lg rounded-3xl object-cover md:rounded-br-none"
                  src="https://images.unsplash.com/photo-1462826303086-329426d1aef5?ixlib=rb-1.2.1&amp;ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;auto=format&amp;fit=crop&amp;w=1050&amp;q=80"
                  alt=""
                  data-config-id="image1"
                />
                <img
                  class="absolute hidden md:block"
                  style={{ top: "-2rem", right: "3rem", zIndex: "-1" }}
                  src="https://shuffle.dev/atis-assets/elements/green-dark-up.svg"
                  alt=""
                />
                <img
                  class="absolute hidden md:block"
                  style={{ bottom: "-2rem", right: "-2rem", zIndex: "-1" }}
                  src="https://shuffle.dev/atis-assets/elements/wing-green-down.svg"
                  alt=""
                />
                <img
                  class="absolute hidden md:block"
                  style={{ top: "3rem", right: "-3rem", zIndex: "-1" }}
                  src="https://shuffle.dev/atis-assets/elements/bullets-gray-right.svg"
                  alt=""
                />
                <img
                  class="absolute hidden md:block"
                  style={{ bottom: "2.5rem", left: "-4.5rem", zIndex: "-1" }}
                  src="https://shuffle.dev/atis-assets/elements/bullets-gray-left.svg"
                  alt=""
                />
              </div>
            </div>
            <div>
              <div class=" ml-32 mt-24 h-48 bg-white px-10 lg:h-32">
                <form
                  onsubmit="return false;"
                  class="mx-auto flex h-auto max-w-lg -translate-y-12 transform flex-col items-center space-y-3 overflow-hidden rounded-lg bg-white p-6 shadow-md lg:h-24 lg:max-w-6xl lg:flex-row lg:space-y-0 lg:space-x-3"
                >
                  <div class="h-12 w-full rounded-lg border-2 border-gray-200 lg:w-auto lg:flex-1 lg:border-0">
                    <input
                      type="search"
                      class="h-full w-full rounded-lg px-4 font-medium text-gray-700 focus:bg-gray-50 focus:outline-none sm:text-lg"
                      placeholder="What Are You Searching For?"
                    />
                  </div>
                  <div class="hidden h-10 w-0.5 bg-gray-100 lg:block"></div>
                  <div class="relative flex h-12 w-full items-center rounded-lg border-2 border-gray-200 lg:w-auto lg:flex-1 lg:border-0">
                    <input
                      type="search"
                      class="h-full w-full rounded-lg px-4 font-medium text-gray-700 focus:bg-gray-50 focus:outline-none sm:text-lg"
                      placeholder="Location?"
                    />
                    <svg
                      class="absolute right-0 mr-4 h-6 w-6 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      ></path>
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
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
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
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
                  <div class="h-full w-full lg:w-auto">
                    <button
                      type="submit"
                      class="whitespace-no-wrap inline-flex h-full w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium leading-6 text-white shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 lg:w-64"
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
              <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden outline-none focus:outline-none">
                <div className="relative my-6 mx-auto w-auto max-w-2xl">
                  {/*content*/}
                  <div className="relative flex w-full flex-col rounded-lg border-0 bg-white shadow-lg outline-none focus:outline-none">
                    {/*header*/}
                    <div className="flex items-start justify-between rounded-t border-b border-solid border-slate-200 p-5 px-44">
                      <h3 className="text-3xl font-semibold">Modal Title</h3>
                      <button
                        className="float-right ml-auto border-0 bg-transparent p-1 text-3xl font-semibold leading-none text-black opacity-5 outline-none focus:outline-none"
                        onClick={() => setToggleFilter(false)}
                      >
                        <span className="block h-6 w-6 bg-transparent text-2xl text-black opacity-5 outline-none focus:outline-none">
                          ×
                        </span>
                      </button>
                    </div>
                    {/*body*/}
                    <div className="relative flex-auto p-6">
                      <Select
                        isMulti
                        name="jobTitle"
                        value={getJobTitleSelector.selectedJobTitle}
                        onChange={handleJobTitleSelector}
                        options={JobTitleOptions}
                        className="basic-multi-select w-full"
                        classNamePrefix="select"
                      />
                    </div>
                    <div className="px-6">
                      <Select
                        isMulti
                        name="location"
                        value={getLocationSelector.selectedLocation}
                        onChange={handleLocationSelector}
                        options={LocationOptions}
                        className="basic-multi-select w-full"
                        classNamePrefix="select"
                      />
                    </div>
                    <div className="px-6">
                      <div className="my-4 flex flex-row space-x-5">
                        <h1>
                          {getCurrency.value} {value[0]}K
                        </h1>
                        <h1>
                          {getCurrency.value} {value[1]}K
                        </h1>
                      </div>
                      <div className="ml-4">
                        <AirbnbSlider
                          value={value}
                          onChange={handleChange}
                          slots={{ thumb: AirbnbThumbComponent }}
                          getAriaLabel={(index) =>
                            index === 0 ? "Minimum price" : "Maximum price"
                          }
                          min={0}
                          max={200}
                          defaultValue={[20, 40]}
                          disableSwap
                        />
                      </div>
                      <div className="">
                        <Select
                          name="currency"
                          value={getCurrency}
                          onChange={handleCurrencySelector}
                          options={CurrencyOptions}
                          defaultValue={CurrencyOptions[0]}
                          className="basic-single "
                          classNamePrefix="select"
                        />
                      </div>
                    </div>
                    <div className="space-y-2 px-8 py-4">
                      <div className="font-bold">Job Types</div>
                      <div>
                        <div className="flex flex-row space-x-2">
                          <input
                            name="fulltime"
                            type="checkbox"
                            checked={checked.fulltime}
                            onChange={handleCheckbox}
                          />
                          <label>Full Time</label>
                        </div>
                        <div className="flex flex-row space-x-2">
                          <input
                            name="contract"
                            type="checkbox"
                            checked={checked.contract}
                            onChange={handleCheckbox}
                          />
                          <label>Contract</label>
                        </div>
                        <div className="flex flex-row space-x-2">
                          <input
                            name="internship"
                            type="checkbox"
                            checked={checked.internship}
                            onChange={handleCheckbox}
                          />
                          <label>Internship</label>
                        </div>
                        <div className="flex flex-row space-x-2">
                          <input
                            name="cofounder"
                            type="checkbox"
                            checked={checked.cofounder}
                            onChange={handleCheckbox}
                          />
                          <label>Cofounder</label>
                        </div>
                        <div className="flex flex-row space-x-2">
                          <input
                            name="newgrad"
                            type="checkbox"
                            checked={checked.newgrad}
                            onChange={handleCheckbox}
                          />
                          <label>New Grad</label>
                        </div>
                      </div>
                    </div>
                    <div className="px-8">
                      <label class="relative inline-flex cursor-pointer items-center">
                        <input
                          type="checkbox"
                          value={getSwitchVisa}
                          onChange={handleVisaSwitcher}
                          class="peer sr-only"
                        />
                        <div class="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-blue-800"></div>
                        <span class="ml-3 text-sm font-medium text-gray-900 ">
                          Only show companies that can sponsor a visa
                        </span>
                      </label>
                    </div>
                    <div>
                      <DatePicker
                        selectsRange={true}
                        startDate={startDate}
                        endDate={endDate}
                        dateFormat="dd/MM/yyyy"
                        className="red-border ho rounded-full border border-red-800 px-4 py-2 items-center justify-center"
                        placeholderText="Date Posted"
                        fixedHeight
                        onChange={(update) => {
                          setDateRange(update);
                        }}
                        withPortal
                      />
                    </div>
                    {/*footer*/}
                    <div className="flex items-center justify-end rounded-b border-t border-solid border-slate-200 p-6">
                      <button
                        className="background-transparent mr-1 mb-1 px-6 py-2 text-sm font-bold uppercase text-red-500 outline-none transition-all duration-150 ease-linear focus:outline-none"
                        type="button"
                        onClick={() => setToggleFilter(false)}
                      >
                        Close
                      </button>
                      <button
                        className="mr-1 mb-1 rounded bg-emerald-500 px-6 py-3 text-sm font-bold uppercase text-white shadow outline-none transition-all duration-150 ease-linear hover:shadow-lg focus:outline-none active:bg-emerald-600"
                        type="button"
                        onClick={() => setToggleFilter(false)}
                      >
                        Save Changes
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Home;
