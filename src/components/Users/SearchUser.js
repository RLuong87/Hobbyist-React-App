import React, { useContext, useState } from "react";
import { apiHostUrl } from "../../config";
import { AuthContext } from "../Providers/AuthProvider";
import { Autocomplete } from "@mui/material";
import axios from "axios";

const SearchUser = () => {

    const [auth, setAuth] = useContext(AuthContext);
    const [userData, setData] = useState([]);
    const [query, setQuery] = useState([]);

    const onSubmit = () => {
        const data = userData;
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

    return (
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
            <div className="Card">
            </div>
        </div>
    )
}

export default SearchUser;