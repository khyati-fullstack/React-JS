import React from 'react'
import Profile from './Extracom/Profile';
import Login from './Extracom/Login';

export default function Jsxexp3() {
    const islogin = false;
  return (
    <div>

        {
            /* ternary opreator or condition opreator
            ternary opreator divided in 3 parts ternary opreator represent with ?
            syntax : exp1 ? exp2 : exp3
            if exp1 true it will execute exp2 otherwise it will execute exp3*/
        }
        {islogin ? <Profile/> : <Login/>}
    </div>
  )
}
