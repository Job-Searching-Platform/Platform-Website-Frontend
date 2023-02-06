import Sidebar from "./Sidebar";
import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Request from "./../../utils/API-routers";
import { editUserProfile } from "../../store/features/editUserProfileSlice";
import { editRecruiterProfile } from "../../store/features/editRecruiterProfileSlice";
import { useDispatch, useSelector } from "react-redux";

const Profile = () => {
  // const experience = useSelector((state) => state.UserProfile.experience);
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const name = pathname.split("/")[1].toLocaleLowerCase();
  const path = name === "recruiter" ? "recruiters" : "users";
  const _id = useSelector((state) => state.UserProfile._id);
  const _idRecruiter = useSelector((state) => state.RecruiterProfile._id);
  const get_id = name === "recruiter" ? _idRecruiter : _id;

  useEffect(() => {
    Request.getEduExperienceProfile(path, "eduexp", get_id)
      .then((res) => {
        dispatch(
          name === "recruiter"
            ? editRecruiterProfile({
                achievement: res.data.doc.achievement,
                city: res.data.doc.address[0].city,
                country: res.data.doc.address[0].country,
                phoneNumber: res.data.doc.address[0].phoneNumber,
                github: res.data.doc.socialLinks[0].github,
                linkedin: res.data.doc.socialLinks[0].linkedin,
                website: res.data.doc.socialLinks[0].website,
                bio: res.data.doc.bio,
                photo: res.data.doc.photo,
                primaryRole: res.data.doc.primaryRole,
                resume: res.data.doc.resume,
                yearofExperience: res.data.doc.yearofExperience,
                education: [...res.data.doc.education],
                experience: [...res.data.doc.experience],
                _id: res.data.doc._id,
              })
            : editUserProfile({
                achievement: res.data.doc.achievement,
                city: res.data.doc.address[0].city,
                country: res.data.doc.address[0].country,
                phoneNumber: res.data.doc.address[0].phoneNumber,
                github: res.data.doc.socialLinks[0].github,
                linkedin: res.data.doc.socialLinks[0].linkedin,
                website: res.data.doc.socialLinks[0].website,
                bio: res.data.doc.bio,
                photo: res.data.doc.photo,
                primaryRole: res.data.doc.primaryRole,
                resume: res.data.doc.resume,
                yearofExperience: res.data.doc.yearofExperience,
                education: [...res.data.doc.education],
                experience: [...res.data.doc.experience],
                _id: res.data.doc._id,
              })
        );
      })
      .catch((error) => {
        if (error.response?.data.error.code === 11000) {
        }
      });
  }, [dispatch, get_id, name, path]);

  return (
    <div>
      <Sidebar />
      <div className="ml-44">
        <Outlet />
      </div>
    </div>
  );
};

export default Profile;
