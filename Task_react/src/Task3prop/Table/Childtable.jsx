import React from 'react'

export default function Childtable(props) {
  console.log(props);
  return (
    <div>
      <table border={1} style={{width:"50%" , margin:"0 auto"}}>
        <thead>
          <tr>
            <th>name</th>
            <th>subject</th>
            <th>City</th>
          </tr>
          </thead>
          <tbody>

            {
              props.listitemData.map((e,i)=>{
                return <tr key={i} >
              <td>{e.Name}</td>
              <td>{e.Subject}</td>
              <td>{e.City}</td>
          </tr>
              })
            }
            </tbody>
      </table>
    </div>
  )
}
