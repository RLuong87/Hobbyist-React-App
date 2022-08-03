import React, { useContext, useState, useEffect, useReducer } from "react";
import axios from "axios";
import Container from "../common/Container";
import ProfileForm from "./ProfileForm";
import { apiHostUrl } from "../../config";
import { AuthContext } from "../Providers/AuthProvider";
import { useNavigate } from "react-router-dom";

const CreateProfile = () => {

    const [auth] = useContext(AuthContext)
    const navigate = useNavigate();

    const [profile, setProfile] = useState({
        username: auth.name ? auth.name : "",
        status: auth.status ? auth.status : "",
        birthday: auth.birthday ? auth.birthday : "",
        location: auth.location ? auth.location : "",
        about: auth.about ? auth.about : ""
    })

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
            const res = await axios.put(
                `${apiHostUrl}/api/customers`,
                data,
                {
                    headers:
                    {
                        Authorization: `Bearer ${auth.token}`
                    }
                }
            );
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