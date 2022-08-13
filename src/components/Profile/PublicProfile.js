import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { apiHostUrl } from "../../config";
import { AuthContext } from "../Providers/AuthProvider";
import PublicContent from "./PublicContent";

const Profile = () => {

    const [auth] = useContext(AuthContext);
    const params = useParams();

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
                <div classsName="image-container">
                    <img
                        src={user.avatar}
                        height={100}
                        />
                </div>
            </div>
            <div className="lower-container">
                <h3>{user.name}</h3>
                <button className="btn2">Add Friend</button>
                <h4>{user.status}</h4>
                <h4>{user.birthday}</h4>
                <h4>{user.location}</h4>
                <p>{user.about}</p>
            </div>
        </div>
    )
}

export default Profile;