import ExperienceAdd from "./ExperienceAdd";
import ExperienceList from "./ExperienceList";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";

const ProfileExperience = () => {
  const { pathname } = useLocation();
  const name = pathname.split("/")[1].toLocaleLowerCase();
  const experienceUser = useSelector((state) => state.UserProfile.experience);
  const experienceRecruiter = useSelector(
    (state) => state.RecruiterProfile.experience
  );
  const [getAddExperienceButton, setAddExperienceButton] = useState(false);

  const experience =
    name === "recruiter" ? experienceRecruiter : experienceUser;
  return (
    <div>
      {experience.map((experience, index) => (
        <ExperienceList
          key={index}
          experience={experience}
          setAddExperienceButton={setAddExperienceButton}
        />
      ))}
      <ExperienceAdd
        getAddExperienceButton={getAddExperienceButton}
        setAddExperienceButton={setAddExperienceButton}
      />
    </div>
  );
};

export default ProfileExperience;
