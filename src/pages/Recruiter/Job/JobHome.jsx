import { useSelector } from "react-redux";
import JobPreview from "./JobPreview";

const JobHome = () => {
  const job_initials = useSelector((state) => state.Job.job_initials);
  return (
    <>
      {job_initials.map((jobElement, index) => (
        <JobPreview key={index} jobElement={jobElement} />
      ))}
      <a
        className="inline-block w-full rounded-l-xl rounded-t-xl bg-white py-2 px-6 font-semibold leading-loose transition duration-200 hover:bg-gray-50 lg:w-auto"
        href="/recruiter/jobs/create_job"
        data-config-id="secondary-action-hero"
      >
        + Create a job
      </a>
    </>
  );
};

export default JobHome;
