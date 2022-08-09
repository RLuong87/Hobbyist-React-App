import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import Spinner from "../faCommon/Spinner";
import User from './User';
import axios from "axios";
import { apiHostUrl } from "../../config";
import { useNavigate } from 'react-router-dom';

const Users = () => {
    const [auth] = useContext(AuthContext);
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    let navigate = useNavigate();
    // useEffect to pull list of users
    // useState to store the users
    // need bearer token to get the user list

    useEffect(() => {
        const _getUsers = async () => {
            try {
                const res = await axios.get(
                    `${apiHostUrl}/api/customers`,
                    {
                        headers: {
                            Authorization: `Bearer ${auth.token}`
                        }
                    }
                )
                console.log(res.data);
                setUsers(res.data)
                setLoading(false)
            } catch (err) {
                console.error(err.response ? err.response.data : err.message);
            }
        }
        setLoading(true)
        _getUsers();
    })

    const displayUsers = () => {
        return users.map(u => <User user={u} key={u.id} onSelect={onSelect} />)
    }

    const onSelect = (userId) => {
        navigate(`/users/${userId}`)
    }

    return (
        <div className="users-page">
            <div style={{
                margin: "0 20px",
                display: 'flex',
                flexDirection: "column",
                alignItems: 'center',
            }}>
                {loading ?
                    <Spinner />
                    :
                    displayUsers()
                }
            </div>
        </div>
    )
}

export default Users;