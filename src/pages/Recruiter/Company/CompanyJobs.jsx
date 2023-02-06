import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const CompanyJobs = () => {
  const { id } = useParams();
  let jobs = useSelector((state) => state.Company.jobs);
  jobs = jobs.filter((edu) => {
    return edu._id === id;
  });
  const jobDetail = jobs[0]?.job[0]?.title;
  return (
    <div className="flex flex-row items-center gap-x-6">
      {" "}
      <p className="text-xl font-bold">JOBS:</p>
      {jobDetail}
      {/* {jobDetail &&
        jobDetail.map((photo, index) => <div key={index}>{photo}</div>)} */}
    </div>
  );
};

export default CompanyJobs;
