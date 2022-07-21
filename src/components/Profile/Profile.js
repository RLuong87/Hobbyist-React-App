import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { apiHostUrl } from "../../config";
import { AuthContext } from "../Providers/AuthProvider";

const Profile = () => {

    const params = useParams();
    const [auth] = useContext(AuthContext);

    const [user, setUser] = useState({
        id: params.userId
    });

    useEffect(() => {
        const _getUser = async () => {
            const res = await axios.get(`${apiHostUrl}/api/customers/${user.id}`,
                {
                    headers: {
                        Authorization: `Bearer ${auth.token}`
                    }
                })
            console.log(res.data);
            setUser(res.data)
        }
        _getUser()
    }, [auth.token])

    return (
        <div className="Card">
            <div className="upper-container">
                <h1>{user.name}</h1>
            </div>
            <div className="lower-container">
                <h2>{user.about}</h2>
                <h4>{user.location}</h4>
            </div>
        </div>
    )
}

export default Profile;