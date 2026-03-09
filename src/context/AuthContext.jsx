import {createContext,useState} from "react"
import {loginUser,registerUser} from "../services/authService"

export const AuthContext = createContext()

export const AuthProvider = ({children})=>{

  const [user,setUser] = useState(null)

  const login = async(data)=>{

    const res = await loginUser(data)

    localStorage.setItem("token",res.token)

    setUser(res)
  }

  const register = async(data)=>{

    const res = await registerUser(data)

    localStorage.setItem("token",res.token)

    setUser(res)
  }

  const logout = ()=>{
    localStorage.removeItem("token")
    setUser(null)
  }

  return(
    <AuthContext.Provider value={{user,login,register,logout}}>
      {children}
    </AuthContext.Provider>
  )

}