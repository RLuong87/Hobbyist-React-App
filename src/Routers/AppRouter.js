import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../components/Home/Home";
import Navbar2 from "../Navbar/Navbar2";
import OpenWeather from "../components/Weather/OpenWeather";
import CreateProfile from "../components/Auth/CreateProfile";
import Register from "../components/Auth/Register";
import Login from "../components/Auth/Login";
import ProfilePage from "../components/Profile/ProfilePage";
import Logout from '../components/Auth/Logout'
import Profile from "../components/Profile/Profile";
import SearchUser from "../components/Users/SearchUser";
import CreateContent from "../components/Auth/CreateContent"
import DeleteContent from "../components/Auth/DeleteContent";
import UpdateContent from "../components/Auth/UpdateContent";
import WeatherFiveDay from "../components/Weather/WeatherFiveDay";

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
                <Route path="/createContent" element={<CreateContent />} />
                <Route path="/profilepage" element={<ProfilePage />} />
                <Route path="/logout" element={<Logout />} />
                <Route path="/users/:userId" element={<Profile />} />
                <Route path="/search" element={<SearchUser />} />
                <Route path="/delete/:contentId" element={<DeleteContent />} />
                <Route path="/update/:contentId" element={<UpdateContent />} />
                <Route path="/fiveDayForecast" element={<WeatherFiveDay />} />
            </Routes>
        </div>
    )
}

export default AppRouter;