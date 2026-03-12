import { Link } from "react-router-dom";

function JobCard({ job }) {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6 border border-gray-100">
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{job.title}</h3>
      <p className="text-gray-600 mb-1">{job.company}</p>
      <p className="text-gray-600 mb-1">{job.location}</p>
      <p className="text-gray-600 mb-4">
        <span className="font-medium">Salary:</span> {job.salary}
      </p>
      <Link
        to={`/jobs/${job._id}`}
        className="inline-block bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition duration-200 text-sm font-medium"
      >
        View Details
      </Link>
    </div>
  );
}

export default JobCard;