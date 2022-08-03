import React, { useContext, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { apiHostUrl } from "../../config";
import { useParams, useNavigate } from "react-router-dom";
import BorderCard from "../common/BorderCard";
import axios from "axios";

const DeleteContent = () => {

    const [auth] = useContext(AuthContext);
    const params = useParams();
    let navigate = useNavigate();

    const [content] = useState({
        id: params.contentId
    });

    const deleteContent = async () => {
        try {
            axios.delete(`${apiHostUrl}/api/content/${content.id}`,
                {
                    headers: {
                        Authorization: `Bearer ${auth.token}`
                    }
                })
        } catch (err) {
            console.error(err.response ? err.response.data : err.message);
        }
    }

    const onClick = () => {
        deleteContent();
        alert("Post successfully deleted")
        navigate("/profilePage")
    }

    const cancel = () => {
        navigate("/profilePage")
    }

    return (
        <div className="align-content">
            <BorderCard>
                <div style={{
                    textAlign: "center"
                }}>
                    <h2>Are you sure you want to delete this post?</h2>
                    <button className="btn3" onClick={onClick}>Confirm</button>
                    <button className="btn3" onClick={cancel}>Cancel</button>
                </div>
            </BorderCard>
        </div>
    )
}

export default DeleteContent;