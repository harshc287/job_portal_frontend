import CompanyCard from "./CompanyCard"

function CompanyList({companies}){

 return(

  <div>

   {companies.map(c=>(
     <CompanyCard key={c._id} company={c}/>
   ))}

  </div>

 )

}

export default CompanyList