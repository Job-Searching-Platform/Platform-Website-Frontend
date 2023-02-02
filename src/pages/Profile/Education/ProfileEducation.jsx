import EducationAdd from "./EducationAdd";
import EducationList from "./EducationList";
import { useSelector } from "react-redux";
import { useState } from "react";

const ProfileEducation = () => {
  const education = useSelector((state) => state.UserProfile.education);
  const [getAddEducationButton, setAddEducationButton] = useState(false);

  return (
    <div>
      {education.map((education, index) => (
        <EducationList
          key={index}
          education={education}
          setAddEducationButton={setAddEducationButton}
        />
      ))}
      <EducationAdd
        getAddEducationButton={getAddEducationButton}
        setAddEducationButton={setAddEducationButton}
      />
    </div>
  );
};

export default ProfileEducation;
