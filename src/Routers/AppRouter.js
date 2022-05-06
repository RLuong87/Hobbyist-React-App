import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../components/Home/Home";
import Navbar from "../Navbar/Navbar";
import OpenWeather from "../components/Weather/OpenWeather";
import Profile from "../components/Auth/Profile";
import Register from "../components/Auth/Register";
import Login from "../components/Auth/Login";

const AppRouter = () => {
    return (
        <div style={{ width: "100%", flexDirection: "column" }}>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/signup" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/weather" element={<OpenWeather />} />
                <Route path="/profile" element={<Profile /> } />
            </Routes>
        </div>
    )
}

export default AppRouter;