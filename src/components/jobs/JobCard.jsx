import { Link } from "react-router-dom";

function JobCard({ job }) {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-6 border">

      <div className="flex justify-between items-start">
        <h3 className="text-xl font-bold text-gray-800">{job.title}</h3>

        <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">
          {job.experienceLevel || "Any"}
        </span>
      </div>

      <p className="text-gray-600 mt-1">{job.company}</p>
      <p className="text-sm text-gray-500">{job.location}</p>

      {/* SALARY */}
      <p className="mt-3 text-indigo-600 font-semibold">
        ₹ {job.salary || "Not disclosed"}
      </p>

      {/* SKILLS */}
      <div className="flex flex-wrap gap-2 mt-3">
        {job.skillsRequired?.map((skill, i) => (
          <span
            key={i}
            className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded"
          >
            {skill}
          </span>
        ))}
      </div>

      {/* BUTTON */}
      <Link
        to={`/jobs/${job._id}`}
        className="block mt-5 text-center bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700"
      >
        View Details
      </Link>

    </div>
  );
}

export default JobCard;