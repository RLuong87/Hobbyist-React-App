import React, { useContext, useState, useEffect, useReducer } from "react";
import axios from "axios";
import Container from "../common/Container";
import ContentForm from "./ContentForm";
import { apiHostUrl } from "../../config";
import { AuthContext } from "../Providers/AuthProvider";
import { useNavigate } from "react-router-dom";

const CreateContent = () => {

    const [auth] = useContext(AuthContext);
    const navigate = useNavigate();

    const [newContent, setNewContent] = useState({
        content: ""
    })

    const updateForm = (field, value) => {
        setNewContent({
            ...newContent,
            [field]: value
        })
    }

    const onSubmit = () => {
        alert("Content saved");
        const data = newContent;
        createContent(data)
    }

    const createContent = async (data, token) => {
        try {
            const res = await axios.post(
                `${apiHostUrl}/api/customers/content`,
                data,
                {
                    headers: {
                        "Authorization": `Bearer ${auth.token}`
                    }
                }
            )
            console.log(res.data);
            navigate('/profilepage')
        } catch (err) {
            console.error(err.response ? err.response.data : err.message);
        }
    }

    return (
        <div style={{ display: "flex", justifyContent: "center" }}>
            <ContentForm
                newContent={newContent}
                onChange={updateForm}
                onSubmit={onSubmit}
            />
        </div>
    )
}

export default CreateContent;