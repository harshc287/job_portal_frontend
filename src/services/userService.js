import api from "./api"

export const getProfile = async()=>{
  const res = await api.get("/users/profile")
  return res.data
}

export const uploadResume = async(formData)=>{
  const res = await api.post("/users/upload-resume",formData)
  return res.data
}