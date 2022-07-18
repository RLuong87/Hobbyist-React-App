import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Link } from "react-router-dom";
import splashImg from '../../assets/fishing/ice-fishing.jpg';
import TextArea from "../common/TextArea";
import { apiHostUrl } from "../../config";
import Content from './Content'
import axios from "axios";
import Spinner from "../faCommon/Spinner";
import './ContentCard.css';

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
        <div className="Content-card">
            <div className="lower-container">
                <TextArea />
                <Link to="/createContent">
                    <button className="content-btn">Create a post</button>
                </Link>
                <h1> {auth.name} </h1>
                <div className="image-container2">
                    {loading ?
                        <Spinner />
                        :
                        displayContent()
                    }
                </div>
            </div>
        </div>
    )
}