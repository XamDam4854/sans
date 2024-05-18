import { createContext, useState } from "react";

export const UseTheme = createContext(null)

export function ThemeProvider({children}) {
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light")
    const [language, setLanguage] = useState("uz")

    return (
        <UseTheme.Provider value={{
            theme: theme,
            setTheme: setTheme,
            language: language,
            setLanguage: setLanguage
        }} >
            {children}
        </UseTheme.Provider>
    )
}