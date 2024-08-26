import React from 'react'

export default function Stylesheet2() {
    const myStyle = {
        myContainer : {
            backgroundColor : "gray",
            color : "white",
            height : "100px"
        },
        myHeading : {
            backgroundColor : "yellow",
            color : "black"
        }
    }
  return (
    <div style={myStyle.myContainer}>
        <h1 style={myStyle.myHeading}>Hello Welcome</h1>
    </div>
  )
}
