import { Link } from "react-router-dom";
import ApplyJob from "../../pages/applications/ApplyJob";

function JobDetails({ job }) {
  return (
    <div className="max-w-4xl mx-auto">
      {/* Back button */}
      <Link
        to="/jobs"
        className="inline-flex items-center text-indigo-600 hover:text-indigo-800 mb-4"
      >
        <svg
          className="w-5 h-5 mr-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 19l-7-7m0 0l7-7m-7 7h18"
          />
        </svg>
        Back to Jobs
      </Link>

      <div className="bg-white rounded-lg shadow-md p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">{job.title}</h2>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div>
            <p className="text-gray-700 mb-2">
              <span className="font-semibold">Company:</span> {job.company}
            </p>
            <p className="text-gray-700 mb-2">
              <span className="font-semibold">Location:</span> {job.location}
            </p>
            <p className="text-gray-700 mb-2">
              <span className="font-semibold">Salary:</span> {job.salary}
            </p>
            <p className="text-gray-700 mb-2">
              <span className="font-semibold">Experience Level:</span>{" "}
              {job.experienceLevel}
            </p>
          </div>
          <div>
            <p className="text-gray-700 leading-relaxed">{job.description}</p>
          </div>
        </div>

        <div className="border-t pt-6">
          <ApplyJob jobId={job._id} />
        </div>
      </div>
    </div>
  );
}

export default JobDetails;