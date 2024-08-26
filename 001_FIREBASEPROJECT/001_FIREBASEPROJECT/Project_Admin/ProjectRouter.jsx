import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "../Dashboard";
import Admin from "./Admin";
import Adminlognin from "./Adminlognin";
import Adminprofile from "./Adminprofile";
import Chat from "./Chat";
import DashboardPro from "./DashboardPro";
import Extra1 from "./Extra1";
import User from "./User";

export default function ProjectRouter() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Extra1></Extra1>}></Route> */}
          <Route path="/" element={<Admin />}></Route>
          <Route path="/user" element={<User />}></Route>
          <Route path="/admin" element={<Adminlognin />}></Route>
          <Route path="/Adminpro" element={<Adminprofile />}></Route>
          <Route path="/chat" element={<Chat />}></Route>

          <Route
            path="/dashboardPro"
            element={<DashboardPro></DashboardPro>}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
