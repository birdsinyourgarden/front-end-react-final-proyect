import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from "../views/home/Home";
import Profile from "../views/profile/Profile";
//import Register from "../views/register/Register";
import LocalNavbar from "../components/localNavbar/LocalNavbar";
import Footer from "../components/footer/Footer";
import Employees from "../views/employees/Employees";
import Absences from "../views/absences/Absences";
import Solicitudes from "../views/solicitudes/solicitudes";
import LocalLogin from "../views/login/Local_Login";
import HomeUser from "../views/homeUser/HomeUser";



const Router = () => {

    const token=1

return (
    <BrowserRouter>
        <LocalNavbar />
    <Routes>
        <Route path="/" element={<LocalLogin />} />
        <Route path="/home" element={<Home  />} />
        <Route path="/employees" element={<Employees />} />
        <Route path="/absences" element={<Absences />} />
        <Route path="/solicitudes" element={<Solicitudes />} />
        <Route path="/homeUser" element={< HomeUser />} />
    </Routes>
    <Footer />
    </BrowserRouter>
);
};

export default Router;
