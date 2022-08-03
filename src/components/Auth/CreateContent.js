import React, { useContext, useState, useEffect, useReducer } from "react";
import axios from "axios";
import Container from "../common/Container";
import ContentForm from "./ContentForm";
import { apiHostUrl } from "../../config";
import { AuthContext } from "../Providers/AuthProvider";
import { useNavigate } from "react-router-dom";
import BorderCard from "../common/BorderCard";

const CreateContent = () => {

    const [auth] = useContext(AuthContext)
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

    const dateBuilder = (d) => {
        let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "November", "December"];
        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

        let day = days[d.getDay()];
        let date = d.getDate();
        let month = months[d.getMonth()];
        let year = d.getFullYear();

        return `${day}, ${month} ${date} ${year}`
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
                <div className="date">{dateBuilder(new Date())}</div>
            </Container>
        </div>
    )
}

export default CreateContent;