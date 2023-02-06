import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const CompanyOverview = () => {
  const { id } = useParams();
  let jobs = useSelector((state) => state.Company.jobs);
  jobs = jobs.filter((edu) => {
    return edu._id === id;
  });
  return (
    <div className="text6xl flex items-center justify-center space-x-4 font-bold">
      <div className="">
        <p className="flex flex-row text-xl font-bold">DESCRIPTION:</p>
        {jobs[0].descriptionText}
      </div>
      <div className="flex flex-row items-center gap-x-6">
        {" "}
        <p className="text-xl font-bold">TITLE:</p>
        {jobs[0].title}
      </div>
      <div className="flex flex-row items-center gap-x-6">
        {" "}
        <p className="text-xl font-bold">SUBTITLE:</p>
        {jobs[0].subTitle}
      </div>
      <div className="flex flex-row items-center gap-x-6">
        {" "}
        <p className="text-xl font-bold">PHOTO:</p>
        {jobs[0].photo}
      </div>
    </div>
  );
};

export default CompanyOverview;
