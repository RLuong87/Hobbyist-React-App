import React, { useEffect, useState } from "react";
import { apiHostUrl } from "../../config";
import axios from "axios";

const localHost = `http://localhost:8080/api/customers/name`

const SearchUser = () => {

    const [userData, setData] = useState([]);
    const [query, setQuery] = useState([]);

    useEffect(() => {
        search();
    })

    const search = e => {
        if (e === "Enter") {
            fetch(`${apiHostUrl}/api/customers/name/${query}`)
                .then(res => res.json())
                .then(data => {
                    setData(data);
                    setQuery('');
                });
        }
    }

    useEffect(() => {
        // getUserWithFetch();
        getUserWithAxios();
    }, [])

    const getUserWithFetch = async () => {
        const response = await fetch(localHost);
        const jsonData = await response.json();
        setData(jsonData);
    };

    const getUserWithAxios = async () => {
        const response = await axios.get(localHost);
        setData(response.data);
    }

    return (
        <div className="search-box">
            <input
                type="text"
                className="search-bar"
                placeholder="Search..."
                onChange={e => setQuery(e.target.value)}
                value={query}
                onKeyPress={search}
            />
            <h1>{userData.name}</h1>
        </div>
    )
}

export default SearchUser;