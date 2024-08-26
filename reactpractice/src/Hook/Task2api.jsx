import React, { useEffect, useState } from 'react'

export default function Task2api() {
    const [data,setData] = useState ([]);

    const fetchData = async() => {
        const response = await fetch("https://reqres.in/api/users?page=2")
        const res = await response.json()
        console.log(res);
        setData(res.data);
    }

    useEffect(() => {
        fetchData();
    },[])

  return (
    <div>
        {console.log(data)}
            {
            !data.length == 0
            ?
            data.map((e,i) => {
                return <div key={i}>
                    <h1>{e.id}</h1>
                    <h2>{e.email}</h2>
                    <h3>{e.first_name}{e.last_name}</h3>
                    <img src={e.avatar} alt="" />
                </div>
            })
            :
            "loding here..."
        }
        </div>
  )
}








