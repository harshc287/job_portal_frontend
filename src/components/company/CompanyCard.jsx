import {Link} from "react-router-dom"

function CompanyCard({company}){

 return(

  <div>

   <h3>{company.name}</h3>

   <p>{company.location}</p>

   <Link to={`/companies/${company._id}`}>
    View Company
   </Link>

  </div>

 )

}

export default CompanyCard