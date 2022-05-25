import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { apiHostUrl } from "../../config";
import { AuthContext } from "../Providers/AuthProvider";
import BorderCard from "../common/BorderCard";
import Card from './Card';

const Profile = (props) => {
    const params = useParams();
    const [loading, setLoading] = useState(true);
    const [auth] = useContext(AuthContext);

    const [user, setUser] = useState({
        id: params.userId
    });

    useEffect(() => {
        const _getUser = async () => {
            const res = await axios.get(`${apiHostUrl}/customers/${user.id}`,
                {
                    headers: {
                        Authorization: `Bearer ${auth.token}`
                    }
                }
            )
            console.log(res.data);
            setUser(res.data);
        }
        _getUser()
    }, [])

    return (
        <div className="Card">
            <h1>{user.name}</h1>
            <h2>{user.about}</h2>
            <h4>{user.location}</h4>
        </div>
    )
}

export default Profile;