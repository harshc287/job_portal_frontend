import api from "./api"

export const applyJob = async(jobId,data)=>{
  const res = await api.post(`/applications/apply/${jobId}`,data)
  return res.data
}

export const getMyApplications = async()=>{
  const res = await api.get("/applications/my")
  return res.data
}