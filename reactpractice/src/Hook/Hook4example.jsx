import React, { useEffect, useState } from 'react'

export default function Hook4example() {
    const [data,setData] = useState(null)
    useEffect(()=>{
        fetchData();

    },[])

    const fetchData = async() => {
        const response = await fetch("https://jsonplaceholder.typicode.com/albums")
        const res = await response.json();
        setData(res)
    }
    
  return (
    <div>
        {
            data 
            ? 
            data.map((e,i) => {
                return <h1 key={i}>{e.title}</h1>
            })
            :
            <p>loding here....</p>
        }
    </div>
  )
}
