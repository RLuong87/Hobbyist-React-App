import React from "react";
import Card from './Card';
import ContentCard from "./ContentCard";

const ProfilePage = () => {

    return (
        <div className="profile-background">
            <div className="Profile">
                <Card />
            </div>
            <div className="align-content">
                <ContentCard />
            </div>
        </div>
    )
}

export default ProfilePage;