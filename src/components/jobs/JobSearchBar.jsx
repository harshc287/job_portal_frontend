import {useState} from "react"

function JobSearchBar({onSearch}){

 const [keyword,setKeyword] = useState("")

 const search = ()=>{

  onSearch(keyword)

 }

 return(

  <div>

   <input
   placeholder="Search jobs"
   onChange={(e)=>setKeyword(e.target.value)}
   />

   <button onClick={search}>Search</button>

  </div>

 )

}

export default JobSearchBar