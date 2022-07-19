import React from "react";
import Card from './Card';
import ContentCard from "./ContentCard";

const ProfilePage = () => {

    return (
        <div className="Profile">
            <div className="profile-background">
                <Card />
                <ContentCard />
            </div>
        </div>
    )
}

export default ProfilePage;