import React, { useState, useContext, useEffect } from "react";
import { Link, useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from "../Providers/AuthProvider";
import UpdateContentForm from "./UpdateContentForm";
import axios from "axios";
import { apiHostUrl } from "../../config";

const UpdateContent = () => {

    const [auth] = useContext(AuthContext);
    const params = useParams();
    let navigate = useNavigate();

    const [content] = useState({
        id: params.contentId
    });

    const [newContent, setNewContent] = useState({
        picture: auth.picture ? auth.picture : "",
        content: auth.content ? auth.content : ""
    })

    const updateForm = (field, value) => {
        setNewContent({
            ...newContent,
            [field]: value
        })
    }

    const onSubmit = () => {
        alert("Success")
        const data = newContent;
        updateContent(data);
    }

    const updateContent = async (data) => {
        try {
            const res = await axios.put(`${apiHostUrl}/api/customers/content/${content.id}`,
                data,
                {
                    headers: {
                        Authorization: `Bearer ${auth.token}`
                    }
                }
            )
            navigate("/profilePage")
        } catch (err) {
            console.error(err.response ? err.response.data : err.message);
        }
    }

    return (
        <div style={{
            textAlign: "center",
            marginTop: "20px"
        }}>
            <h1>{auth.name}</h1>
            <Link to="/profilePage">
                <div className="image-container5">
                    <img src={auth.avatar} />
                </div>
            </Link>
            <div className="align-content">
                <UpdateContentForm
                    newContent={newContent}
                    onChange={updateForm}
                    onSubmit={onSubmit}
                />
            </div>
        </div>
    )
}

export default UpdateContent;