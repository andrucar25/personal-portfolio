import { createContext, useContext, useState } from "react";
import { useTheme } from 'next-themes'

export const ThemeContext =  createContext();

export const useThemeChange = () => useContext(ThemeContext);
    

export const ThemeProviderCont = ({children}) => {
   

    //Light mode
    const { theme, setTheme } = useTheme();

    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}