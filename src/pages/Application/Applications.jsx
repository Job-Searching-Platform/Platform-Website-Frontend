import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
// import ApplicationList from "./ApplicationList";
import Request from "../../utils/API-routers";
import { addApplications } from "../../store/features/editUserProfileSlice";
const Applications = () => {
  const dispatch = useDispatch();
  const _id = useSelector((state) => state.UserProfile._id);
  const appliedJob = useSelector((state) => state.UserProfile.applications);

  useEffect(() => {
    Request.getAppliedJobs(_id)
      .then((res) => {
        dispatch(addApplications([...res.data.doc]));
      })
      .catch((error) => {
        if (error.response?.data.error.code === 11000) {
        }
      });
  }, [_id, dispatch]);
  return (
    <div>
      {appliedJob.map((job, index) => (
        <div
          key={index}
          className="flex cursor-pointer items-center justify-between border-b py-2"
        >
          <div className="flex flex-row items-center space-x-4">
            <span>{job._id}</span>
            <span>{job.title}</span>
            <span>{job.startDate}</span>
            <span>{job.endDate}</span>
            <span>{job.description}</span>
            <span>{job.skills[0]}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Applications;
