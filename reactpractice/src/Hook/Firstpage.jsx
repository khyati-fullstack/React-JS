import React, { useEffect, useState } from 'react'
import Secondpage from './Secondpage'

export default function Firstpage() {
    let [data,setData] = useState ([])
    let [itemdata,setItemdata] = useState ("")

    let fetchData = async() => {
        let response = await fetch ("https://jsonplaceholder.typicode.com/posts")
        let res = await response.json()
        setData(res.data)
    }
    useEffect (() => {
        fetchData();
    },[])

  return (
    <div>
        <input type="text" />
        <Secondpage data = {data}/>
    </div>
  )
}
