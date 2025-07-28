import React from "react";
import "./Home.css";
import Navbar from "../../../components/Navbar/Navbar";
import HeroSection from "../../../components/HeroSection/HeroSection";
import Speciality from "../../../components/Speciality/Speciality";
import Doctors from "../../../components/Doctors/Doctors";
import SubFooter from "../../../components/SubFooter/SubFooter";
import Footer from "../../../components/Footer/Footer";

const Home = () => {
    return (
        <div>
            <Navbar />
            <HeroSection />
            <Speciality />
            <Doctors />
            <SubFooter />
            <Footer />  
        </div>
    );
};

export default Home;
