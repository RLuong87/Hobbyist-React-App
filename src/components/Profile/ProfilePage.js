import React from "react";
import Card from './Card';
import ContentCard from "./ContentCard";

const ProfilePage = () => {

    return (
        <div className="profile-background">
            <div className="Profile">
                <Card />
            </div>
            <ContentCard />
        </div>
    )
}

export default ProfilePage;