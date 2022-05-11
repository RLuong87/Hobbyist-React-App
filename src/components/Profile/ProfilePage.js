import React, { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import BorderCard from "../common/BorderCard";

const ProfilePage = () => {
    const [auth] = useContext(AuthContext);

    return (
        <BorderCard>
            <div style={{
                display: 'flex',
                flex: "1",
                flexDirection: "column",
                alignItems: 'center',
                minHeight: '100vh',
            }}>
                <h2>{auth.name}</h2>
            </div>
        </BorderCard>
    )
}

export default ProfilePage;