import {useEffect,useState} from "react"
import {getCompanies} from "../../services/companyService"
import CompanyList from "../../components/company/CompanyList"

function Companies(){

 const [companies,setCompanies] = useState([])

 useEffect(()=>{
  getCompanies().then(setCompanies)
 },[])

 return(

  <div>

   <h2>Companies</h2>

   <CompanyList companies={companies}/>

  </div>

 )

}

export default Companies