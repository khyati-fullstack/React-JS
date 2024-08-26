import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

export default function Homepage() {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate("/contact")
  }
  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={()=>handleClick()}>Go To Contact</button>
      <button onClick={()=>navigate("/about")}>Go To About</button>
      <button onClick={()=>navigate(1)}>Go To Next</button>

      <Link to={"/contact"}><h3>Contact Page</h3></Link>
      <Link to={"/about"}><h3>About Page</h3></Link>
    </div>
  )
}


// import React from 'react'
// import { useNavigate } from 'react-router-dom'

// export default function Homepage() {
//   const navigate = useNavigate();
//   const handleClick = () => {
//     navigate("/contact")
//   }
//   return (
//     <div>
//         <h1>Home Page</h1>
//         <button onClick={handleClick}>Click</button>
//     </div>
//   )
// }
