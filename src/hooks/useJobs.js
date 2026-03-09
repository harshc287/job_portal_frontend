import { useContext } from "react"
import { JobContext } from "../context/JobContext"

const useJobs = () => {
  return useContext(JobContext)
}

export default useJobs