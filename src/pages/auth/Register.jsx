import {useState,useContext} from "react"
import {AuthContext} from "../../context/AuthContext"

function Register(){

 const {register} = useContext(AuthContext)

 const [name,setName] = useState("")
 const [email,setEmail] = useState("")
 const [password,setPassword] = useState("")
 const [role,setRole] = useState("jobseeker")

 const submit=(e)=>{

  e.preventDefault()

  register({
   name,
   email,
   password,
   role
  })

 }

 return(

  <form onSubmit={submit}>

   <h2>Register</h2>

   <input
   placeholder="Name"
   onChange={(e)=>setName(e.target.value)}
   />

   <input
   placeholder="Email"
   onChange={(e)=>setEmail(e.target.value)}
   />

   <input
   type="password"
   placeholder="Password"
   onChange={(e)=>setPassword(e.target.value)}
   />

   <select onChange={(e)=>setRole(e.target.value)}>
    <option value="jobseeker">Job Seeker</option>
    <option value="employer">Employer</option>
   </select>

   <button>Register</button>

  </form>

 )

}

export default Register