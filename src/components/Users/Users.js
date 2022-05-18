import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import Spinner from "../faCommon/Spinner";
import User from './User';
import axios from "axios";
import { apiHostUrl } from "../../config";
import { Navigate } from 'react-router-dom';

const Users = (props) => {

    const [auth, setAuth] = useContext(AuthContext);
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    let navigate = Navigate;
    // useEffect to pull list of users
    // useState to store the users
    // need bearer token to get the user list

    useEffect(() => {
        const _getUsers = async () => {
            try {

                const res = await axios.get(`${apiHostUrl}/customers`,
                    {
                        headers: {
                            "Authorization": `Bearer ${auth.token}`
                        }
                    }
                )
                setUsers(res.data)
                setLoading(false)
            } catch (err) {
                console.log(err.response ? err.response.data : err.message);
            }
        }
        setLoading(true)
        _getUsers();
    }, [auth.token])

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
                <h1 className="greet">Search for an Angler</h1>
                <div className="search-box">
                    <input
                        type="text"
                        className="search-bar"
                        placeholder="Search..."
                    // onChange={e => setQuery(e.target.value)}
                    // value={query}
                    // onKeyPress={search}
                    />
                </div>
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