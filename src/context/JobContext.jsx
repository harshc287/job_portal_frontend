import {createContext,useEffect,useState} from "react"
import {getJobs} from "../services/jobService"

export const JobContext = createContext()

export const JobProvider = ({children})=>{

 const [jobs,setJobs] = useState([])

 const fetchJobs = async()=>{
   const data = await getJobs()
   setJobs(data)
 }

 useEffect(()=>{
  fetchJobs()
 },[])

 return(
  <JobContext.Provider value={{jobs,fetchJobs}}>
    {children}
  </JobContext.Provider>
 )

}