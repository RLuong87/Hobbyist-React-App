import React, { useContext, useState } from "react";
import axios from "axios";
import Container from "../common/Container";
import ProfileForm from "./ProfileForm";
import { apiHostUrl } from "../../config";
import { AuthContext } from "../Providers/AuthProvider";
import { useNavigate } from "react-router-dom";

const CreateProfile = (props) => {

    const [newProfile, setNewProfile] = useState({
        username: "",
        status: "",
        birthday: "",
        location: "",
    })

    const [auth] = useContext(AuthContext)
    const navigate = useNavigate();

    const updateForm = (field, value) => {
        setNewProfile({
            ...newProfile,
            [field]: value
        })
    }

    const onSubmit = () => {
        alert("Profile saved");
        const data = newProfile;
        data.name = `${data.username}`
        createProfile(data)
    }

    const createProfile = async (data, token) => {
        try {
            const res = await axios.put(
                `${apiHostUrl}/customers`,
                data,
                {
                    headers:
                    {
                        Authorization: `Bearer ${auth.token}`
                    }
                });
                console.log(res.data);
                navigate('/users')
        } catch (err) {
            console.error(err.response ? err.response.data : err.message);
        }
    }

    return (
        <div className='profile'>
            <Container>
                <h1 style={{
                    textShadow: '1px 0 0 #000, 0 -1px 0 #000, 0 1px 0 #000, -1px 0 0 #000',
                    textAlign: 'center',
                    fontSize: 50,
                    color: 'white'
                }}>
                    Create a profile
                </h1>
                <ProfileForm
                    newProfile={newProfile}
                    onChange={updateForm}
                    onSubmit={onSubmit}
                />
            </Container>
        </div>
    )
}

export default CreateProfile;