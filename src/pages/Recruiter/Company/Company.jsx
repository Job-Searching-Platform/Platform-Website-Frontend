import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import CompanyList from "./CompanyList";
import Request from "./../../../utils/API-routers";
import { editInitialCompany } from "../../../store/features/editCompanySlice";
import CreateCompany from "./CreateCompany";

const Company = () => {
  const dispatch = useDispatch();
  const jobs = useSelector((state) => state.Company.jobs);
  const _idRecruiter = useSelector((state) => state.RecruiterProfile._id);

  useEffect(() => {
    Request.getRecruiterJobCompany("company", { recruiter: _idRecruiter })
      .then((res) => {
        console.log(res);
        dispatch(editInitialCompany(res.data.doc));
      })
      .catch((error) => {
        if (error.response?.data.error.code === 11000) {
        }
      });
  }, [_idRecruiter, dispatch]);

  return (
    <div>
      <div className=" ml-12 mt-9 inline-block">
        {jobs.map((company, index) => (
          <CompanyList key={index} company={company} />
        ))}
      </div>
      <div>{<CreateCompany />}</div>
      <div className="ml-44">
        <Outlet />
      </div>
    </div>
  );
};

export default Company;
