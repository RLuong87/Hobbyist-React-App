import React, { useContext, useState, useEffect, useReducer } from "react";
import axios from "axios";
import Container from "../common/Container";
import ProfileForm from "./ProfileForm";
import { apiHostUrl } from "../../config";
import { AuthContext } from "../Providers/AuthProvider";
import { useNavigate } from "react-router-dom";

const CreateProfile = () => {

    const [newProfile, setNewProfile] = useState({
        username: "",
        status: "",
        birthday: "",
        location: "",
        about: ""
    })

    const [users, setUsers] = useState([]);
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
        createProfile(data)
    }

    useEffect(() => {
        localStorage.setItem('users', JSON.stringify(users))
        setUsers({
            username: auth.name,
            status: auth.status,
            birthday: auth.birthday,
            location: auth.location,
            about: auth.about
        })
    }, []);

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
                    newProfile={newProfile}
                    onChange={updateForm}
                    onSubmit={onSubmit}
                />
            </Container>
        </div>
    )
}

export default CreateProfile;