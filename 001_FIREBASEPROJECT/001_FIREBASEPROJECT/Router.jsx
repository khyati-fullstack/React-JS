import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Alluser from "./Alluser";
import Chatscreen from "./Chatscreen";
import Dashboard from "./Dashboard";
import Editpage from "./Editpage";
import Guest from "./Guest";
import Login from "./Login";
import Newpost from "./Newpost";
import Registerpage from "./Registerpage";
import Viewpage1 from "./Viewpage1";

export default function Router() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Registerpage />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/guest" element={<Guest />}></Route>
          <Route path="/edit/:uid" element={<Editpage />}></Route>
          <Route path="/newpost" element={<Newpost />}></Route>
          <Route path="/viewpost" element={<Viewpage1 />}></Route>
          <Route path="/allpost" element={<Alluser />}></Route>
          <Route path="/chatscreen/:uid" element={<Chatscreen />}></Route>

          {/* <Route path="/viewpost" element={<ViewPost />}></Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}
