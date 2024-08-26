import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Reagistrationpage from './Reagistrationpage'
import Loginpage from './Loginpage'
import Dashbord from './Dashbord'
import Guest from './Guest'
import Editpage from './Editpage'
import Newpost from './Newpost'
import Viewpost from './Viewpost'
import Mypost from './Mypost'
import Allusers from './Allusers'
import Chatbox from './Chatbox'

export default function Router1() {
  return (
    <div>
        <BrowserRouter>
           <Routes>
              <Route path='/' element={<Reagistrationpage/>}></Route>
              <Route path='/login' element={<Loginpage/>}></Route>
              <Route path='/dashbord' element={<Dashbord/>}></Route>
              <Route path='/guest' element={<Guest/>} ></Route>
              <Route path='/edit/:uid' element={<Editpage/>}></Route>
              <Route path='/newpost' element={<Newpost/>}></Route>
              <Route path='/viewpost' element={<Viewpost/>}></Route>
              <Route path='/mypost' element={<Mypost/>}></Route>
              <Route path='/allusers' element={<Allusers/>}></Route>
              <Route path='/chatbox/:uid' element={<Chatbox/>}></Route>
           </Routes>
        </BrowserRouter>
    </div>
  )
}
