import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import Spinner from "../faCommon/Spinner";
import axios from "axios";
import { apiHostUrl } from "../../config";

const Users = (props) => {

    const [auth] = useContext(AuthContext);
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    // useEffect to pull list of users
    // useState to store the users
    // need bearer token to get the user list

    useEffect(() => {
        const _getUsers = async (token) => {
            try {

                const res = await axios.get(`${apiHostUrl}/customers`,
                    {
                        headers: {
                            "Authorization": `Bearer ${token}`
                        }
                    }
                )
                console.log(res.data);
            } catch (err) {
                console.log(err.response.message);
            }
        }
        _getUsers();
    }, [])

    return (
        <div style={{
            display: 'flex',
            flex: "1",
            flexDirection: "column",
            alignItems: 'center',
            minHeight: '100vh',
        }}>
            <h1>Hello</h1>
            <h2>Anglers <br/>{auth.name}</h2>
        </div>
    )
}

export default Users;