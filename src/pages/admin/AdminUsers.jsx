import {useEffect,useState} from "react"
import {getUsers} from "../../services/adminService"
import ManageUsers from "../../components/admin/ManageUsers"

function AdminUsers(){

 const [users,setUsers] = useState([])

 useEffect(()=>{
  getUsers().then(setUsers)
 },[])

 return(

  <div>

   <h2>Users</h2>

   <ManageUsers users={users}/>

  </div>

 )

}

export default AdminUsers