import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { apiHostUrl } from "../../config";
import { AuthContext } from "../Providers/AuthProvider";

const Profile = (props) => {

    const params = useParams();
    const [auth, setAuth] = useContext(AuthContext);

    const [user, setUser] = useState({
        id: params.userId
    });

    useEffect(() => {
        const _getUser = async () => {
            try {
                const res = await axios.get(`${apiHostUrl}/api/customers/${user.id}`,
                    {
                        headers: {
                            "Authorization": `Bearer ${auth.token}`
                        }
                    })
                setAuth({
                    ...auth
                })
                setUser(res.data);
                console.log(res.data);
            } catch (err) {
                console.error(err.response ? err.response.data : err.message);
            }
            _getUser()
        }
    })

    return (
        <div className="Card">
            <h1>{user.name}</h1>
            <h2>{user.about}</h2>
            <h4>{user.location}</h4>
        </div>
    )
}

export default Profile;