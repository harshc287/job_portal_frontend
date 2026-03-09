function CompanyDetails({company}){

 return(

  <div>

   <h2>{company.name}</h2>

   <p>{company.description}</p>

   <p>{company.website}</p>

   <p>{company.location}</p>

  </div>

 )

}

export default CompanyDetails