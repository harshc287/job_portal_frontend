import api from "./api"

export const getProfile = async()=>{
  const res = await api.get("/users/profile")
  return res.data
}

/* UPLOAD RESUME */
export const uploadResume = async (formData) => {
  const res = await api.post("/users/upload-resume", formData, {
    headers: {
      "Content-Type": "multipart/form-data"
    }
  })
  return res.data
}

/* UPLOAD PROFILE PHOTO */
export const uploadProfilePhoto = async (formData) => {
  const res = await api.post("/users/upload-photo", formData, {
    headers: {
      "Content-Type": "multipart/form-data"
    }
  })
  return res.data
}

/* ADD EXPERIENCE */
export const addExperience = async (data) => {
  const res = await api.post("/users/experience", data)
  return res.data
}

/* ADD EDUCATION */
export const addEducation = async (data) => {
  const res = await api.post("/users/education", data)
  return res.data
}