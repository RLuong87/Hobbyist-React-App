import React, { useState, useContext } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from "../Providers/AuthProvider";
import UpdateContentForm from "./UpdateContentForm";
import axios from "axios";
import { apiHostUrl } from "../../config";

const UpdateContent = () => {

    const [auth, setAuth] = useContext(AuthContext);
    const params = useParams();
    let navigate = useNavigate();

    const [content] = useState({
        id: params.contentId
    });

    const [newContent, setNewContent] = useState({
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
        navigate("/profilePage")
    }

    const updateContent = async (data) => {
        try {
            const res = await axios.put(`${apiHostUrl}/api/customers/content/${content.id}`,
                data,
                {
                    headers: {
                        Authorization: `Bearer ${auth.token}`
                    }
                })
            setAuth({
                ...auth,
                content: res.data.content
            })
        } catch (err) {
            console.error(err.response ? err.response.data : err.message);
        }
    }

    return (
        <div>
            <h1>{auth.name}</h1>
            <UpdateContentForm
                newContent={newContent}
                onChange={updateForm}
                onSubmit={onSubmit}
            />
        </div>
    )
}

export default UpdateContent;