import Navbar from "./components/common/Navbar"
import Footer from "./components/common/Footer"

import AppRoutes from "./routes/AppRoutes"
import { Toaster } from "react-hot-toast"


function App(){

 return(

  <>

   <Navbar/>

   <div style={{padding:"20px"}}>
    <Toaster position="top-right" />
    <AppRoutes/>
   </div>

   <Footer/>

  </>

 )

}

export default App