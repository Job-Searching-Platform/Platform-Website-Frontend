import ExperienceAdd from "./ExperienceAdd";
import ExperienceList from "./ExperienceList";
import { useSelector } from "react-redux";
import { useState } from "react";

const ProfileExperience = () => {
  const experience = useSelector((state) => state.UserProfile.experience);
  const [getAddExperienceButton, setAddExperienceButton] = useState(false);

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
