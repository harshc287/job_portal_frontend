import { Routes, Route } from "react-router-dom"

import Home from "../pages/Home"

import Login from "../pages/auth/Login"
import Register from "../pages/auth/Register"

import JobsPage from "../pages/jobs/JobsPage"
import JobDetailsPage from "../pages/jobs/JobDetailsPage"
import PostJob from "../pages/jobs/PostJob"
import MyJobs from "../pages/jobs/MyJobs"

import ApplyJob from "../pages/applications/ApplyJob"
import MyApplications from "../pages/applications/MyApplications"

import Profile from "../pages/profile/Profile"
import EditProfile from "../pages/profile/EditProfile"
import ResumePage from "../pages/profile/ResumePage"

import Companies from "../pages/company/Companies"
import CompanyProfile from "../pages/company/CompanyProfile"

import CreateCompany from "../pages/company/CreateCompany"
import MyCompanies from "../pages/company/MyCompanies"

import AdminDashboard from "../pages/admin/AdminDashboard"
import AdminUsers from "../pages/admin/AdminUsers"
import AdminJobs from "../pages/admin/AdminJobs"
import AdminAnalytics from "../pages/admin/AdminAnalytics"
import AdminPendingJobs from "../pages/admin/AdminPendingJobs"
import AdminApplications from "../pages/admin/AdminApplications"


import InterviewSchedule from "../pages/interview/InterviewSchedule"
import MyInterviews from "../pages/interview/MyInterviews"

import ProtectedRoute from "../components/common/ProtectedRoute"

function AppRoutes(){

 return(

  <Routes>

   <Route path="/" element={<Home/>} />

   <Route path="/login" element={<Login/>} />
   <Route path="/register" element={<Register/>} />

   <Route path="/jobs" element={<JobsPage/>} />
   <Route path="/jobs/:id" element={<JobDetailsPage/>} />
   <Route path="/post-job" element={<PostJob/>} />
   <Route path="/my-jobs" element={<MyJobs/>} />

   <Route path="/apply/:jobId" element={<ApplyJob/>} />
   <Route path="/applications" element={<MyApplications/>} />

<Route 
  path="/profile" 
  element={
    <ProtectedRoute>
      <Profile/>
    </ProtectedRoute>
  } 
/>

   <Route path="/edit-profile" element={<EditProfile/>} />
   <Route path="/resume" element={<ResumePage/>} />

   <Route path="/companies" element={<Companies/>} />
   <Route path="/companies/:id" element={<CompanyProfile/>} />

   <Route 
        path="/create-company" 
        element={
          <ProtectedRoute>
            <CreateCompany />
          </ProtectedRoute>
        } 
      />

      <Route 
        path="/my-companies" 
        element={
          <ProtectedRoute>
            <MyCompanies />
          </ProtectedRoute>
        } 
      />

   <Route path="/interviews" element={<MyInterviews/>} />
   <Route path="/schedule-interview" element={<InterviewSchedule/>} />

   <Route path="/admin" element={<AdminDashboard/>} />
   <Route path="/admin/users" element={<AdminUsers/>} />
   <Route path="/admin/jobs" element={<AdminJobs/>} />
   <Route path="/admin/analytics" element={<AdminAnalytics/>} />
     <Route path="/admin/pending-jobs" element={<AdminPendingJobs/>} />
   <Route path="/admin/applications" element={<AdminApplications/>} />

  </Routes>

 )

}

export default AppRoutes