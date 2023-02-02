import Sidebar from "./Sidebar";
import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Request from "./../../utils/API-routers";
import { editUserProfile } from "../../store/features/editUserProfileSlice";
import { useDispatch } from "react-redux";

const Profile = () => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const name = pathname.split("/")[1].toLocaleLowerCase();
  const path = name === "recruiter" ? "recruiter" : "users";
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    Request.getEduExperienceProfile(
      path,
      "myProfile",
      "63b66643c94fdc51466b4e5a"
    )
      .then((res) => {
        dispatch(
          editUserProfile({
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
  }, [dispatch, path]);

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
