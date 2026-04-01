// src/pages/jobs/MyJobs.jsx

import { useEffect, useState } from "react"
import { getMyJobs, deleteJob } from "../../services/jobService"
import { Link } from "react-router-dom"

function MyJobs() {

  const [jobs, setJobs] = useState([])

  const fetchJobs = async () => {
    const data = await getMyJobs()
    setJobs(data)
  }

  useEffect(() => {
    fetchJobs()
  }, [])

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this job?")) return

    await deleteJob(id)
    fetchJobs()
  }

  return (
    <div className="max-w-5xl mx-auto py-8">

      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">My Jobs</h2>

        <Link
          to="/post-job"
          className="bg-indigo-600 text-white px-4 py-2 rounded-lg"
        >
          + Post Job
        </Link>
      </div>

      {jobs.length === 0 ? (
        <p className="text-gray-500">No jobs posted yet</p>
      ) : (
        <div className="space-y-4">
          {jobs.map(job => (
            <div
              key={job._id}
              className="bg-white p-5 rounded-lg shadow border"
            >
              <div className="flex justify-between">
                <div>
                  <h3 className="text-lg font-semibold">{job.title}</h3>
                  <p className="text-gray-600">{job.company}</p>
                  <p className="text-sm text-gray-500">{job.location}</p>
                </div>

                <span
                  className={`text-xs px-2 py-1 rounded ${
                    job.status === "approved"
                      ? "bg-green-100 text-green-700"
                      : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  {job.status}
                </span>
              </div>

              <div className="flex gap-3 mt-4">
                <Link
                  to={`/edit-job/${job._id}`}
                  className="text-indigo-600 text-sm"
                >
                  Edit
                </Link>

                <button
                  onClick={() => handleDelete(job._id)}
                  className="text-red-500 text-sm"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

    </div>
  )
}

export default MyJobs