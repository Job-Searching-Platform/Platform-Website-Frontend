import { useDispatch } from "react-redux";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import {
  editExperience,
  deleteExperience,
} from "../../../store/features/UserProfileSlice";
import Request from "../../../utils/API-routers";

const ExperienceList = ({ experience, setAddExperienceButton }) => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const name = pathname.split("/")[1].toLocaleLowerCase();
  const path = name === "recruiter" ? "recruiter" : "users";

  const [getEditExperience, setEditExperience] = useState(false);
  const [getExperience, setExperience] = useState(experience);

  const EditItemHandler = () => {
    setEditExperience(true);
    setAddExperienceButton(false);
  };
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setExperience((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    setEditExperience(false);
    Request.editEduExperienceProfile(
      path,
      "myExperience",
      getExperience._id,
      getExperience
    )
      .then((res) => {
        console.log(res);
        dispatch(
          editExperience({
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
        if (error.response?.data.error.code === 11000) {
        }
      });
  };
  const DeleteTodoItemHandler = () => {
    Request.deleteEduExperienceProfile(path, "myExperience", getExperience._id)
      .then((res) => {
        console.log(res);
        dispatch(
          deleteExperience({
            _id: getExperience._id,
          })
        );
      })
      .catch((error) => {
        if (error.response?.data.error.code === 11000) {
        }
      });
  };

  if (getEditExperience) {
    return (
      <div className="group flex flex-col py-2">
        <form
          onSubmit={onSubmitHandler}
          className="relative w-full overflow-visible rounded border border-gray-400 p-2"
        >
          {/* TODO: ADD ALL THE EXPERIENCE FIELDS */}
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
            onClick={onSubmitHandler}
            className="mr-3 rounded border bg-red-400 px-5 py-2 text-white transition-all duration-100 hover:border-red-400 hover:bg-white hover:text-red-400"
          >
            Save
          </button>
          <button
            onClick={() => setEditExperience(false)}
            className="cursor-pointer hover:underline"
          >
            Cancel
          </button>
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex cursor-pointer items-center justify-between border-b py-2">
        <div className="flex flex-row items-center space-x-4">
          <span>{experience.company}</span>
          <span>{experience.title}</span>
          <span>{experience.startDate}</span>
          <span>{experience.endDate}</span>
          <span>{experience.description}</span>
          <span>{experience.tags[0]}</span>
        </div>
        <div className="flex">
          <button
            onClick={EditItemHandler}
            className="flex h-8 w-8 items-center justify-center rounded text-xl transition-all duration-100 hover:bg-gray-100"
          >
            <ion-icon name="create-outline"></ion-icon>
          </button>
          <button
            onClick={DeleteTodoItemHandler}
            className="flex h-8 w-8 items-center justify-center rounded text-lg transition-all duration-100 hover:bg-red-300 hover:text-white"
          >
            <ion-icon name="trash-outline"></ion-icon>
          </button>
        </div>
      </div>
    );
  }
};

export default ExperienceList;
