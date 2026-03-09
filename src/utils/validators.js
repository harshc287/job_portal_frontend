export const validateEmail = (email) => {

 const regex =
 /^[^\s@]+@[^\s@]+\.[^\s@]+$/

 return regex.test(email)

}

export const validatePassword = (password) => {

 if(password.length < 6){
  return false
 }

 return true

}

export const required = (value) => {
 return value && value.trim() !== ""
}