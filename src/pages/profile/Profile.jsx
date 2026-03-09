import {useEffect,useState} from "react"
import {getProfile} from "../../services/userService"
import ProfileCard from "../../components/profile/ProfileCard"

function Profile(){

 const [user,setUser] = useState(null)

 useEffect(()=>{
  getProfile().then(setUser)
 },[])

 if(!user) return <p>Loading</p>

 return <ProfileCard user={user}/>

}

export default Profile