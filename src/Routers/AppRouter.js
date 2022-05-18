import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../components/Home/Home";
import Navbar2 from "../Navbar/Navbar2";
import Navbar from "../Navbar/Navbar";
import OpenWeather from "../components/Weather/OpenWeather";
import CreateProfile from "../components/Auth/CreateProfile";
import Register from "../components/Auth/Register";
import Login from "../components/Auth/Login";
import Users from "../components/Users/Users";
import ProfilePage from "../components/Profile/ProfilePage";
import Logout from '../components/Auth/Logout'

const AppRouter = () => {
    return (
        <div>
            <Navbar2 />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/signup" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/weather" element={<OpenWeather />} />
                <Route path="/createProfile" element={<CreateProfile />} />
                <Route path="/profilepage" element={<ProfilePage />} />
                <Route path="/users" element={<Users />} />
                <Route path="/logout" element={<Logout />} />
            </Routes>
        </div>
    )
}

export default AppRouter;