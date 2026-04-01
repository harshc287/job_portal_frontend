// src/services/jobService.js

import api from "./api"

// ✅ Get all approved jobs
export const getJobs = async (params = {}) => {
  const res = await api.get("/jobs", { params })
  return res.data
}

// ⚠️ Only keep if backend route exists
export const searchJobs = async (params) => {
  const res = await api.get("/jobs/search", { params })
  return res.data
}

// ✅ Get single job
export const getJobById = async (id) => {
  const res = await api.get(`/jobs/${id}`)
  return res.data
}

// ✅ Create job (token auto attached)
export const createJob = async (data) => {
  const res = await api.post("/jobs", data)
  return res.data
}

// ✅ Get my jobs
export const getMyJobs = async () => {
  const res = await api.get("/jobs/my")
  return res.data
}

// ✅ Update job
export const updateJob = async (id, data) => {
  const res = await api.put(`/jobs/${id}`, data)
  return res.data
}

// ✅ Delete job
export const deleteJob = async (id) => {
  const res = await api.delete(`/jobs/${id}`)
  return res.data
}