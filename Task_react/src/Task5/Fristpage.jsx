import React, { useEffect, useState } from 'react'

export default function Fristpage() {
    let [para,setPara] = useState("")
    let [data,setData] = useState ("")

    // useEffect(()=>{
    //     setData(lwcs.toLowerCase())
    // },[])

    let handleClick = () => {
    let wordcnt = (e) => {
    return e.split(/\s+/).length;
    }
    setData(wordcnt(para));
    }

    let handleReset = () => {
      setData(para.toLowerCase())
      // setPara("")
    }
  return (
    <div style={{display : "flex"}}>
        <div>
        <input style={{border : "1" , height : "200px" , width : "100%"}} type="text" value={para} onChange={(e)=>setPara(e?.target?.value)}/>
        {/* <textarea name="" id="" value={para} onChange={(e)=>setPara(e?.target?.value)}></textarea> */}
        <br /> <br />
        <button onClick={()=>setData(para.toLowerCase())}>LowerCase</button>
        <button onClick={()=>setData(para.toUpperCase())}>UpperCase</button>
        <button onClick={()=>setData(para.split(" ").map((elm)=>elm[0].toUpperCase()+elm.slice(1)).join(" "))}>Capitalize</button> <br />
        <button onClick={()=>setData(para.length)}>Character length</button>
        <button onClick={handleClick}>World Length</button> <br />
        <button onClick={() => setData(para.trim().split("").reverse().join(""))}>Reverse word</button>
        <button onClick={handleReset}>Rsest</button>
        </div>
        <div style={{border : "1" , height : "20px" , width : "10%"}}>
        <p>{data}</p>
        </div>
    </div>
  )
}
