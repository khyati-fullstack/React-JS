import React, { Children, createContext, useState } from 'react'

export const themeContext = createContext();
export default function Themecomex1({Children}) {
    const [theme,setTheme] = useState("light")

    const toggleTheme = () => {
        setTheme((prevTheme) => prevTheme === "light" ? "dark" : "light")
        // setTheme(theme === "light" ? "dark" : "light")
    }
  return (
    <div>
        <themeContext.Provider value={{theme,toggleTheme}}>
            {Children}
        </themeContext.Provider>
    </div>
  )
}
