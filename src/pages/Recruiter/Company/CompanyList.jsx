import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { editCompany } from "../../../store/features/editCompanySlice";
import Request from "./../../../utils/API-routers";
const CompanyList = ({ company }) => {
  // TODO: fetch company jobs from backend only one time
  // let jobs = useSelector((state) => state.Company.jobs);
  // jobs = jobs.filter((com) => {
  //   return com._id === company?._id;
  // });
  // // console.log(jobs[0]?.job.length);
  const dispatch = useDispatch();
  const handleClick = () => {
    // if (jobs[0]?.job.length >= 1) {
    //   console.log("1");
    // } else {
    Request.getJobCompany("company", company?._id)
      .then((res) => {
        console.log(res.data.doc);
        dispatch(editCompany(res.data.doc));
      })
      .catch((error) => {
        if (error.response?.data.error.code === 11000) {
        }
      });
    // }
  };
  return (
    <div className="mb-10 flex flex-col items-center justify-center  md:max-w-[10rem] md:items-start">
      <div className="flex md:flex-col">
        <NavLink
          className="mr-3 font-semibold md:mb-2"
          style={({ isActive }) => ({ color: isActive ? "#3d9de1" : "#333" })}
          to={`/recruiter/company/${company?._id}`}
          onClick={handleClick}
        >
          {company.title}
        </NavLink>
      </div>
    </div>
  );
};

export default CompanyList;
