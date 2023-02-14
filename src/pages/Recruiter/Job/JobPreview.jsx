import { useDispatch } from "react-redux";
import { useState } from "react";
import { editJob, deleteJob } from "../../../store/features/editJobSlice";
import Request from "../../../utils/API-routers";
import { useLocation } from "react-router-dom";
const JobPreview = ({ jobElement }) => {
  const dispatch = useDispatch();

  const { state } = useLocation();

  const [getEditJob, setEditJob] = useState(false);
  const [getJob, setJob] = useState(jobElement);

  const EditItemHandler = () => {
    setEditJob(true);
  };
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setJob((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    setEditJob(false);
    // Request.editEduExperienceProfile(getJob._id, getJob)
    //   .then((res) => {
    //     console.log(res);
    //     dispatch(
    //       editJob({
    //         profile: res.data.doc.profile,
    //         company: res.data.doc.company,
    //         description: res.data.doc.description,
    //         title: res.data.doc.title,
    //         startDate: res.data.doc.startDate,
    //         endDate: res.data.doc.endDate,
    //         tags: res.data.doc.tags,
    //         _id: res.data.doc._id,
    //       })
    //     );
    //   })
    //   .catch((error) => {
    //     if (error.response?.data.error.code === 11000) {
    //     }
    //   });
  };
  const DeleteTodoItemHandler = () => {
    Request.deleteEduExperienceProfile(getJob._id)
      .then((res) => {
        console.log(res);
        dispatch(
          deleteJob({
            _id: getJob._id,
          })
        );
      })
      .catch((error) => {
        if (error.response?.data.error.code === 11000) {
        }
      });
  };

  if (getEditJob) {
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
        {/* <div className="mt-3 flex items-center">
          <button
            onClick={onSubmitHandler}
            className="mr-3 rounded border bg-red-400 px-5 py-2 text-white transition-all duration-100 hover:border-red-400 hover:bg-white hover:text-red-400"
          >
            Save
          </button>
          <button
            onClick={() => setEditJob(false)}
            className="cursor-pointer hover:underline"
          >
            Cancel
          </button>
        </div> */}
      </div>
    );
  } else {
    return (
      <div class="container mx-auto px-5 pt-6 sm:px-10">
        <div class="flex flex-wrap">
          <div class="w-full pb-6 md:w-1/4 md:pb-0 md:pr-6 ">
            <div class="rounded ">
              <div class="flex items-center justify-between border-b border-gray-200 bg-white ">
                <p class="py-4 pl-5 text-base font-bold leading-3 tracking-normal text-gray-800 ">
                  Filter Jobs
                </p>
              </div>
              <ul class="bg-white shadow ">
                <li class="cursor-pointer border-b border-gray-200 bg-blue-600 py-4 px-5 text-sm font-normal leading-3 tracking-normal text-white hover:bg-blue-400 ">
                  Browse all jobs
                </li>
                <li class="cursor-pointer border-b border-gray-200 py-4 px-5 text-sm font-normal leading-3 tracking-normal text-gray-600 hover:bg-blue-400 hover:text-white ">
                  By my network
                </li>
                <li class="cursor-pointer border-b border-gray-200 py-4 px-5 text-sm font-normal leading-3 tracking-normal text-gray-600 hover:bg-blue-400 hover:text-white ">
                  Favourites
                </li>
                <li class="cursor-pointer border-b border-gray-200 py-4 px-5 text-sm font-normal leading-3 tracking-normal text-gray-600 hover:bg-blue-400 hover:text-white ">
                  Interested
                </li>
                <li class="cursor-pointer border-b border-gray-200 py-4 px-5 text-sm font-normal leading-3 tracking-normal text-gray-600 hover:bg-blue-400 hover:text-white ">
                  Applied to
                </li>
                <li class="cursor-pointer border-b border-gray-200 py-4 px-5 text-sm font-normal leading-3 tracking-normal text-gray-600 hover:bg-blue-400 hover:text-white ">
                  Archived
                </li>
              </ul>
            </div>
          </div>
          <div class="w-full md:w-3/4 ">
            <div class="rounded bg-white shadow ">
              <div class="relative ">
                <img
                  class="h-56 w-full rounded-t object-cover object-center shadow "
                  src="https://tuk-cdn.s3.amazonaws.com/assets/templates/Job-Portal/jp_24.png "
                  alt=" "
                />
                <div class="absolute inset-0 bottom-0 m-auto -mb-12 h-24 w-24 rounded border-2 border-white shadow xl:ml-10 ">
                  <img
                    class="h-full w-full overflow-hidden object-cover "
                    src="https://tuk-cdn.s3.amazonaws.com/assets/templates/Job-Portal/jp_8.png "
                    alt=" "
                  />
                </div>
              </div>
              <div class="px-5 pb-10 xl:px-10 ">
                <div class="flex flex-col items-start justify-between pt-3 xl:flex-row xl:items-center xl:pt-5 ">
                  <div class="mb-3 items-center justify-between text-left xl:mb-0 xl:justify-start xl:text-left ">
                    <h2 class="mt-10 text-lg tracking-normal text-gray-800 ">
                      The Cannabis Company
                    </h2>
                    <p class="text-sm text-gray-600 ">Cannabis done right!</p>
                    <p class="text-sm text-gray-600 ">{state.location}</p>
                  </div>
                  <div class="flex items-start justify-center ">
                    <p class="text-sm text-gray-800 ">
                      Posted on:{" "}
                      <span class="font-semibold ">
                        {state.postedDate.split("T")[0]}
                      </span>
                    </p>
                  </div>
                  <div class="flex flex-col justify-center md:flex-row xl:justify-end ">
                    <p class="text-sm text-gray-800 ">
                      Category:{" "}
                      <span class="cursor-pointer font-semibold text-blue-600 underline ">
                        Design
                      </span>
                      ,{" "}
                      <span
                        class="cursor-pointer font-semibold text-blue-600 underline
                        "
                      >
                        E-Commerce
                      </span>
                      ,{" "}
                      <span class="cursor-pointer font-semibold text-blue-600 underline ">
                        Cannabis
                      </span>
                    </p>
                  </div>
                </div>

                <div class="mt-4 items-center justify-between lg:flex ">
                  <div class="flex-no-wrap flex items-center ">
                    <div class="h-6 w-6 rounded-md bg-cover bg-center ">
                      <img
                        src="https://dh-ui.s3.amazonaws.com/assets/boy-smiling_23-2148155640.jpg "
                        alt=" "
                        class="h-full w-full overflow-hidden rounded-full border-2 border-white object-cover shadow "
                      />
                    </div>
                    <div class="-ml-2 h-6 w-6 rounded-md bg-cover ">
                      <img
                        src="https://dh-ui.s3.amazonaws.com/assets/photo-1564061170517-d3907caa96ea.jfif "
                        alt=" "
                        class="h-full w-full overflow-hidden rounded-full border-2 border-white object-cover shadow "
                      />
                    </div>
                    <div class="-ml-2 h-6 w-6 rounded-md bg-cover bg-center ">
                      <img
                        src="https://dh-ui.s3.amazonaws.com/assets/photo-1566753323558-f4e0952af115.jfif "
                        alt=" "
                        class="h-full w-full overflow-hidden rounded-full border-2 border-white object-cover shadow "
                      />
                    </div>
                    <div class="-ml-2 h-6 w-6 rounded-md bg-cover ">
                      <img
                        src="https://dh-ui.s3.amazonaws.com/assets/webapp/ui_elements/avatars/avatar4.jpg "
                        alt=" "
                        class="h-full w-full overflow-hidden rounded-full border-2 border-white object-cover object-center shadow "
                      />
                    </div>
                    <div class="-ml-2 h-6 w-6 rounded-md bg-cover ">
                      <img
                        src="https://dh-ui.s3.amazonaws.com/assets/photo-1575978108872-9b1429a19a0f.jfif "
                        alt=" "
                        class="h-full w-full overflow-hidden rounded-full border-2 border-white object-cover object-center shadow "
                      />
                    </div>
                    <p class="ml-2 text-sm text-gray-600 ">
                      5 people from your circle work here
                    </p>
                  </div>
                  <div class="mt-2 sm:mt-2 lg:mt-0 ">
                    <button class="mr-3 rounded bg-gray-100 px-5 py-2 text-sm text-blue-500 transition duration-150 ease-in-out hover:bg-gray-300 focus:outline-none ">
                      Back
                    </button>
                    <button class="rounded bg-blue-600 px-8 py-2 text-sm text-white transition duration-150 ease-in-out hover:bg-blue-700 focus:outline-none ">
                      Apply to job
                    </button>
                  </div>
                </div>
                <div class="mt-6 rounded border border-gray-300 bg-gray-100 text-center lg:flex lg:text-left ">
                  <div class="border-b border-gray-300 p-4 lg:w-1/4 lg:border-r ">
                    <p class="text-gray-600 ">Experience</p>
                    <p class="font-bold text-blue-500 ">
                      More than {state.experience} years
                    </p>
                  </div>
                  <div class="border-b border-gray-300 p-4 lg:w-1/4 lg:border-r ">
                    <p class="text-gray-600 ">Work</p>
                    <p class="font-bold text-blue-500 ">
                      {state.remote === false
                        ? "On-Site"
                        : "On-Site and Remote"}{" "}
                    </p>
                  </div>
                  <div class="border-b border-gray-300 p-4 lg:w-1/4 lg:border-r ">
                    <p class="text-gray-600 ">Employee Type</p>
                    <p class="font-bold text-blue-500 ">
                      {state.jobType} Employees
                    </p>
                  </div>
                  <div class="p-4 lg:w-1/4 ">
                    <p class="text-gray-600 ">Salary Range</p>
                    <p class="font-bold text-blue-500 ">
                      ${state.salary[0]} - ${state.salary[1]}
                    </p>
                  </div>
                </div>
                <div class="mt-10 ">
                  <div class="flex flex-wrap ">
                    <div class="mb-4 w-full md:pr-8 lg:w-8/12 ">
                      <p class="text-xl font-bold ">
                        {state.candidateLevel} {state.title}
                      </p>
                      <div>
                        <p class="pt-3 pb-2 text-sm font-semibold text-gray-800 ">
                          Overview
                        </p>
                        <p class="text-sm leading-6 text-gray-800 ">
                          {state.descriptionText}
                        </p>
                        <p class="mt-2 pt-3 pb-2 text-sm font-semibold text-gray-800 ">
                          What you’ll do
                        </p>
                        <ul
                          class="pl-5 text-sm text-gray-800 "
                          style={{ listStyle: "outside" }}
                        >
                          <li>
                            Deeply understand a complex problem space and find
                            simple, powerful design solutions.
                          </li>
                          <li class="pt-2 ">
                            Explore the ideas via mockups, interactive
                            prototypes, usability testing, and written
                            documentation, ensuring that your team converges on
                            the most promising solutions.
                          </li>
                          <li class="pt-2 ">
                            Create beautiful UI designs with Figma, HTML, CSS.
                          </li>
                        </ul>
                        <p class="mt-2 pt-3 pb-2 text-sm font-semibold text-gray-800 ">
                          Who you are
                        </p>
                        <ul
                          class="pl-5 text-sm text-gray-800 "
                          style={{ listStyle: "outside" }}
                        >
                          <li>
                            You’re a UI/UX specialist who cares deeply about
                            user-centric product designs.
                          </li>
                          <li class="pt-2 ">
                            You take a thoughtful approach to decision making;
                            knowing when to move fast and when to do things
                            right.
                          </li>
                          <li class="pt-2 ">
                            You want to work in a product-driven environment.
                          </li>
                        </ul>
                        <p class="mt-2 pt-3 pb-2 text-sm font-semibold text-gray-800 ">
                          Skills at a glance
                        </p>
                        <div class="flex ">
                          <div class="mr-2 mb-4 flex h-8 w-24 items-center justify-center rounded-md bg-gray-200 md:mb-0 ">
                            <span class="text-xs font-normal text-gray-600 ">
                              UX Design
                            </span>
                          </div>
                          <div class="mr-2 mb-4 flex h-8 w-24 items-center justify-center rounded-md bg-gray-200 md:mb-0 ">
                            <span class="text-xs font-normal text-gray-600 ">
                              React JS
                            </span>
                          </div>
                          <div class="mr-2 mb-4 flex h-8 w-24 items-center justify-center rounded-md bg-gray-200 md:mb-0 ">
                            <span class="text-xs font-normal text-gray-600 ">
                              UX Design
                            </span>
                          </div>
                          <div class="mr-2 mb-4 flex h-8 w-24 items-center justify-center rounded-md bg-gray-200 md:mb-0 ">
                            <span class="text-xs font-normal text-gray-600 ">
                              React JS
                            </span>
                          </div>
                        </div>
                        <div class="mt-2 flex ">
                          <div class="mr-2 mb-4 flex h-8 w-24 items-center justify-center rounded-md bg-gray-200 md:mb-0 ">
                            <span class="text-xs font-normal text-gray-600 ">
                              UX Design
                            </span>
                          </div>
                          <div class="mr-2 mb-4 flex h-8 w-24 items-center justify-center rounded-md bg-gray-200 md:mb-0 ">
                            <span class="text-xs font-normal text-gray-600 ">
                              React JS
                            </span>
                          </div>
                          <div class="mr-2 mb-4 flex h-8 w-24 items-center justify-center rounded-md bg-gray-200 md:mb-0 ">
                            <span class="text-xs font-normal text-gray-600 ">
                              UX Design
                            </span>
                          </div>
                          <div class="mr-2 mb-4 flex h-8 w-24 items-center justify-center rounded-md bg-gray-200 md:mb-0 ">
                            <span class="text-xs font-normal text-gray-600 ">
                              React JS
                            </span>
                          </div>
                        </div>
                        <button class="mt-8 rounded bg-blue-600 px-8 py-2 text-sm text-white transition duration-150 ease-in-out hover:bg-blue-700 focus:outline-none ">
                          Apply to job
                        </button>
                      </div>
                    </div>

                    <div class="w-full lg:w-1/3 ">
                      <div class="mx-auto w-full rounded bg-gray-100 ">
                        <div class="border-b border-gray-200 p-4 ">
                          <p class="text-base font-bold ">Similar Positions</p>
                        </div>
                        <div class="flex items-center p-4 ">
                          <div class="flex items-center justify-center rounded-lg bg-gray-100 text-gray-700 ">
                            <img
                              class="h-8 w-8 rounded "
                              src="https://tuk-cdn.s3.amazonaws.com/assets/templates/Job-Portal/jp_6.png "
                              alt=" "
                            />
                          </div>
                          <div class="ml-3 ">
                            <p class="text-sm font-normal leading-5 tracking-normal text-gray-800 ">
                              Front-end Developer
                            </p>
                            <p class="text-sm font-normal leading-5 tracking-normal text-gray-500 ">
                              New York - 65k-75k
                            </p>
                          </div>
                        </div>
                        <div class="flex items-center p-4 ">
                          <div class="flex items-center justify-center rounded-lg bg-gray-100 text-gray-700 ">
                            <img
                              class="h-8 w-8 rounded "
                              src="https://tuk-cdn.s3.amazonaws.com/assets/templates/Job-Portal/jp_7.png "
                              alt=" "
                            />
                          </div>
                          <div class="ml-3 ">
                            <p class="text-sm font-normal leading-5 tracking-normal text-gray-800 ">
                              Front-end Engineer
                            </p>
                            <p class="text-sm font-normal leading-5 tracking-normal text-gray-500 ">
                              Seattle - 65k-75k
                            </p>
                          </div>
                        </div>
                        <div class="flex items-center p-4 ">
                          <div class="flex items-center justify-center rounded-lg bg-gray-100 text-gray-700 ">
                            <img
                              class="h-8 w-8 rounded "
                              src="https://tuk-cdn.s3.amazonaws.com/assets/templates/Job-Portal/jp_6.png "
                              alt=" "
                            />
                          </div>
                          <div class="ml-3 ">
                            <p class="text-sm font-normal leading-5 tracking-normal text-gray-800 ">
                              JS Expert
                            </p>
                            <p class="text-sm font-normal leading-5 tracking-normal text-gray-500 ">
                              Las Vegas - 65k-75k
                            </p>
                          </div>
                        </div>
                        <div class="flex items-center p-4 ">
                          <div class="flex items-center justify-center rounded-lg bg-gray-100 text-gray-700 ">
                            <img
                              class="h-8 w-8 rounded "
                              src="https://tuk-cdn.s3.amazonaws.com/assets/templates/Job-Portal/jp_7.png "
                              alt=" "
                            />
                          </div>
                          <div class="ml-3 ">
                            <p class="text-sm font-normal leading-5 tracking-normal text-gray-800 ">
                              React Native Ninja
                            </p>
                            <p class="text-sm font-normal leading-5 tracking-normal text-gray-500 ">
                              San Diego - 65k-75k
                            </p>
                          </div>
                        </div>
                      </div>
                      <div class="mx-auto mt-10 w-full rounded border border-gray-300 bg-white ">
                        <div class="p-5 ">
                          <div class="h-12 w-12 rounded bg-cover bg-center bg-no-repeat ">
                            <img
                              class="w-full rounded border-2 border-white object-cover shadow "
                              src="https://tuk-cdn.s3.amazonaws.com/assets/templates/Job-Portal/jp_16.png "
                              alt=" "
                            />
                          </div>
                          <div class="mt-1 ">
                            <p class="text-base font-semibold text-gray-800 ">
                              Saul Berenson
                            </p>
                            <div class="flex flex-wrap items-center justify-between ">
                              <p class="text-xs text-gray-600 ">
                                Manager, Human Resources
                              </p>
                            </div>
                            <div class="mt-3 ">
                              <button class="rounded bg-gray-100 px-5 py-2 text-sm text-blue-500 transition duration-150 ease-in-out hover:bg-gray-300 focus:outline-none ">
                                Get in touch
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default JobPreview;
