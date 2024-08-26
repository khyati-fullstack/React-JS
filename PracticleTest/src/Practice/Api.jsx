import React, { useEffect, useState } from 'react'

export default function Api() {
    const [data,setData] = useState([])
    useEffect(()=>{
        fetchApi();
    },[])
    const fetchApi = async() => {
        const response = await fetch("https://jsonplaceholder.typicode.com/users")
        const alldata = await response.json();
        setData(alldata);
    }
    console.log(data);
  return (
    <div>
        <table border={1}>
            <thead>
                <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>username</th>
                    <th>email</th>
                    <th colSpan={4}>address</th>
                    {/* <th colSpan={2}>geo</th> */}
                    <th>phone</th>
                    <th>website</th>
                    <th colSpan={3}>company</th>
                </tr>
            </thead>
            <tbody>
            {
            data.map((e,i)=>{
               return <tr key={i}>
                <td>{e.id}</td>
                <td>{e.name}</td>
                <td>{e.username}</td>
                <td>{e.email}</td>
                <td>{e.address.street}</td>
                <td>{e.address.suite}</td>
                <td>{e.address.city}</td>
                <td>{e.address.zipcode}</td>
                {/* <td>{e.geo.lat}</td> */}
                {/* <td>{e.geo.lng}</td> */}
                <td>{e.phone}</td>
                <td>{e.website}</td>
                <td>{e.company.name}</td>
                <td>{e.company.catchPhrase}</td>
                <td>{e.company.bs}</td>
               </tr> 
            })
        }
            </tbody>
        </table>
        
    </div>
  )
}
