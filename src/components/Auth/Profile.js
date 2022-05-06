import React, { useContext, useState } from "react";
import axios from "axios";
import Container from "../common/Container";
import ProfileForm from "./ProfileForm";
import { apiHostUrl } from "../../config";
import { AuthContext } from "../Providers/AuthProvider";

const Profile = (props) => {

    const [newProfile, setNewProfile] = useState({
    })

    const [auth, setAuth] = useContext(AuthContext)

    const updateForm = (field, value) => {
        setNewProfile({
            ...newProfile,
            [field]: value
        }, [])
    }

    const onSubmit = () => {
        alert("Profile saved");
        const data = newProfile;
        // data.name = `${data.fName} ${data.lName}, ${data.status}`
        createProfile(data)
        console.log(data);
    }

    const createProfile = async (data, token) => {
        try {
            const res = await axios.post(
                `${apiHostUrl}/customers`,
                data,
                {
                    headers:
                    {
                        Authorization: `Bearer ${token}`
                    }
                });
            setAuth({
                token: res.data.token,
                profile: {},
                roles: res.data.roles
            })
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

export default Profile;