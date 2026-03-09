import {deleteUser} from "../../services/adminService"

function ManageUsers({users}){

 const remove = async(id)=>{

  await deleteUser(id)

 }

 return(

  <div>

   {users.map(user=>(
    <div key={user._id}>

     <p>{user.name}</p>

     <button onClick={()=>remove(user._id)}>
      Delete
     </button>

    </div>
   ))}

  </div>

 )

}

export default ManageUsers