import { Link } from "react-router-dom";
import ApplyJob from "../../pages/applications/ApplyJob";

function JobDetails({ job }) {
  return (
    <div className="max-w-5xl mx-auto py-8">

      <Link to="/jobs" className="text-indigo-600 mb-4 inline-block">
        ← Back to Jobs
      </Link>

      <div className="bg-white shadow-lg rounded-2xl p-8 border">

        <div className="flex justify-between items-center mb-4">
          <h1 className="text-3xl font-bold">{job.title}</h1>

          <span className="bg-green-100 text-green-700 px-3 py-1 rounded text-sm">
            {job.experienceLevel || "Any Level"}
          </span>
        </div>

        <p className="text-gray-600 text-lg">{job.company}</p>
        <p className="text-gray-500">{job.location}</p>

        <p className="mt-4 text-xl font-semibold text-indigo-600">
          ₹ {job.salary || "Not disclosed"}
        </p>

        {/* SKILLS */}
        <div className="mt-6">
          <h3 className="font-semibold mb-2">Skills Required</h3>
          <div className="flex flex-wrap gap-2">
            {job.skillsRequired?.map((skill, i) => (
              <span key={i} className="bg-gray-100 px-3 py-1 rounded text-sm">
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* DESCRIPTION */}
        <div className="mt-6">
          <h3 className="font-semibold mb-2">Job Description</h3>
          <p className="text-gray-700 leading-relaxed">
            {job.description}
          </p>
        </div>

        {/* APPLY */}
        <div className="mt-8 border-t pt-6">
          <ApplyJob jobId={job._id} />
        </div>

      </div>
    </div>
  );
}

export default JobDetails;