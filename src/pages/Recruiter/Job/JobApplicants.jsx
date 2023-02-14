import { editJob } from "../../../store/features/editJobSlice";
import Request from "../../../utils/API-routers";
import { useDispatch } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import CandidateCard from "../../../components/CandidateCard";

const JobApplicants = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { state } = useLocation();
  // console.log(id);

  const [, setLoad] = useState(false);
  const [, setError] = useState("");
  console.log(state);

  useEffect(() => {
    setLoad(true);
    Request.getApplicants(id)
      .then((res) => {
        console.log(res.data.doc);
        state.applications = res.data.doc;
        dispatch(editJob(state));
        setLoad(false);
      })
      .catch((error) => {
        setError(error);
        setLoad(false);
      });
    console.log(state.applications);
  }, [dispatch]);
  return (
    <div class="container">
      <div class="grid grid-cols-1 gap-[30px] sm:grid-cols-2 md:grid-cols-3">
        {state.applications.map((jobElement, index) => (
          <CandidateCard key={index} applicant={jobElement} />
        ))}
      </div>
    </div>
  );
};

export default JobApplicants;
