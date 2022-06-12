import React from 'react';
import { BrowserRouter as Router,Navigate, Routes, Route, Link, useNavigate } from "react-router-dom";
import BusData from './Components/busesdata/BusData';
import ContactUs from './Components/Contact';
import LandingPage from './Components/LandingPage';
import NotFound from './Components/NotFound';
import NewBusesData from './Components/AdminPanel/NewBusesData'
import SignUp from './Components/Auth/SignUp';
import LogIn from './Components/Auth/LogIn';
import ForgetPassword from './Components/ForgetPassword';
import Tickets from './Components/TicketComponent/Tickets';
import AdminLogIn from './Components/AdminPanel/AdminLogin';
import AdminPanel from './Components/AdminPanel/AdminPanel'
import AdminDashboard from './Components/AdminPanel/AdminDashboard';
import BookingHistory from './Components/AdminPanel/BookingHistory';
import ManageBuses from './Components/AdminPanel/ManageBuses';
import ManageUsers from './Components/AdminPanel/ManageUsers';
import TravellerDetails from './Components/TicketComponent/TravellerDetails';
import AdminHelp from './Components/AdminPanel/AdminHelp';
import PopularDestinations from './Components/PopularDestination';
import UpdateData from './Components/AdminPanel/UpdateBusData';
import NewUserRegistration from './Components/AdminPanel/NewUserRegistration';
import UpdateUserRegistration from './Components/AdminPanel/UpdateUserRegistrationData';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UserService from './Services/UserServices';
function App() {
  return (
    <Router>
    <ToastContainer />
    <div style={{padding: "1.9rem"}}>
        <Routes>
        <Route exact path="/bus-data/new-data" element={<NewBusesData />} />
        <Route exact path="/bus-data/update/:id" element={<UpdateData />} />
        <Route exact path="/bus-data/Tickets" element={<Tickets />} />
        <Route exact path="/bus-data" element={<BusData />} />
        <Route exact path="/Destinations" element={<PopularDestinations />} />        
        <Route exact path="/bus/checkout" element={<TravellerDetails />} />
        <Route exact path="/contact-us" element={<ContactUs />} />
        <Route exact path="/not-found" element={<NotFound />} />
        <Route exact path="/Login" element={<LogIn />} />
        <Route exact path="/SignUp" element={<SignUp />} />
        <Route exact path="/forgetpassword" element={<ForgetPassword />} />
        <Route exact path="/Admin-Login" element={<AdminLogIn />} />
        {UserService.isAdmin()&&(
        <>
        <Route exact path="/Admin/home/dashboard" element={<AdminDashboard />} />
        <Route exact path="/Admin/home/UserRegistration" element={<NewUserRegistration />} />
        <Route exact path="/Admin/home/EditUserRegistration/:id" element={<UpdateUserRegistration />} />
        <Route exact path="/Admin/home/BookingHistory" element={<BookingHistory />} />
        <Route exact path="/Admin/home/ManageBuses" element={<ManageBuses />} />
        <Route exact path="/Admin/home/ManageUsers" element={<ManageUsers />} />
        <Route exact path="/Admin/help" element={<AdminHelp />} />
        <Route exact path="/Admin/home" element={<AdminPanel />} />
        </>
        )}
        <Route exact path="/" element={<LandingPage />} />
        <Route path="*" element={<Navigate to="/not-found" replace />} />
        </Routes>
    </div>
    </Router>
  );
}

export default App;
