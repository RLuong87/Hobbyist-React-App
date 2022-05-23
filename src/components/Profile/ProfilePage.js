import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from './Card';
import ContentCard from "./ContentCard";
import Profile from "./Profile";

const ProfilePage = () => {

    return (
        <div className="social-pic">
            <div className="Profile">
                <Card />
                <ContentCard />
            </div>
        </div>
    )
}

export default ProfilePage;