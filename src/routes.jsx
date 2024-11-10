import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import HomePage from "./Components/Home/Home";
import CadastroPage from "./Pages/CadastroPage";


function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/cadastro" element={<CadastroPage/>} />
            </Routes>
        </Router>
    );
}

export default AppRoutes;
