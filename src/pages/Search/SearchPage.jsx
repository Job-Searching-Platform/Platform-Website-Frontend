import React, { useState } from "react";
import { JobCard } from "../../components/Card";
import { JobFilterBar, SearchBar } from "../../components/SearchBar";

const SearchPage = () => {
  const [getSearch, setSearch] = useState("");
  return (
    <>
      <SearchBar />
      <JobFilterBar />
      <div>
        {getSearch.map((jobElement, index) => (
          <JobCard key={index} jobElement={jobElement} />
        ))}
      </div>
    </>
  );
};

export default SearchPage;
