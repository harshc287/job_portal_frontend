import api from "./api"

export const getCompanies = async()=>{
  const res = await api.get("/companies")
  return res.data
}

export const getCompanyById = async(id)=>{
  const res = await api.get(`/companies/${id}`)
  return res.data
}

export const createCompany = async(data)=>{
  const res = await api.post("/companies",data)
  return res.data
}