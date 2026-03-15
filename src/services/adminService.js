import api from "./api"

/* ======================
   DASHBOARD
====================== */

export const getStats = async()=>{
 const res = await api.get("/admin/stats")
 return res.data
}

export const getPlatformActivity = async()=>{
 const res = await api.get("/admin/activity")
 return res.data
}

export const getAnalytics = async()=>{
 const res = await api.get("/admin/analytics")
 return res.data
}


/* ======================
   USERS
====================== */

export const getUsers = async (page = 1, limit = 10, search = "") => {
  const res = await api.get(`/admin/users?page=${page}&limit=${limit}&search=${search}`);
  return res.data;
};

export const deleteUser = async(id)=>{
 const res = await api.delete(`/admin/users/${id}`)
 return res.data
}

export const toggleBanUser = async(id)=>{
 const res = await api.patch(`/admin/users/${id}/ban`)
 return res.data
}

export const updateUserRole  = async(id,role)=>{
 const res = await api.patch(`/admin/users/${id}/role`,{role})
 return res.data
}


/* ======================
   JOBS
====================== */

export const getAllJobs = async()=>{
 const res = await api.get("/admin/jobs")
 return res.data
}

export const deleteJob = async(id)=>{
 const res = await api.delete(`/admin/jobs/${id}`)
 return res.data
}


/* ======================
   JOB APPROVAL
====================== */

export const getPendingJobs = async()=>{
 const res = await api.get("/admin/jobs/pending")
 return res.data
}

export const approveJob = async(id)=>{
 const res = await api.patch(`/admin/jobs/${id}/approve`)
 return res.data
}

export const rejectJob = async(id)=>{
 const res = await api.patch(`/admin/jobs/${id}/reject`)
 return res.data
}


/* ======================
   APPLICATIONS
====================== */

export const getApplications = async()=>{
 const res = await api.get("/admin/applications")
 return res.data
}