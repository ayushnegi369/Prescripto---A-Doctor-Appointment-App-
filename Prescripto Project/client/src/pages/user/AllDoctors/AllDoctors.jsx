import React, { useContext, useEffect, useState } from "react";
import "./AllDoctors.css";
import Navbar from "../../../components/Navbar/Navbar";
import SpecialityList from "../../../components/SpecialityList/SpecialityList";
import Footer from "../../../components/Footer/Footer";
import { SpecialityContext } from "../../../components/SpecialityContextFolder/SpecialityContext";

import doc1 from "../../../assets/assets_frontend/doc1.png";
import doc2 from "../../../assets/assets_frontend/doc2.png";
import doc3 from "../../../assets/assets_frontend/doc3.png";
import doc4 from "../../../assets/assets_frontend/doc4.png";
import doc5 from "../../../assets/assets_frontend/doc5.png";
import doc6 from "../../../assets/assets_frontend/doc6.png";
import doc7 from "../../../assets/assets_frontend/doc7.png";
import doc8 from "../../../assets/assets_frontend/doc8.png";
import doc9 from "../../../assets/assets_frontend/doc9.png";
import doc10 from "../../../assets/assets_frontend/doc10.png";
import doc11 from "../../../assets/assets_frontend/doc11.png";
import doc12 from "../../../assets/assets_frontend/doc12.png";
import doc13 from "../../../assets/assets_frontend/doc13.png";
import doc14 from "../../../assets/assets_frontend/doc14.png";
import doc15 from "../../../assets/assets_frontend/doc15.png";
import { useNavigate } from "react-router-dom";
import { DetailCardContext } from "../../../components/DetailCardContextFolder/DetailCardContext";
import { getDoctors } from "../../../api";

const AllDoctors = () => {
    const navigate = useNavigate();

    const { specialist, setSpecialist } = useContext(SpecialityContext); // Get and set selected specialist
    const { setDoctor } = useContext(DetailCardContext);

    const [doctorList, setDoctorList] = useState([]);
    useEffect(() => {
        getDoctors().then(res => setDoctorList(res.data)).catch(() => setDoctorList([]));
    }, []);

    // Handle selectedSpeciality from localStorage (from Home page)
    useEffect(() => {
        const selected = localStorage.getItem('selectedSpeciality');
        if (selected) {
            setSpecialist(selected);
            localStorage.removeItem('selectedSpeciality');
        }
    }, [setSpecialist]);

    // Filter doctors based on selected speciality
    const filteredDoctors =
        specialist === "All"
            ? doctorList
            : doctorList.filter((doctor) =>
                doctor.speciality && specialist &&
                doctor.speciality.toLowerCase() === specialist.toLowerCase()
            );

    const handleOnClick = (doctor) => {
        setDoctor(doctor);
        localStorage.setItem('selectedDoctor', JSON.stringify(doctor));
        navigate("/book-slot");
    };

    const imageMap = {
      "doc1.png": doc1,
      "doc2.png": doc2,
      "doc3.png": doc3,
      "doc4.png": doc4,
      "doc5.png": doc5,
      "doc6.png": doc6,
      "doc7.png": doc7,
      "doc8.png": doc8,
      "doc9.png": doc9,
      "doc10.png": doc10,
      "doc11.png": doc11,
      "doc12.png": doc12,
      "doc13.png": doc13,
      "doc14.png": doc14,
      "doc15.png": doc15,
    };

    return (
        <div>
            <Navbar />
            <p className="doctors-header">
                Browse through by doctor specialists.
            </p>
            <div className="doctors-container">
                <div className="doctors-left-section">
                    <SpecialityList />
                </div>
                <div className="doctors-right-section">
                    <div className="doctors-grid">
                        {filteredDoctors.length > 0 ? (
                            filteredDoctors.map((doctor) => (
                                <div key={doctor._id} className="doctor-card-new" onClick={() => handleOnClick(doctor)}>
                                    <div className="doctor-img-container">
                                        <img className="doctor-img" src={imageMap[doctor.image] || doc1} alt={doctor.name} />
                                    </div>
                                    <div className="doctor-info">
                                        <div className="doctor-name-new">{doctor.name}</div>
                                        <div className="doctor-specialty">{doctor.speciality}</div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p className="no-doctors-message">
                                No doctors available for this specialty.
                            </p>
                        )}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default AllDoctors;
