import React, { useContext, useState } from "react";
import { apiHostUrl } from "../../config";
import { AuthContext } from "../Providers/AuthProvider";
import { useNavigate } from 'react-router-dom';
import Spinner from "../faCommon/Spinner";
import User from "./User";
import axios from "axios";
import BorderCard from "../common/BorderCard";

const SearchUser = () => {

    const [auth] = useContext(AuthContext);
    const [users, setData] = useState([]);
    const [query, setQuery] = useState([]);
    let navigate = useNavigate();

    const onSubmit = () => {
        const data = users;
        search(data)
    }

    const search = async () => {
        try {
            const res = await axios.get(`${apiHostUrl}/api/customers/name/${query}`,
                {
                    headers: {
                        Authorization: `Bearer ${auth.token}`
                    }
                })
            setData(res.data)
            console.log(res.data);
        } catch (err) {
            console.error(err.response ? err.response.data : err.message);
        }
    }

    const display = () => {
        return users.map(u => <User user={u} key={u.id} onSelect={onSelect} />)
    }

    const onSelect = (userName) => {
        navigate(`/users/${userName}`)
    }

    return (
        <BorderCard style={{
            display: "flex", justifyContent: "center"
        }}>
            <div className="search-box">
                <h1 className="greet">Search for an Angler</h1>
                <input
                    type="text"
                    className="search-bar"
                    placeholder="Search..."
                    onChange={e => setQuery(e.target.value)}
                    value={query}
                />
                <button className="btn3" onClick={onSubmit}>Go</button>
                <div>
                    {typeof users.main != "undefined" ?
                        <Spinner />
                        :
                        display()
                    }
                </div>
            </div>
        </BorderCard>
    )
}

export default SearchUser;