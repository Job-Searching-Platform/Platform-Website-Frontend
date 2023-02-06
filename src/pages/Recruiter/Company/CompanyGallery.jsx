import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const CompanyGallery = () => {
  const { id } = useParams();
  let jobs = useSelector((state) => state.Company.jobs);
  jobs = jobs.filter((edu) => {
    return edu._id === id;
  });
  return (
    <div>
      <div>
        <div>
          {jobs[0].gallery.map((photo, index) => (
            <div key={index}>{photo}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompanyGallery;
