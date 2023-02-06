import { NavLink, Outlet, useParams } from "react-router-dom";

const TopBar = () => {
  const { id } = useParams();

  return (
    <div className="mb-10 flex flex-col items-center justify-center md:fixed md:max-w-[10rem] md:items-start">
      <div className=" flex flex-row space-x-32 sm:-mt-32 sm:ml-20">
        <div>
          <NavLink
            to={`/recruiter/company/${id}/overview`}
            style={({ isActive }) => ({ color: isActive ? "#3d9de1" : "#333" })}
            className="mr-23font-semibold md:mb-2"
          >
            Overview
          </NavLink>
        </div>
        <div>
          <NavLink
            className="mr-3 font-semibold md:mb-2"
            style={({ isActive }) => ({ color: isActive ? "#3d9de1" : "#333" })}
            to={`/recruiter/company/${id}/culture_benefits`}
          >
            Culture&Benefits
          </NavLink>
        </div>
        <div>
          <NavLink
            className="mr-3 font-semibold md:mb-2"
            style={({ isActive }) => ({ color: isActive ? "#3d9de1" : "#333" })}
            to={`/recruiter/company/${id}/jobs`}
          >
            Jobs
          </NavLink>
        </div>
        <div>
          <NavLink
            className="mr-3 font-semibold md:mb-2"
            style={({ isActive }) => ({ color: isActive ? "#3d9de1" : "#333" })}
            to={`/recruiter/company/${id}/gallery`}
          >
            Gallery
          </NavLink>
        </div>
      </div>

      <div className="mt-6 p-56">
        <Outlet />
      </div>
    </div>
  );
};

export default TopBar;
