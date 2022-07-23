import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Link } from "react-router-dom";
import { apiHostUrl } from "../../config";
import Spinner from "../faCommon/Spinner";
import DeleteContent from "./DeleteContent";
import Content from './Content'
import './ContentCard.css';
import axios from "axios";

export default function ContentCard() {

    const [auth, setAuth] = useContext(AuthContext);
    const [content, setContent] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const _getSelfContent = async () => {
            try {
                const res = await axios.get(`${apiHostUrl}/api/content/selfContent`,
                    {
                        headers: {
                            "Authorization": `Bearer ${auth.token}`
                        }
                    })
                setContent(res.data)
                console.log(res.data);
                setLoading(false)
            } catch (err) {
                console.error(err.response ? err.response.data : err.message);
            }
        }
        setLoading(true)
        _getSelfContent()
    }, [auth.token])

    const displayContent = () => {
        return content.content.map(con => <Content contents={con} key={con.id} />)
    }

    return (
        <div className="image-container2">
            <div className="Content-card">
                <Link to="/createContent">
                    <button className="content-btn">Create a post</button>
                </Link>
            </div>
            <div className="align-content">
                {loading ?
                    <Spinner />
                    :
                    displayContent()
                }
            </div>
        </div>
    )
}