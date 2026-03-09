import {useState,useContext} from "react"
import {AuthContext} from "../../context/AuthContext"

function Login(){

 const {login} = useContext(AuthContext)

 const [email,setEmail] = useState("")
 const [password,setPassword] = useState("")

 const submit = (e)=>{
  e.preventDefault()

  login({email,password})
 }

 return(

  <form onSubmit={submit}>

   <h2>Login</h2>

   <input
   placeholder="Email"
   onChange={(e)=>setEmail(e.target.value)}
   />

   <input
   type="password"
   placeholder="Password"
   onChange={(e)=>setPassword(e.target.value)}
   />

   <button>Login</button>

  </form>

 )

}

export default Login