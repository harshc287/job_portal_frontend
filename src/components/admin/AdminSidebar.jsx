import {Link} from "react-router-dom"

function AdminSidebar(){

 return(

  <div>

   <h3>Admin</h3>

   <Link to="/admin/users">Users</Link>
   <Link to="/admin/jobs">Jobs</Link>
   <Link to="/admin/analytics">Analytics</Link>

  </div>

 )

}

export default AdminSidebar