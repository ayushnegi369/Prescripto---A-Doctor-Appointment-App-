import React from "react";
import Home from "./pages/user/Home/Home";
import Appointment from "./pages/user/Appointment/Appointment";
import AllDoctors from "./pages/user/AllDoctors/AllDoctors";
import AboutUs from "./pages/user/AboutUs/AboutUs";
import Contact from "./pages/user/ContactUs/Contact";
import SignupForm from "./pages/user/SignUp/Signup";
import LoginForm from "./pages/user/Login/Login";
import Appointments from "./pages/user/MyAppointment/MyAppointment";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProfileCard from "./pages/user/Profile/Profile";
import { SpecialityProvider } from "./components/SpecialityContextFolder/SpecialityContext";
import { DetailCardProvider } from "./components/DetailCardContextFolder/DetailCardContext";
import Dashboard from "./pages/admin/Dashboard/Dashboard";
import AppointmentsTable from "./pages/admin/AllAppointmentPage/AllAppointmentPage";
import AddDoctorForm from "./pages/admin/AddDoctor/AddDoctor";

const App = () => {
    return (
        <DetailCardProvider>
            <SpecialityProvider>
                <BrowserRouter>
                    <Routes>
                        {/* USER ROUTES */}
                        <Route path="/signup" element={<SignupForm />} />
                        <Route path="/login" element={<LoginForm />} />
                        <Route path="/" element={<Home />} />
                        <Route path="/doctors" element={<AllDoctors />} />
                        <Route path="/book-slot" element={<Appointment />} />
                        <Route path="/about" element={<AboutUs />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/profile" element={<ProfileCard />} />
                        <Route
                            path="/appointments"
                            element={<Appointments />}
                        />
                        {/* USER ROUTES */}

                        {/* ADMIN ROUTES */}
                        <Route
                            path="/admin/dashboard"
                            element={<Dashboard />}
                        />
                        <Route
                            path="/admin/appointments"
                            element={<AppointmentsTable />}
                        />
                        <Route
                            path="/admin/add-doctor"
                            element={<AddDoctorForm />}
                        />
                        {/* ADMIN ROUTES */}
                    </Routes>
                </BrowserRouter>
            </SpecialityProvider>
        </DetailCardProvider>
    );
};

export default App;
