import React, { useContext } from 'react'
import { themeContext } from './Themecomex1'

export default function Themecomex2() {
    const {theme,toggleTheme} = useContext(themeContext)

    const myStyle = {
        backgroundColor : theme === "light" ? "white" : "light" ,
        color : theme === "light" ? "black" : "white" 
    }
  return (
    <div style={{backgroundColor:myStyle.backgroundColor,color:myStyle.color}}>
        <h1>Current Theme is</h1>
        <button onClick={toggleTheme}>Change Theme</button>
    </div>
  )
}
