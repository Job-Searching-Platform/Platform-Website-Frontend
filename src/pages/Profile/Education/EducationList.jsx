import { useDispatch } from "react-redux";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import {
  editEducation,
  deleteEducation,
} from "../../../store/features/editUserProfileSlice";
import {
  deleteEducationRecruiter,
  editEducationRecruiter,
} from "../../../store/features/editRecruiterProfileSlice";
import Request from "../../../utils/API-routers";

const EducationList = ({ education, setAddEducationButton }) => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const name = pathname.split("/")[1].toLocaleLowerCase();
  const path = name === "recruiter" ? "recruiters" : "users";

  const [getEditEducation, setEditEducation] = useState(false);
  const [getEducation, setEducation] = useState(education);

  const EditItemHandler = () => {
    setEditEducation(true);
    setAddEducationButton(false);
  };
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setEducation((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    setEditEducation(false);
    Request.editEduExperienceProfile(
      path,
      "myEducation",
      getEducation._id,
      getEducation
    )
      .then((res) => {
        console.log(res);
        dispatch(
          name === "recruiter"
            ? editEducationRecruiter({
                profile: res.data.doc.profile,
                school: res.data.doc.school,
                graduation: res.data.doc.graduation,
                degree: res.data.doc.degree,
                major: res.data.doc.major,
                GPA: res.data.doc.GPA,
                _id: res.data.doc._id,
              })
            : editEducation({
                profile: res.data.doc.profile,
                school: res.data.doc.school,
                graduation: res.data.doc.graduation,
                degree: res.data.doc.degree,
                major: res.data.doc.major,
                GPA: res.data.doc.GPA,
                _id: res.data.doc._id,
              })
        );
      })
      .catch((error) => {
        if (error.response?.data.error.code === 11000) {
        }
      });
  };
  // TODO: after editing and sending and getting answer back, edited data is not displayed
  const DeleteTodoItemHandler = () => {
    Request.deleteEduExperienceProfile(path, "myEducation", getEducation._id)
      .then((res) => {
        console.log(res);
        dispatch(
          name === "recruiter"
            ? deleteEducationRecruiter({
                _id: getEducation._id,
              })
            : deleteEducation({
                _id: getEducation._id,
              })
        );
      })
      .catch((error) => {
        if (error.response?.data.error.code === 11000) {
        }
      });
  };

  if (getEditEducation) {
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
            placeholder="UCA"
            value={getEducation.school}
            onChange={onChangeHandler}
            name="school"
            autoFocus
          />
          <input
            className="mb-3 w-full border-0 p-0 pl-1 font-light text-black placeholder-gray-400 focus:ring-0"
            type="text"
            placeholder="Bachelors"
            value={getEducation.degree}
            onChange={onChangeHandler}
            name="degree"
            autoFocus
          />
          <input
            className="mb-3 w-full border-0 p-0 pl-1 font-light text-black placeholder-gray-400 focus:ring-0"
            type="text"
            placeholder="2022-06-01T00:00:00.000Z"
            value={getEducation.graduation}
            onChange={onChangeHandler}
            name="graduation"
            autoFocus
          />
          <input
            className="mb-3 w-full border-0 p-0 pl-1 font-light text-black placeholder-gray-400 focus:ring-0"
            type="text"
            placeholder="CS"
            value={getEducation.major}
            onChange={onChangeHandler}
            name="major"
            autoFocus
          />

          <input
            className="mb-3 w-full border-0 p-0 pl-1 font-light text-black placeholder-gray-400 focus:ring-0"
            type="text"
            placeholder="3.4"
            value={getEducation.GPA}
            onChange={onChangeHandler}
            name="GPA"
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
            onClick={() => setEditEducation(false)}
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
          <span>{education.school}</span>
          <span>{education.graduation}</span>
          <span>{education.degree}</span>
          <span>{education.GPA}</span>
          <span>{education.major[0]}</span>
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

export default EducationList;
