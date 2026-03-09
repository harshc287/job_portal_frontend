import api from "./api"

export const getJobs = async()=>{
  const res = await api.get("/jobs")
  return res.data
}

export const searchJobs = async(params)=>{
  const res = await api.get("/jobs/search",{params})
  return res.data
}

export const getJobById = async(id)=>{
  const res = await api.get(`/jobs/${id}`)
  return res.data
}

export const createJob = async(data)=>{
  const res = await api.post("/jobs",data)
  return res.data
}

export const deleteJob = async(id)=>{
  const res = await api.delete(`/jobs/${id}`)
  return res.data
}