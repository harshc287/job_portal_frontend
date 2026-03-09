import {useEffect,useState} from "react"
import {getStats} from "../../services/adminService"
import AdminStats from "../../components/admin/AdminStats"

function AdminDashboard(){

 const [stats,setStats] = useState({})

 useEffect(()=>{
  getStats().then(setStats)
 },[])

 return(

  <div>

   <h2>Admin Dashboard</h2>

   <AdminStats stats={stats}/>

  </div>

 )

}

export default AdminDashboard