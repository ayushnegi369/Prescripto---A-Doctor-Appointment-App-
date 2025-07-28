import React from "react";
import "./Speciality.css";
import General_Physician from "../../assets/assets_frontend/General_physician.svg";
import Gynecologist from "../../assets/assets_frontend/Gynecologist.svg";
import Dermatologist from "../../assets/assets_frontend/Dermatologist.svg";
import Pediatricians from "../../assets/assets_frontend/Pediatricians.svg";
import Neurologist from "../../assets/assets_frontend/Neurologist.svg";
import Gastroenterologist from "../../assets/assets_frontend/Gastroenterologist.svg";
import { useNavigate } from "react-router-dom";

const Speciality = () => {
    const navigate = useNavigate();
    const imageArray = [
        { id: 1, src: General_Physician, name: "General Physician" },
        { id: 2, src: Gynecologist, name: "Gynecologist" },
        { id: 3, src: Dermatologist, name: "Dermatologist" },
        { id: 4, src: Pediatricians, name: "Pediatricians" },
        { id: 5, src: Neurologist, name: "Neurologist" },
        { id: 6, src: Gastroenterologist, name: "Gastroenterologist" },
    ];
    const handleCategoryClick = (name) => {
        localStorage.setItem('selectedSpeciality', name);
        navigate('/doctors');
    };
    return (
        <div className="speciality-parent">
            <p className="find-by-speciality-text">Find by Speciality</p>
            <p className="description-text">
                Simply browse through our extensive list of trusted doctors,
                schedule <br /> your appointment hassle-free.
            </p>
            <div className="categories">
                {imageArray.map((item) => (
                    <div className="category-circle" key={item.id} onClick={() => handleCategoryClick(item.name)} style={{ cursor: 'pointer' }}>
                        <img
                            className="category-image"
                            src={item.src}
                            alt={item.name}
                        />
                        <p>{item.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Speciality;
