import React, { useContext, useState, useEffect, useReducer } from "react";
import axios from "axios";
import Container from "../common/Container";
import ProfileForm from "./ProfileForm";
import { apiHostUrl } from "../../config";
import { AuthContext } from "../Providers/AuthProvider";
import { useNavigate } from "react-router-dom";

const CreateProfile = () => {

    const [profile, setProfile] = useState({
        username: "",
        status: "",
        birthday: "",
        location: "",
        about: ""
    })

    const [auth, setAuth] = useContext(AuthContext)
    const navigate = useNavigate();

    const updateForm = (field, value) => {
        setProfile({
            ...profile,
            [field]: value
        })
    }

    const onSubmit = () => {
        alert("Profile saved");
        const data = profile;
        data.name = `${data.username}`
        createProfile(data)
    }

    useEffect(() => {
        localStorage.setItem('profile', JSON.stringify(profile))
    }, [profile]);

    const createProfile = async (data, token) => {
        try {
            const res = await axios.post(
                `${apiHostUrl}/api/customers`,
                data,
                {
                    headers:
                    {
                        Authorization: `Bearer ${auth.token}`
                    }
                });
            setAuth({
                ...auth,
                name: res.data.name,
                status: res.data.status,
                birthday: res.data.birthday,
                location: res.data.location,
                about: res.data.about
            })
            console.log(res.data);
            navigate('/profilepage')
        } catch (err) {
            console.error(err.response ? err.response.data : err.message);
        }
    }

    return (
        <div className='profile'>
            <Container>
                <h1 style={{
                    marginTop: 80,
                    textShadow: '1px 0 0 #000, 0 -1px 0 #000, 0 1px 0 #000, -1px 0 0 #000',
                    textAlign: 'center',
                    fontSize: 50,
                    color: 'gold'
                }}>
                    Create a profile
                </h1>
                <ProfileForm
                    profile={profile}
                    onChange={updateForm}
                    onSubmit={onSubmit}
                />
            </Container>
        </div>
    )
}

export default CreateProfile;