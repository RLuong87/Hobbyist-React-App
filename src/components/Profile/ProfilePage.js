import React from "react";
import CreateContent from "../Auth/CreateContent";
import ContentCard from "./ContentCard";
import Card from './Card';

const ProfilePage = () => {

    return (
        <div className="profile-background">
            <div className="Profile">
                <Card />
            </div>
            <CreateContent />
            <ContentCard />
        </div>
    )
}

export default ProfilePage;