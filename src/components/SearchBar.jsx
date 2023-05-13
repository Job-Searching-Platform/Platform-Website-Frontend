import { useState } from "react";

import Switch from "./Switch";
import Checkbox from "./CheckBox";
import DateRange from "./DateRange";
import SliderRange from "./SliderRange";
import Selector from "./Selector";

import {
  JobTitleOptions,
  LocationOptions,
  CurrencyOptions,
} from "./../data/JobTitle";

export const SearchModal = ({ setToggleFilter }) => {
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;

  const [getSwitchVisa, setSwitchVisa] = useState(true);
  const [getCurrency, setCurrency] = useState(CurrencyOptions[0]);
  const [getJobTitleSelector, setJobTitleSelector] = useState({
    selectedJobTitle: [],
  });
  const [getLocationSelector, setLocationSelector] = useState([]);
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

  const [getSlider, setSlider] = useState([20, 37]);

  const handleSlider = (event, newSlider) => {
    setSlider(newSlider);
  };
  return (
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
              <Selector
                name="jobTitle"
                className="basic-multi-select"
                options={JobTitleOptions}
                isMulti={true}
                value={getJobTitleSelector.selectedJobTitle}
                onChange={handleJobTitleSelector}
              />
            </div>
            <div className="px-6">
              <Selector
                name="location"
                className="basic-multi-select"
                options={LocationOptions}
                isMulti={true}
                value={getLocationSelector.selectedLocation}
                onChange={handleLocationSelector}
              />
            </div>
            <div className="px-6">
              <div className="my-4 flex flex-row space-x-5">
                <h1>
                  {getCurrency.value} {getSlider[0]}K
                </h1>
                <h1>
                  {getCurrency.value} {getSlider[1]}K
                </h1>
              </div>
              <div className="ml-4">
                <SliderRange value={getSlider} onChange={handleSlider} />
              </div>
              <div className="">
                <Selector
                  name="currency"
                  className="basic-single"
                  options={CurrencyOptions}
                  value={getCurrency}
                  onChange={handleCurrencySelector}
                  defaultValue={CurrencyOptions[0]}
                />
              </div>
            </div>
            <div className="space-y-2 px-8 py-4">
              <div className="font-bold">Job Types</div>
              <div>
                <div className="flex flex-row space-x-2">
                  <Checkbox
                    value={checked.fulltime}
                    onChange={handleCheckbox}
                    label="Full Time"
                    name="fulltime"
                  />
                </div>
                <div className="flex flex-row space-x-2">
                  <Checkbox
                    value={checked.contract}
                    onChange={handleCheckbox}
                    label="Contract"
                    name="contract"
                  />
                </div>
                <div className="flex flex-row space-x-2">
                  <Checkbox
                    value={checked.internship}
                    onChange={handleCheckbox}
                    label="Internship"
                    name="internship"
                  />
                </div>
                <div className="flex flex-row space-x-2">
                  <Checkbox
                    value={checked.cofounder}
                    onChange={handleCheckbox}
                    label="Cofounder"
                    name="cofounder"
                  />
                </div>
                <div className="flex flex-row space-x-2">
                  <Checkbox
                    value={checked.newgrad}
                    onChange={handleCheckbox}
                    name="newgrad"
                    label="New Grad"
                  />
                </div>
              </div>
            </div>
            <div className="px-8">
              <Switch
                value={getSwitchVisa}
                onChange={handleVisaSwitcher}
                label="Only show companies that can sponsor a visa"
              />
            </div>
            <div>
              <DateRange
                startDate={startDate}
                endDate={endDate}
                setDateRange={setDateRange}
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
  );
};

export const SearchBar = () => {
  return <div>SearchBar</div>;
};

export const JobFilterBar = () => {
  return (
    <>
      <div className="flex flex-row space-x-2">Job Filter Bar in Sidebar</div>
    </>
  );
};

export const CompanyFilterBar = () => {
  return (
    <>
      <div className="flex flex-row space-x-2">Job Filter Bar in Sidebar</div>
    </>
  );
};

export const CandidateFilterBar = () => {
  return (
    <>
      <div className="flex flex-row space-x-2">Job Filter Bar in Sidebar</div>
    </>
  );
};
