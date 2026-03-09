import api from "./api"

export const getStats = async()=>{
  const res = await api.get("/admin/stats")
  return res.data
}

export const getUsers = async()=>{
  const res = await api.get("/admin/users")
  return res.data
}

export const deleteUser = async(id)=>{
  const res = await api.delete(`/admin/users/${id}`)
  return res.data
}

export const deleteJob = async(id)=>{
  const res = await api.delete(`/admin/jobs/${id}`)
  return res.data
}