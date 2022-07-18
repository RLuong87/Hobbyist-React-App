import React, { useContext, useEffect } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Link } from "react-router-dom";
import splashImg from '../../assets/fishing/ice-fishing.jpg';
import TextArea from "../common/TextArea";
import { apiHostUrl } from "../../config";
import axios from "axios";
import './ContentCard.css';

export default function ContentCard() {

    const [auth, setAuth] = useContext(AuthContext);

    useEffect(() => {
        const _getSelfContent = async () => {
            try {
                const res = await axios.get(`${apiHostUrl}/api/content/selfContent`,
                    {
                        headers: {
                            "Authorization": `Bearer ${auth.token}`
                        }
                    })
                setAuth({
                    ...auth,
                    name: res.data.name,
                    content: {
                        title: res.data.title,
                        content: res.data.content
                    }
                })
                console.log(res.data);
            } catch (err) {
                console.error(err.response ? err.response.data : err.message);
            }
        }
        _getSelfContent()
    }, [auth.token])

    return (
        <div className="Content-card">
            <div className="lower-container">
                <TextArea />
                <Link to="/createContent">
                    <button className="content-btn">Create a post</button>
                </Link>
                <h1> {auth.name} </h1>
                <h2>First time ice fishing! #funtimes</h2>
                <div className="image-container2">
                    <img src={splashImg} />
                </div>
            </div>
        </div>
    )
}