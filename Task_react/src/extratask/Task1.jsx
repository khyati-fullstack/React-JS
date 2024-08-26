import React, { useState } from 'react'

export default function Task1() {
    let [num,setNum] = useState("")
    let [no,setNo] = useState("")
    let [data,setData] = useState([])
    // let [data1,setData1] = useState([])


    let handleSubmit = (e) => {
        e.preventDefault()
        let rec = {num,no}
        setData([...data,rec])
        setNum("")
        setNo("")
    }

    // let plus = Number(num) + 1;
    // let pls = Number(no) + 1 ;


  return (
    <div>
        <form onSubmit={handleSubmit}>
        <input type="number" value={num} onChange={(e)=>setNum(e.target.value)}/>
        <input type="number" value={no} onChange={(e)=>setNo(e.target.value)}/>
        <button type='submit'>Click</button>
        </form>
        <div>
            {
                data.map((e,i)=>{
                    return <p key={i}>
                        <p>{e.num}</p>
                        <p>{e.no}</p>
                        <hr />
                    </p>
                })
            }
        </div>
        <div>
            <p>{Number(num)+1}</p>
            <p>{Number(no)+1}</p>

        </div>
    </div>
  )
}
