import React, { useState } from 'react'

export default function Fontsizechange() {
    let [fontsize,setFontsize] = useState(30)

    
  return (
    <div>
        <h1 style={{fontSize : fontsize}}>Hello</h1>
        <button onClick={() => setFontsize(fontsize + 1)}>Plus</button>
        <button onClick={() => setFontsize (fontsize - 1)}>minus</button>
    </div>
  )
}
