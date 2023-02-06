import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { addEducation } from "../../../store/features/editUserProfileSlice";
import { addEducationRecruiter } from "../../../store/features/editRecruiterProfileSlice";
import Request from "../../../utils/API-routers";

const EducationAdd = ({ setAddEducationButton, getAddEducationButton }) => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const name = pathname.split("/")[1].toLocaleLowerCase();

  const _id = useSelector((state) => state.UserProfile._id);
  const _idRecruiter = useSelector((state) => state.RecruiterProfile._id);
  const get_id = name === "recruiter" ? _idRecruiter : _id;
  const path = name === "recruiter" ? "recruiters" : "users";
  const [getEducation, setEducation] = useState({
    profile: get_id,
    school: "",
    degree: "",
    graduation: "",
    GPA: "",
    major: [],
  });
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setEducation((prev) => ({ ...prev, [name]: value }));
    // setEducation((prev) => ({ ...prev, getEducation.profile: "63b66643c94fdc51466b4e5a" }));
    // setEducation({ ...getEducation, profile: "63b66643c94fdc51466b4e5a" });
  };

  const todoAddHandler = (e) => {
    e.preventDefault();
    // FIXME:  after adding one education second one does not contain profile and error gives
    Request.createEduExperienceProfile(path, "myEducation", getEducation)
      .then((res) => {
        dispatch(
          name === "recruiter"
            ? addEducationRecruiter({
                profile: res.data.doc.profile,
                school: res.data.doc.school,
                degree: res.data.doc.degree,
                major: res.data.doc.major,
                graduation: res.data.doc.graduation,
                GPA: res.data.doc.GPA,
                _id: res.data.doc._id,
              })
            : addEducation({
                profile: res.data.doc.profile,
                school: res.data.doc.school,
                degree: res.data.doc.degree,
                major: res.data.doc.major,
                graduation: res.data.doc.graduation,
                GPA: res.data.doc.GPA,
                _id: res.data.doc._id,
              })
        );
      })
      .catch((error) => {
        if (error.response?.data.error.code === 11000) {
        }
      });
    setEducation("");
    setAddEducationButton(false);
  };

  // cancel button on empty create experiece/work form closes
  const cancelAddHandler = () => {
    setAddEducationButton(false);
    setEducation("");
  };

  // open "+ Add work education" if the form is not open
  if (getAddEducationButton === false) {
    return (
      <div
        onClick={() => {
          setAddEducationButton(true); //this opens empty form
        }}
        className="group flex cursor-pointer items-center py-2"
      >
        <span className="mr-2 flex h-8 w-8 items-center justify-center rounded text-xl transition-all duration-100 group-hover:bg-red-300 group-hover:text-white">
          <ion-icon name="add-outline"></ion-icon>
        </span>
        <span className="font-light text-gray-400">+ Add work education</span>
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
            placeholder="UCA"
            value={getEducation.school}
            onChange={onChangeHandler}
            name="school"
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
            placeholder="3.5"
            value={getEducation.GPA}
            onChange={onChangeHandler}
            name="GPA"
            autoFocus
          />
          <input
            className="mb-3 w-full border-0 p-0 pl-1 font-light text-black placeholder-gray-400 focus:ring-0"
            type="text"
            placeholder="B's of Science degree"
            value={getEducation.degree}
            onChange={onChangeHandler}
            name="degree"
            autoFocus
          />
          <input
            className="mb-3 w-full border-0 p-0 pl-1 font-light text-black placeholder-gray-400 focus:ring-0"
            type="text"
            placeholder="MongoDB"
            value={getEducation.major}
            onChange={onChangeHandler}
            name="major"
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

export default EducationAdd;
