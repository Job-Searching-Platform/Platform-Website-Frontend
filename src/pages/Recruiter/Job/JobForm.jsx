import { useState } from "react";
import { useDispatch } from "react-redux";
import { addJob } from "../../../store/features/editJobSlice";
import Request from "../../../utils/API-routers";

const JobForm = () => {
  const dispatch = useDispatch();
  const [getJob, setJob] = useState({
    profile: "",
    company: "",
    description: "",
    title: "",
    startDate: "",
    endDate: "",
    tags: [],
  });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setJob((prev) => ({ ...prev, [name]: value }));
  };

  const todoAddHandler = (e) => {
    e.preventDefault();
    Request.createRecruiterJobCompany(getJob)
      .then((res) => {
        dispatch(
          addJob({
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
    setJob("");
  };

  const cancelAddHandler = () => {
    setJob("");
  };

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
          value={getJob.company}
          onChange={onChangeHandler}
          name="company"
          autoFocus
        />
        <input
          className="mb-3 w-full border-0 p-0 pl-1 font-light text-black placeholder-gray-400 focus:ring-0"
          type="text"
          placeholder="Full stack web developer"
          value={getJob.title}
          onChange={onChangeHandler}
          name="title"
          autoFocus
        />
        <input
          className="mb-3 w-full border-0 p-0 pl-1 font-light text-black placeholder-gray-400 focus:ring-0"
          type="text"
          placeholder="2022-06-01T00:00:00.000Z"
          value={getJob.startDate}
          onChange={onChangeHandler}
          name="startDate"
          autoFocus
        />
        <input
          className="mb-3 w-full border-0 p-0 pl-1 font-light text-black placeholder-gray-400 focus:ring-0"
          type="text"
          placeholder="2023-01-05T00:00:00.000Z"
          value={getJob.endDate}
          onChange={onChangeHandler}
          name="endDate"
          autoFocus
        />
        <input
          className="mb-3 w-full border-0 p-0 pl-1 font-light text-black placeholder-gray-400 focus:ring-0"
          type="text"
          placeholder="Junior, B's of Science degree in Computer Science, Full Stack Deep Learning Engineer, Luanched AI powered Web application, worked as  DL Engineer in Tajrupt."
          value={getJob.description}
          onChange={onChangeHandler}
          name="description"
          autoFocus
        />
        <input
          className="mb-3 w-full border-0 p-0 pl-1 font-light text-black placeholder-gray-400 focus:ring-0"
          type="text"
          placeholder="MERN Javascript MongoDB"
          value={getJob.tags}
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
};

export default JobForm;
