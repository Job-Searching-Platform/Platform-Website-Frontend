// import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { addExperience } from "../../../store/features/editUserProfileSlice";

import Request from "../../../utils/API-routers";

const ExperienceAdd = ({ setAddExperienceButton, getAddExperienceButton }) => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const name = pathname.split("/")[1].toLocaleLowerCase();
  const path = name === "recruiter" ? "recruiter" : "users";
  const [getExperience, setExperience] = useState({
    profile: "63b66643c94fdc51466b4e5a",
    company: "",
    description: "",
    title: "",
    startDate: "",
    endDate: "",
    tags: [],
  });
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setExperience((prev) => ({ ...prev, [name]: value }));
    // setExperience((prev) => ({ ...prev, getExperience.profile: "63b66643c94fdc51466b4e5a" }));
    // setExperience({ ...getExperience, profile: "63b66643c94fdc51466b4e5a" });
  };

  const todoAddHandler = (e) => {
    e.preventDefault();
    // FIXME:  after adding one experience second one does not contain profile and error gives
    Request.createEduExperienceProfile(path, "myExperience", getExperience)
      .then((res) => {
        dispatch(
          addExperience({
            profile: res.data.doc.profile,
            company: res.data.doc.company,
            description: res.data.doc.description,
            title: res.data.doc.title,
            startDate: res.data.doc.startDate,
            endDate: res.data.doc.endDate,
            tags: res.data.doc.tags,
            _id: res.data.doc._id,
          })
        );
      })
      .catch((error) => {
        console.log(error);
        if (error.response?.data.error.code === 11000) {
        }
      });
    setExperience("");
    setAddExperienceButton(false);
  };

  // cancel button on empty create experiece/work form closes
  const cancelAddHandler = () => {
    setAddExperienceButton(false);
    setExperience("");
  };

  // open "+ Add work experience" if the form is not open
  if (getAddExperienceButton === false) {
    return (
      <div
        onClick={() => {
          setAddExperienceButton(true); //this opens empty form
        }}
        className="group flex cursor-pointer items-center py-2"
      >
        <span className="mr-2 flex h-8 w-8 items-center justify-center rounded text-xl transition-all duration-100 group-hover:bg-red-300 group-hover:text-white">
          <ion-icon name="add-outline"></ion-icon>
        </span>
        <span className="font-light text-gray-400">+ Add work experience</span>
      </div>
    );
  } else {
    return (
      <div className="group flex flex-col py-2">
        <form
          onSubmit={todoAddHandler}
          className="relative w-full overflow-visible rounded border border-gray-400 p-2"
        >
          <input
            className="mb-3 w-full border-0 p-0 pl-1 font-light text-black placeholder-gray-400 focus:ring-0"
            type="text"
            placeholder="Epam"
            value={getExperience.company}
            onChange={onChangeHandler}
            name="company"
            autoFocus
          />
          <input
            className="mb-3 w-full border-0 p-0 pl-1 font-light text-black placeholder-gray-400 focus:ring-0"
            type="text"
            placeholder="Full stack web developer"
            value={getExperience.title}
            onChange={onChangeHandler}
            name="title"
            autoFocus
          />
          <input
            className="mb-3 w-full border-0 p-0 pl-1 font-light text-black placeholder-gray-400 focus:ring-0"
            type="text"
            placeholder="2022-06-01T00:00:00.000Z"
            value={getExperience.startDate}
            onChange={onChangeHandler}
            name="startDate"
            autoFocus
          />
          <input
            className="mb-3 w-full border-0 p-0 pl-1 font-light text-black placeholder-gray-400 focus:ring-0"
            type="text"
            placeholder="2023-01-05T00:00:00.000Z"
            value={getExperience.endDate}
            onChange={onChangeHandler}
            name="endDate"
            autoFocus
          />
          <input
            className="mb-3 w-full border-0 p-0 pl-1 font-light text-black placeholder-gray-400 focus:ring-0"
            type="text"
            placeholder="Junior, B's of Science degree in Computer Science, Full Stack Deep Learning Engineer, Luanched AI powered Web application, worked as  DL Engineer in Tajrupt."
            value={getExperience.description}
            onChange={onChangeHandler}
            name="description"
            autoFocus
          />
          <input
            className="mb-3 w-full border-0 p-0 pl-1 font-light text-black placeholder-gray-400 focus:ring-0"
            type="text"
            placeholder="MERN Javascript MongoDB"
            value={getExperience.tags}
            onChange={onChangeHandler}
            name="tags"
            autoFocus
          />
        </form>
        <div className="mt-3 flex items-center">
          <button
            onClick={cancelAddHandler}
            className="cursor-pointer hover:underline"
          >
            Cancel
          </button>
          <button
            onClick={todoAddHandler}
            className="ml-3 rounded border bg-red-400 px-5 py-2 text-white transition-all duration-100 hover:border-red-400 hover:bg-white hover:text-red-400"
          >
            Save
          </button>
        </div>
      </div>
    );
  }
};

export default ExperienceAdd;
