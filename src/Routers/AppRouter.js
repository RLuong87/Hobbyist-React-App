import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../components/Home/Home";
import Navbar from "../Navbar/Navbar";
import OpenWeather from "../components/Weather/OpenWeather";
import CreateProfile from "../components/Auth/CreateProfile";
import Register from "../components/Auth/Register";
import Login from "../components/Auth/Login";
import ProfilePage from "../components/Profile/ProfilePage";

const AppRouter = () => {
    return (
        <div style={{ width: "100%", flexDirection: "column" }}>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/signup" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/weather" element={<OpenWeather />} />
                <Route path="/profile" element={<CreateProfile /> } />
                <Route path="/profilepage" element={<ProfilePage /> } />
            </Routes>
        </div>
    )
}

export default AppRouter;