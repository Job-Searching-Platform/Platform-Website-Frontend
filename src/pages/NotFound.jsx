import Error404 from "../assets/Error404";
const NotFound = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="w-1/6 pl-10">
        <a
          href="/"
          className="border-1 border-gray-700 w-6 h-6 text-red-500"
          rel="noopener noreferrer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 "
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
        </a>
      </div>
      <div className="w-5/6">
        <Error404 />
      </div>
    </div>
  );
};

export default NotFound;
