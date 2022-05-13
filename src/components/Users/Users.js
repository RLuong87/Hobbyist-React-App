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
                console.log(res.data);
                setAuth({ ...auth, name: res.data.name })
                setLoading(false)
                setUsers(res.data)
            } catch (err) {
                console.log(err.response ? err.response.data : err.message);
            }
        }
        setLoading(true)
        _getUsers();
    }, [auth.token])

    const displayUsers = () => {
        return users.map(cust => <User customer={cust} key={cust.id} onSelect={onSelect} />)
    }

    const onSelect = (userId) => {
        navigate(`/users/${userId}`)
    }

    return (
        <div style={{
            display: 'flex',
            flex: "1",
            flexDirection: "column",
            alignItems: 'center',
            minHeight: '100vh',
        }}>
            <h1>Search for Anglers</h1>
            {loading ?
                <Spinner />
                :
                // displayUsers()
                <div className='search-box'>
                    <input
                        type="text"
                        className="search-bar"
                        placeholder="Search..."
                        // onChange={e => setQuery(e.target.value)}
                        // value={}
                        // onKeyPress={search}
                    />
                </div>}
            {/* } */}
        </div>
    )
}

export default Users;