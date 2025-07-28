import React, { useContext, useEffect, useState } from "react";
import "./RelatedDocs.css";
import dot from "../../assets/assets_frontend/dot.png";
import doc1 from "../../assets/assets_frontend/doc1.png";
import doc2 from "../../assets/assets_frontend/doc2.png";
import doc3 from "../../assets/assets_frontend/doc3.png";
import doc4 from "../../assets/assets_frontend/doc4.png";
import doc5 from "../../assets/assets_frontend/doc5.png";
import doc6 from "../../assets/assets_frontend/doc6.png";
import doc7 from "../../assets/assets_frontend/doc7.png";
import doc8 from "../../assets/assets_frontend/doc8.png";
import doc9 from "../../assets/assets_frontend/doc9.png";
import doc10 from "../../assets/assets_frontend/doc10.png";
import doc11 from "../../assets/assets_frontend/doc11.png";
import doc12 from "../../assets/assets_frontend/doc12.png";
import doc13 from "../../assets/assets_frontend/doc13.png";
import doc14 from "../../assets/assets_frontend/doc14.png";
import doc15 from "../../assets/assets_frontend/doc15.png";
import { DetailCardContext } from "../DetailCardContextFolder/DetailCardContext";
import { getDoctors } from "../../api";

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

const RelatedDocs = () => {
    const { doctor } = useContext(DetailCardContext);
    const [allDoctors, setAllDoctors] = useState([]);
    useEffect(() => {
        getDoctors().then(res => setAllDoctors(res.data)).catch(() => setAllDoctors([]));
    }, []);

    if (!doctor) return null;
    // Filter doctors with the same speciality, excluding the selected doctor
    const filteredDoctors = allDoctors.filter(
        (doc) =>
            doc.speciality === doctor.speciality &&
            doc.name !== doctor.name
    );

    return (
        <div className="related-docs-wrapper">
            <h2 className="related-docs-title">Related Doctors</h2>
            <p className="related-docs-description">
                Browse through our list of trusted doctors with the same
                speciality.
            </p>
            <div className="related-docs-grid">
                {filteredDoctors.length > 0 ? (
                    filteredDoctors.map((doc) => (
                        <div key={doc._id} className="related-docs-card">
                            <div className="related-docs-image-container">
                                <img
                                    className="related-docs-image"
                                    src={imageMap[doc.image] || doc1}
                                    alt={doc.name}
                                />
                            </div>
                            <div className="related-docs-info">
                                <p className="related-docs-availability">
                                    <img
                                        className="related-docs-status-dot"
                                        src={dot}
                                        alt="Available"
                                    />
                                    {doc.available
                                        ? "Available"
                                        : "Not Available"}
                                </p>
                                <p className="related-docs-name">{doc.name}</p>
                                <p className="related-docs-speciality">
                                    {doc.speciality}
                                </p>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No related doctors found.</p>
                )}
            </div>
        </div>
    );
};

export default RelatedDocs;
