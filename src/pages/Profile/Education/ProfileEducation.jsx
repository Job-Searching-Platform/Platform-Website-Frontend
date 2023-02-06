import EducationAdd from "./EducationAdd";
import EducationList from "./EducationList";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";

const ProfileEducation = () => {
  const { pathname } = useLocation();
  const name = pathname.split("/")[1].toLocaleLowerCase();
  const educationUser = useSelector((state) => state.UserProfile.education);
  const educationRecruiter = useSelector((state) => state.RecruiterProfile.education);
  const [getAddEducationButton, setAddEducationButton] = useState(false);

  const education = name === "recruiter" ? educationRecruiter : educationUser;
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
