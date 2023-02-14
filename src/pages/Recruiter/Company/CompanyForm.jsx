import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Request from "../../../utils/API-routers";
import { addCompany } from "../../../store/features/editCompanySlice";
const CompanyForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [, setLoad] = useState(false);
  const [, setError] = useState("");

  const [getCompany, setCompany] = useState({
    recruiter: "",
    title: "",
    subTitle: "",
    descriptionText: "",
    founder: [],
    industry: [],
    openedDate: "",
    address: [
      {
        country: [],
        city: [],
        phoneNumber: "",
      },
    ],
    socialLinks: [
      {
        website: "",
        linkedin: "",
      },
    ],
    companySize: "",
    // skills: [],
    // gallery: [],
    photo: "",
    companyValue: "",
  });
  console.log(getCompany);

  const handleChange = (e) => {
    setCompany({ ...getCompany, [e.target.name]: e.target.value });
  };

  const handleAddressChange = (e) => {
    setCompany({
      ...getCompany,
      address: [
        {
          ...getCompany.address[0],
          [e.target.name]: e.target.value,
        },
      ],
    });
  };
  const handleSocialLinksChange = (e) => {
    setCompany({
      ...getCompany,
      socialLinks: [
        {
          ...getCompany.socialLinks[0],
          [e.target.name]: e.target.value,
        },
      ],
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoad(true);

    Request.createRecruiterJobCompany("company", getCompany)
      .then((res) => {
        console.log(res);
        dispatch(addCompany(res.data.doc));

        res.data.status === "success" && navigate("/recruiter/company");

        setLoad(false);
      })
      .catch((error) => {
        setError(error.response?.data.message);
        console.log(error.response?.data.message);
        if (error.response?.data.error.code === 11000) {
          setError("duplicate email address");
        }
        setLoad(false);
      });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-wrap">
          <div className="w-full p-2 md:w-1/3">
            <input
              className="rounded border-2 border-gray-200 bg-gray-200 p-2"
              type="number"
              name="companyValue"
              value={getCompany.companyValue}
              onChange={handleChange}
            />
            <input
              className="rounded border-2 border-gray-200 bg-gray-200 p-2"
              type="text"
              name="photo"
              value={getCompany.photo}
              onChange={handleChange}
            />
            <input
              className="rounded border-2 border-gray-200 bg-gray-200 p-2"
              type="number"
              name="companySize"
              value={getCompany.companySize}
              onChange={handleChange}
            />

            <input
              className="rounded border-2 border-gray-200 bg-gray-200 p-2"
              type="text"
              name="recruiter"
              value={getCompany.recruiter}
              onChange={handleChange}
            />
            <input
              className="rounded border-2 border-gray-200 bg-gray-200 p-2"
              type="text"
              name="title"
              value={getCompany.title}
              onChange={handleChange}
            />

            <input
              className="rounded border-2 border-gray-200 bg-gray-200 p-2"
              type="text"
              name="subTitle"
              value={getCompany.subTitle}
              onChange={handleChange}
            />
            <textarea
              name="descriptionText"
              value={getCompany.descriptionText}
              onChange={handleChange}
            />

            <input
              className="rounded border-2 border-gray-200 bg-gray-200 p-2"
              type="text"
              name="founder"
              value={getCompany.founder}
              onChange={handleChange}
            />
            <input
              className="rounded border-2 border-gray-200 bg-gray-200 p-2"
              type="text"
              name="industry"
              value={getCompany.industry}
              onChange={handleChange}
            />

            <input
              className="rounded border-2 border-gray-200 bg-gray-200 p-2"
              type="text"
              name="openedDate"
              value={getCompany.openedDate}
              onChange={handleChange}
            />
            <input
              className="rounded border-2 border-gray-200 bg-gray-200 p-2"
              type="text"
              name="country"
              value={getCompany.address[0].country}
              onChange={handleAddressChange}
            />

            <input
              className="rounded border-2 border-gray-200 bg-gray-200 p-2"
              type="text"
              name="city"
              value={getCompany.address[0].city}
              onChange={handleAddressChange}
            />
            <input
              className="rounded border-2 border-gray-200 bg-gray-200 p-2"
              type="number"
              name="phoneNumber"
              value={getCompany.address[0].phoneNumber}
              onChange={handleAddressChange}
            />

            <input
              className="rounded border-2 border-gray-200 bg-gray-200 p-2"
              type="text"
              name="website"
              value={getCompany.socialLinks[0].website}
              onChange={handleSocialLinksChange}
            />
            <input
              className="rounded border-2 border-gray-200 bg-gray-200 p-2"
              type="text"
              name="linkedin"
              value={getCompany.socialLinks[0].linkedin}
              onChange={handleSocialLinksChange}
            />
          </div>
        </div>

        <div>
          <button
            className="focus:shadow-outline rounded bg-purple-500 py-2 px-4 font-bold text-white shadow hover:bg-purple-400 focus:outline-none"
            type="submit"
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

export default CompanyForm;
