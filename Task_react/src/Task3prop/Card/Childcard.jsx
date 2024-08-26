import React, { useState } from 'react'

export default function Childcard(props) {
  let [value,setValue] = useState (false)
  let idimg1 = "menlogo.avif"
  let idimg2 = "womenlogo.avif"
  return (
      <div className='card-section'>
      <div className = "card">
            <div className='title'>
            <h1>Id Card</h1>
            <h2>
              {
               props.gender === 'male'
              ?
              <img src={idimg1} alt="male logo" />
              :
              <img src={idimg2} alt="female logo" />
              }
            </h2>
            </div>
            <hr />
            <h3><i class="fa-solid fa-user"></i> <span>:</span> <p>{props.name}</p></h3>
            <h3><i class="fa-solid fa-envelope"></i><span>:</span><p>{props.mail}</p></h3>
            <h3><i class="fa-solid fa-location-dot"></i><span>:</span><p>{props.city}</p></h3>
            <h3><i class="fa-solid fa-book"></i><span>:</span><p>{props.subject}</p></h3>
            <h3><i class="fa-solid fa-person-half-dress"></i><span>:</span><p>{props.gender}</p></h3>
        </div>
        </div>
  )
}
