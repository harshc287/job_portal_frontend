import { StrictMode } from 'react'
import   ReactDOM   from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import "./styles/global.css"

import { BrowserRouter } from "react-router-dom"

import { AuthProvider } from "./context/AuthContext"
import { JobProvider } from "./context/JobContext"

ReactDOM.createRoot(document.getElementById("root")).render(

 <BrowserRouter>

  <AuthProvider>

   <JobProvider>

    <App/>

   </JobProvider>

  </AuthProvider>

 </BrowserRouter>

)