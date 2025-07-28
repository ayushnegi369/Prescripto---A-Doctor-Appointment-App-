import React, { useContext } from "react";
import { SpecialityContext } from "../../components/SpecialityContextFolder/SpecialityContext";
import "./SpecialityList.css";

const SpecialityList = () => {
    const { specialist, setSpecialist } = useContext(SpecialityContext);

    const specialityList = [
        "All",
        "Cardiologist",
        "Neurologist",
        "Orthopedic Surgeon",
        "Dermatologist",
        "Pediatrician",
        "Oncologist",
        "Psychiatrist",
        "Endocrinologist",
        "Ophthalmologist",
        "Gastroenterologist"
    ];

    const handleSpecialistChange = (speciality) => {
        setSpecialist(speciality);
    };

    return (
        <ul className="speciality-list">
            {specialityList.map((speciality, index) => (
                <li
                    key={index}
                    onClick={() => handleSpecialistChange(speciality)}
                    className={specialist === speciality ? "active" : ""}
                >
                    {speciality}
                </li>
            ))}
        </ul>
    );
};

export default SpecialityList;
