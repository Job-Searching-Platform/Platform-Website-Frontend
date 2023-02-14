const CandidateCard = ({ applicant }) => {
  return (
    <div class="group relative rounded-md bg-white p-6 text-center shadow transition duration-500 hover:shadow-md dark:bg-slate-900 dark:shadow-gray-800 dark:hover:shadow-gray-700">
      <div class="mt-8">
        <img
          src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
          class="mx-auto block h-20 w-20 rounded-full shadow-md"
          alt=""
        />

        <div class="mt-3">
          <a
            href="page-job-candidate-detail.html"
            class="block text-lg font-medium transition duration-500 hover:text-indigo-600"
          >
            {applicant?.fullName}
          </a>
          <span class="block text-sm text-slate-400">
            {applicant?.primaryRole}
          </span>
        </div>
      </div>

      <div class="my-4 flex items-center justify-around">
        <span class="text-slate-400">
          <i class="uil uil-map-marker mr-1 text-indigo-600"></i>
          {applicant?.address[0]?.country}, {applicant?.address[0]?.city}
        </span>
        <span class="text-slate-400">
          <i class="uil uil-dollar-sign mr-1 text-indigo-600"></i>3300/mo
        </span>
      </div>

      <a
        href="/"
        class="m-1 inline-block h-[24px] rounded-lg bg-gray-100 px-3 py-1 text-xs font-medium text-slate-400 dark:bg-gray-800"
      >
        PHP
      </a>
      <a
        href="/"
        class="m-1 inline-block h-[24px] rounded-lg bg-gray-100 px-3 py-1 text-xs font-medium text-slate-400 dark:bg-gray-800"
      >
        HTML
      </a>
      <a
        href="/"
        class="m-1 inline-block h-[24px] rounded-lg bg-gray-100 px-3 py-1 text-xs font-medium text-slate-400 dark:bg-gray-800"
      >
        CSS
      </a>
      <a
        href="/"
        class="m-1 inline-block h-[24px] rounded-lg bg-gray-100 px-3 py-1 text-xs font-medium text-slate-400 dark:bg-gray-800"
      >
        WordPress
      </a>

      <div class="mt-4">
        <a
          href="page-job-candidate-detail.html"
          class="btn w-full rounded-md border-indigo-600/10 bg-indigo-600/5 text-indigo-600 hover:border-indigo-600 hover:bg-indigo-600 hover:text-white"
        >
          View Profile
        </a>
      </div>

      <div class="absolute top-6 left-6">
        <span class="h-[28px] rounded-full bg-indigo-600/5 px-4 py-1 text-sm font-medium text-indigo-600">
          Featured
        </span>
      </div>
      <div class="absolute top-6 right-6">
        <a
          href="/"
          class="btn btn-icon btn-sm rounded-full bg-gray-50 hover:border-gray-100 hover:bg-gray-200 dark:border-gray-700 dark:bg-slate-900 dark:hover:border-gray-700 dark:hover:bg-gray-700"
        >
          <i class="uil uil-bookmark"></i>
        </a>
      </div>
    </div>
  );
};

export default CandidateCard;
