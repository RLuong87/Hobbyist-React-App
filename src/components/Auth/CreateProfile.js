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
        about: "",
    })

    const [auth, setAuth] = useContext(AuthContext)
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
        data.status = `${data.status}`
        data.birthday = `${data.birthday}`
        data.location = `${data.location}`
        data.about = `${data.about}`
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
                setAuth({
                    name: res.data.name,
                    status: res.data.status,
                    birthday: res.data.birthday,
                    location: res.data.location,
                    about: res.data.about
                  })
                console.log(res.data);
                navigate('/profilecard')
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