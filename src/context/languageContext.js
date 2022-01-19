import { createContext, useContext, useState } from "react";

export const LanguageContext =  createContext();

export const useLanguageChange = () => useContext(LanguageContext);
    

export const LanguageProvider = ({children}) => {
   

    //Language
    const [language, setLanguage] = useState("es");

    return (
        <LanguageContext.Provider value={{language, setLanguage}}>
            {children}
        </LanguageContext.Provider>
    )
}