import { useNavigate } from "react-router-dom";

const JobCard = ({ jobElement }) => {
  const navigate = useNavigate();
  const handleNavigate = (event) => {
    event.preventDefault();
    navigate(`/recruiter/jobs/${jobElement._id}`, { state: jobElement });
  };

  return (
    <div
      onClick={handleNavigate}
      class="rounded-sm border border-slate-200 bg-white px-5 py-4 shadow-lg"
    >
      <div class="items-center justify-between space-y-4 space-x-2 md:flex md:space-y-0">
        <div class="flex items-start space-x-3 md:space-x-4">
          <div class="mt-1 h-9 w-9 shrink-0">
            <img
              class="h-9 w-9 rounded-full"
              src="https://images.unsplash.com/photo-1586902197503-e71026292412?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80"
              width="36"
              height="36"
              alt="Company 07"
            />
          </div>
          <div>
            <a
              class="inline-flex font-semibold text-slate-800"
              href="job-post.html"
            >
              {jobElement.title}
            </a>
            <div class="text-sm">{jobElement.location}</div>
          </div>
        </div>
        <div class="flex items-center space-x-4 pl-10 md:pl-0">
          <div class="whitespace-nowrap text-sm italic text-slate-500">
            {jobElement.jobType}
          </div>
          <div class="inline-flex rounded-full bg-emerald-100 px-2.5 py-1 text-center text-xs font-medium text-emerald-600">
            {jobElement.candidateLevel}
          </div>
          <button class="text-amber-500">
            <span class="sr-only">Bookmark</span>
            <svg
              class="h-4 w-3 fill-current"
              width="12"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M2 0C.9 0 0 .9 0 2v14l6-3 6 3V2c0-1.1-.9-2-2-2H2Z"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
