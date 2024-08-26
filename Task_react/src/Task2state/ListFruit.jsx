import React, { useState } from 'react'
import "./CSS/styletask2.css"

export default function ListFruit() {
    let [list,setList] = useState ([])
    let [fruitname , setFruitname] = useState("")

    let handleEvent = () => {
        setList([...list,fruitname])
        setFruitname("")
    }
  return (
    <div className='bgimg'>
        <input type="text" placeholder='Enetr Fruitname'value={fruitname} onChange={(e) => setFruitname(e?.target?.value)}/>
        
        <button onClick={handleEvent} style={{margin : "10px"}}>Add</button>
        <ol style={{}}>
            {
                list.map((e,i) => {
                    return <li key={i}  style={{backgroundColor : "pink", color : "gray" , fontSize : "20px" , fontStyle : "italic", margin : "10px" ,padding : "10px" ,width : "90px"}}  >{e}</li> 
                })
            }
        </ol>

    </div>
  )
}
