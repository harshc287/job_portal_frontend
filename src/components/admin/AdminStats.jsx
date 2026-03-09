// Placeholder file for MERN Job Portal frontend
function AdminStats({stats}){

 return(

  <div>

   <p>Users: {stats.users}</p>
   <p>Jobs: {stats.jobs}</p>
   <p>Applications: {stats.applications}</p>

  </div>

 )

}

export default AdminStats