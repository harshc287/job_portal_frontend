import Navbar from "./components/common/Navbar"
import Footer from "./components/common/Footer"

import AppRoutes from "./routes/AppRoutes"

function App(){

 return(

  <>

   <Navbar/>

   <div style={{padding:"20px"}}>
    <AppRoutes/>
   </div>

   <Footer/>

  </>

 )

}

export default App