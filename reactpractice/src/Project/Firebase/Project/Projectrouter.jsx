import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Adminloginpage from './Adminloginpage'
import Userloginpage from './Userloginpage'
import UserProfilepage from './UserProfilepage'
import Newcreatepage from './Newcreatepage'
import AdminProfilepage from './AdminProfilepage'
import AddPost from './AddPost'

export default function Projectrouter() {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Newcreatepage/>}></Route>
                <Route path='/loginpage' element={<Userloginpage/>}></Route>
                <Route path='/userprofile' element={<UserProfilepage/>}></Route>
                <Route path='/adminlogin' element={<Adminloginpage/>}></Route>
                <Route path='/adminprofile' element={<AdminProfilepage/>}></Route>
                <Route path='/addpost' element={<AddPost/>}></Route>
            </Routes>
        </BrowserRouter>
    </div>
  )
}
