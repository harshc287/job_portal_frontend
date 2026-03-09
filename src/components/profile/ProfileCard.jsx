function ProfileCard({user}){

 return(

  <div>

   <h2>{user.name}</h2>

   <p>{user.email}</p>

   <p>Role: {user.role}</p>

  </div>

 )

}

export default ProfileCard