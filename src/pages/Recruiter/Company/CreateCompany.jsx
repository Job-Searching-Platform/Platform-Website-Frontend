import { Link } from "react-router-dom";

const CreateCompany = () => {
  // TODO: create new company
  return (
    <div>
      <Link
        className="inline-block w-full rounded-l-xl rounded-t-xl bg-white py-2 px-6 font-semibold leading-loose transition duration-200 hover:bg-gray-50 lg:w-auto"
        to="/recruiter/company/create"
        data-config-id="secondary-action-hero"
      >
        + Company
      </Link>
    </div>
  );
};

export default CreateCompany;
