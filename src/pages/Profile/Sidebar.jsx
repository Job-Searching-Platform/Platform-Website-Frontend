import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Sidebar = () => {
  const { pathname } = useLocation();
  let name = pathname.split("/")[1].toLocaleLowerCase();
  if (name === "recruiter") {
    name = name + "/profile";
  }
  return (
    <div className="mb-10 flex flex-col items-center justify-center md:fixed md:max-w-[10rem] md:items-start">
      <NavLink
        to={`/${name}/about`}
        style={({ isActive }) => ({ color: isActive ? "#3d9de1" : "#333" })}
        className="mr-23font-semibold md:mb-2"
      >
        About
      </NavLink>
      <div className="flex md:flex-col">
        <NavLink
          className="mr-3 font-semibold md:mb-2"
          style={({ isActive }) => ({ color: isActive ? "#3d9de1" : "#333" })}
          to={`/${name}/social_profile`}
        >
          Social Profiles
        </NavLink>
        <NavLink
          className="mr-3 font-semibold md:mb-2"
          style={({ isActive }) => ({ color: isActive ? "#3d9de1" : "#333" })}
          to={`/${name}/experience`}
        >
          Work Experience
        </NavLink>
        <NavLink
          className="mr-3 font-semibold md:mb-2"
          style={({ isActive }) => ({ color: isActive ? "#3d9de1" : "#333" })}
          to={`/${name}/education`}
        >
          Education
        </NavLink>
        <NavLink
          className="mr-3 font-semibold md:mb-2"
          style={({ isActive }) => ({ color: isActive ? "#3d9de1" : "#333" })}
          to={`/${name}/identity`}
        >
          Identity
        </NavLink>
        <NavLink
          className="mr-3 font-semibold md:mb-2"
          style={({ isActive }) => ({ color: isActive ? "#3d9de1" : "#333" })}
          to={`/${name}/resume`}
        >
          Resume or CV
        </NavLink>
        <NavLink
          className="mr-3 font-semibold md:mb-2"
          style={({ isActive }) => ({ color: isActive ? "#3d9de1" : "#333" })}
          to={`/${name}/prefered_job`}
        >
          Desired job
        </NavLink>

        <NavLink
          className="mr-3 font-semibold md:mb-2"
          style={({ isActive }) => ({ color: isActive ? "#3d9de1" : "#333" })}
          to={`/${name}/view`}
        >
          Preview
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
