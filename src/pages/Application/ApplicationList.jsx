const ApplicationList = ({ job }) => {
  return (
    <div className="flex cursor-pointer items-center justify-between border-b py-2">
      <div className="flex flex-row items-center space-x-4">
        <span>{job.company}</span>
        <span>{job.title}</span>
        <span>{job.startDate}</span>
        <span>{job.endDate}</span>
        <span>{job.description}</span>
        <span>{job.skills[0]}</span>
      </div>
    </div>
  );
};

export default ApplicationList;
