import React, { useState } from 'react'

export default function Reversedata() {
    let [list,setList] = useState([])
    let [reverse , setReverse] = useState ([])
    let [data,setData] = useState("")

    let hadleEvent = () => {
        setList([...list,data])
        setData("");
    }
    let reverseClick = () => {
        setReverse([...list].reverse())
        setData("");
    }
  return (
    <div>
        <input type="text" placeholder='Enetr Value' value={data} onChange={(e) => setData(e?.target?.value)}/>
        <br />
        <button onClick={hadleEvent} style={{margin : "10px"}}>Add</button>
        <button onClick={reverseClick} style={{margin : " 10px 5px"}}>Reverse</button>
        <br />
        <div style={{display : 'flex'}}>
        <ul>
            {
                list.map((e,i) =>{
                    return <li key={i}>{e}</li>
                })
            }
        </ul>
        <ul>
            {
                reverse.map((e,i) =>{
                    return <li key={i}>{e}</li>
                })
            }
        </ul>
        </div>
        {/* {list} */}
    </div>
  )
}
