import React, { useContext, useEffect, useState } from "react";
import { apiHostUrl } from "../../config";
import { AuthContext } from "../Providers/AuthProvider";
import axios from "axios";

const SearchUser = () => {

    const [auth] = useContext(AuthContext);
    const [userData, setData] = useState([]);
    const [query, setQuery] = useState([]);

    // const search = (e, token, data) => {
    //     fetch(`${apiHostUrl}/test/name/${query}`, {
    //         method: 'GET',
    //         headers: {
    //             'Authorization': `Bearer ${token}`
    //         },
    //         body: JSON.stringify(data),
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             setData(data);
    //             setQuery('');
    //             console.log(data);
    //         })
    //         .catch((err) => {
    //             console.error('Error:', err);
    //         })
    // }

    const onSubmit = () => {
        search();
    }


    const search = async () => {
        const res = await axios.get(`${apiHostUrl}/test/name/${query}`,
            {
                Headers: {
                    "Authorization": `Bearer ${auth.token}`
                }
            })
        setQuery(res.data)
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
                onKeyPress={search}
            />
            <button onClick={onSubmit()}>Go</button>
        </div>
    )
}

export default SearchUser;