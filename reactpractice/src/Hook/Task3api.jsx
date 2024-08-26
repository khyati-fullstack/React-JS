import React, { useEffect, useState } from 'react'

export default function Task3api() {
    const [data,setData] = useState ([]);

    const fetchData = async() => {
        const response = await fetch("https://fakestoreapi.com/products")
        const res = await response.json()
        setData(res);
    }

    useEffect(()=>{
        fetchData()
    },[])

  return (
    <div>
            {
            !data.length == 0
            ?
            data.map((e,i) => {
                return <div key={i} style={{width : "10%" , height : "400px" , border : "1px"}}>
                    <h1>{e.id}</h1>
                    <h6>{e.title}</h6>
                    <h3>{e.price}</h3> 
                    <h3>{e.category}</h3> 
                    <img src={e.image} alt="" style={{width : '60px' , height : '60px'}} />
                    {/* <h3>{e.rating}</h3>  */}
                </div>
            })
            :
            "loding here..."
        }
        </div>
  )
}








