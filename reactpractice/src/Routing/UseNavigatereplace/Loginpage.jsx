import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Loginpage() {
  const navigate = useNavigate()
  return (
    <div><h1>Login</h1>
    <button onClick={()=>navigate("/homepage",{replace:true})}>Sign in</button></div>
  )
}



// import React from 'react'
// import { Navigate, useNavigate } from 'react-router-dom'

// export default function Login() {
//     const navigate = useNavigate()
//   return (
//     <div>
//         
//     </div>
//   )
// }
