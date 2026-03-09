import {useEffect,useState} from "react"
import {useParams} from "react-router-dom"
import {getCompanyById} from "../../services/companyService"
import CompanyDetails from "../../components/company/CompanyDetails"

function CompanyProfile(){

 const {id} = useParams()

 const [company,setCompany] = useState(null)

 useEffect(()=>{
  getCompanyById(id).then(setCompany)
 },[id])

 if(!company) return <p>Loading</p>

 return <CompanyDetails company={company}/>

}

export default CompanyProfile