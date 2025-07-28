import { createContext, useState } from "react";

export const DetailCardContext = createContext();

export const DetailCardProvider = ({ children }) => {
    const [doctor, setDoctor] = useState(null);

    return (
        <DetailCardContext.Provider value={{ doctor, setDoctor }}>
            {children}
        </DetailCardContext.Provider>
    );
};
