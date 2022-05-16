import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../components/Home/Home";
import Navbar2 from "../Navbar/Navbar2";
import Navbar from "../Navbar/Navbar";
import OpenWeather from "../components/Weather/OpenWeather";
import CreateProfile from "../components/Auth/CreateProfile";
import Register from "../components/Auth/Register";
import Login from "../components/Auth/Login";
import ProfilePage from "../components/Users/User";
import Users from "../components/Users/Users";
import ProfileCard from "../components/Profile/ProfileCard";
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
                <Route path="/profilecard" element={<ProfileCard />} />
                <Route path="/logout" element={<Logout />} />
            </Routes>
        </div>
    )
}

export default AppRouter;