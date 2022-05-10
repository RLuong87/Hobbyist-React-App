import React, {useContext} from "react";
import Users from "../Users/Users";
import { AuthContext } from "../Providers/AuthProvider";

const ProfilePage = () => {
    const [auth] = useContext(AuthContext);

    return (
        <h1>
            Hello {auth.name}
        </h1>
    )
}

export default ProfilePage;