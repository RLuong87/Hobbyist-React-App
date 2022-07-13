import React, { useContext, useState, useEffect, useReducer } from "react";
import axios from "axios";
import Container from "../common/Container";
import ContentForm from "./ContentForm";
import { apiHostUrl } from "../../config";
import { AuthContext } from "../Providers/AuthProvider";
import { useNavigate } from "react-router-dom";

const CreateContent = () => {

    const [newContent, setNewContent] = useState({
        title: "",
        content: ""
    })

    const [users, setUsers] = useState([]);
    const [auth, setAuth] = useContext(AuthContext)
    const navigate = useNavigate();

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
                })
            setAuth({
                ...auth,
                title: res.data.title,
                content: res.data.content
            })
            console.log(res.data);
            navigate('/profilepage')
        } catch (err) {
            console.error(err.response ? err.response.data : err.message);
        }
    }

    return (
        <div>
            <Container>
                <h1 style={{
                    marginTop: 80,
                    textShadow: '1px 0 0 #000, 0 -1px 0 #000, 0 1px 0 #000, -1px 0 0 #000',
                    textAlign: 'center',
                    fontSize: 50,
                    color: 'gold'
                }}>
                    Create a post
                </h1>
                <ContentForm
                    newContent={newContent}
                    onChange={updateForm}
                    onSubmit={onSubmit}
                />
            </Container>
        </div>
    )
}

export default CreateContent;