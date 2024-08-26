import React, { useState } from 'react'

export default function State4example() {
    let [isvisible,setVisible] = useState (false)

    // let handleEvent = () => {
    //     if (isvisible) {
    //         setVisible(false)
    //     }
    //     else {
    //         setVisible(true)
    //     }
    //     // setVisible(!isvisible)
    // }

  return (
    <div>
        {
            isvisible 
            ?
            <h1>Hello Welcome</h1> 
            :
            <h3>h1 is hidden</h3>
        }
        
        <button onClick={() => setVisible(!isvisible)}>Click me</button>
    </div>
  )
}
