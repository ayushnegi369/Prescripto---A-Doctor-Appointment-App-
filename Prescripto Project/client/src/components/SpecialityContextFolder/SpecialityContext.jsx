import { createContext, useState } from "react";

export const SpecialityContext = createContext();

export const SpecialityProvider = ({ children }) => {
    const [specialist, setSpecialist] = useState("All");

    return (
        <SpecialityContext.Provider value={{ specialist, setSpecialist }}>
            {children}
        </SpecialityContext.Provider>
    );
};
