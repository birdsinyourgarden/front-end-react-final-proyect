import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from "../views/home/Home";
import Perfil from "../views/perfil/Perfil";
//import Register from "../views/register/Register";
import LocalNavbar from "../components/localNavbar/LocalNavbar";
import Footer from "../components/footer/Footer";
import Empleados from "../views/empleados/Empleados";
import Ausencias from "../views/ausencias/Ausencias";
import Solicitudes from "../views/solicitudes/solicitudes";
import LocalLogin from "../views/login/Local_Login";



const Router = () => {

    const token=1

return (
    <BrowserRouter>
        <LocalNavbar />
    <Routes>
        <Route path="/" element={<LocalLogin />} />
        <Route path="/home" element={<Home  />} />
        <Route path="/empleados" element={<Empleados />} />
        <Route path="/ausencias" element={<Ausencias />} />
        <Route path="/solicitudes" element={<Solicitudes />} />
            
    </Routes>
    <Footer />
    </BrowserRouter>
);
};

export default Router;
