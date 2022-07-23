import React, { useContext, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { apiHostUrl } from "../../config";
import { useParams, useNavigate } from "react-router-dom";
import Spinner from '../faCommon/Spinner';
import axios from "axios";

const DeleteContent = () => {

    const [auth] = useContext(AuthContext);
    const params = useParams();
    let navigate = useNavigate();

    const [content] = useState({
        id: params.contentId
    });

    const deleteContent = () => {
        try {
            axios.delete(`${apiHostUrl}/api/content/${content.id}`)
        } catch (err) {
            console.error(err.response ? err.response.data : err.message);
        }
    }

    return (
        <div>
        </div>
    )
}

export default DeleteContent;