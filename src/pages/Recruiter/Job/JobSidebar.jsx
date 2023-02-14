import { NavLink, useLocation } from "react-router-dom";

const JobSidebar = () => {
  const { state } = useLocation();

  return (
    <div className="mb-10 flex flex-col items-center justify-center md:fixed md:max-w-[10rem] md:items-start">
      <NavLink
        to={`/recruiter/jobs/${state._id}/details`}
        style={({ isActive }) => ({ color: isActive ? "#3d9de1" : "#333" })}
        className="mr-23font-semibold md:mb-2"
        state={state}
      >
        Job Details
      </NavLink>
      <div className="flex md:flex-col">
        <NavLink
          className="mr-3 font-semibold md:mb-2"
          style={({ isActive }) => ({ color: isActive ? "#3d9de1" : "#333" })}
          to={`/recruiter/jobs/${state._id}/applicants`}
          state={state}
        >
          Applicants
        </NavLink>
        <NavLink
          className="mr-3 font-semibold md:mb-2"
          style={({ isActive }) => ({ color: isActive ? "#3d9de1" : "#333" })}
          to={`/recruiter/jobs/${state._id}/chat`}
          state={state}
        >
          Chat
        </NavLink>
        <NavLink
          className="mr-3 font-semibold md:mb-2"
          style={({ isActive }) => ({ color: isActive ? "#3d9de1" : "#333" })}
          to={`/recruiter/jobs/${state._id}/meeting`}
          state={state}
        >
          Meeting
        </NavLink>
        <NavLink
          className="mr-3 font-semibold md:mb-2"
          style={({ isActive }) => ({ color: isActive ? "#3d9de1" : "#333" })}
          to={`/recruiter/jobs/${state._id}/recording`}
          state={state}
        >
          Recording
        </NavLink>
        <NavLink
          className="mr-3 font-semibold md:mb-2"
          style={({ isActive }) => ({ color: isActive ? "#3d9de1" : "#333" })}
          to={`/recruiter/jobs/${state._id}/trello`}
          state={state}
        >
          Trello
        </NavLink>
      </div>
    </div>
  );
};

export default JobSidebar;
