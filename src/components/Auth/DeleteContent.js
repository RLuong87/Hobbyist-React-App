import React, { useContext, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { apiHostUrl } from "../../config";
import { useParams, useNavigate } from "react-router-dom";
import Spinner from '../faCommon/Spinner';
import axios from "axios";
import BorderCard from "../common/BorderCard";

const DeleteContent = () => {

    const [auth] = useContext(AuthContext);
    const params = useParams();
    let navigate = useNavigate();

    const [content] = useState({
        id: params.contentId
    });

    const deleteContent = () => {
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
        <div>
            <h2>Are you sure you want to delete this post?</h2>
            <button className="btn3" onClick={onClick}>Confirm</button>
            <button className="btn3" onClick={cancel}>Cancel</button>
        </div>
    )
}

export default DeleteContent;