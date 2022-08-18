import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { apiHostUrl } from "../../config";
import { AuthContext } from "../Providers/AuthProvider";
import BorderCard from "../common/BorderCard";

const PublicContent = () => {

    const [auth] = useContext(AuthContext);
    const params = useParams();

    const [content, setContent] = useState({
        id: params.contentId
    });

    useEffect(() => {
        const _getPublicContent = async () => {
            const res = await axios.get(`${apiHostUrl}/api/user/customers/${content.id}`,
                {
                    headers: {
                        Authorization: `Bearer ${auth.token}`
                    }
                })
            console.log(res.data);
            setContent(res.data)
        }
        _getPublicContent()
    }, [auth.token])

    return (
        <BorderCard style={{
            width: 500
        }}>
            <div className="upper-container2">
                <p>{content.localDateTime}</p>
                <h2>{content.name}</h2>
            </div>
            <div className="lower-container">
                <h4>{content.user}</h4>
            </div>
        </BorderCard>
    )
}

export default PublicContent;