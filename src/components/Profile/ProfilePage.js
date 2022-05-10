import React, {useContext} from "react";
import { AuthContext } from "../Providers/AuthProvider";

const ProfilePage = () => {
    const [auth] = useContext(AuthContext);

    return (
        <div style={{
            display: 'flex',
            flex: "1",
            flexDirection: "column",
            alignItems: 'center',
            minHeight: '100vh',
        }}>
            <h1>Anglers</h1>
            <h2>Hello {auth.name}</h2>
        </div>
    )
}

export default ProfilePage;