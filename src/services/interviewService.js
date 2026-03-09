import api from "./api"

export const scheduleInterview = async(data)=>{
  const res = await api.post("/interviews/schedule",data)
  return res.data
}

export const getMyInterviews = async()=>{
  const res = await api.get("/interviews/my")
  return res.data
}