import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { apiHostUrl } from "../../config";
import { Link } from "react-router-dom";
import axios from "axios";
import Image from '../../assets/random/mstom.jpg'
import { useParams } from "react-router-dom";
import './Card.css';

export default function Card() {

    const [auth, setAuth] = useContext(AuthContext);
    const params = useParams();

    const [avatar, setAvatar] = useState({
        id: params.avatarId
    });

    useEffect(() => {
        const _getSelf = async () => {
            try {
                const res = await axios.get(`${apiHostUrl}/api/customers/self`,
                    {
                        headers: {
                            "Authorization": `Bearer ${auth.token}`
                        }
                    })
                setAuth({
                    ...auth,
                    name: res.data.name,
                    status: res.data.status,
                    birthday: res.data.birthday,
                    location: res.data.location,
                    about: res.data.about,
                })
                console.log(res.data);
            } catch (err) {
                console.error(err.response ? err.response.data : err.message);
            }
        }
        _getSelf()
    }, [auth.token])

    const _getAvatar = async (data, token) => {
        try {
            const res = await axios.get(`${apiHostUrl}/api/customers/avatar/${avatar.id}`,
                data,
                {
                    headers: {
                        Authorization: `Bearer ${auth.token}`
                    }
                }
            )
            console.log(res.data);
            setAvatar(res.data)
        } catch (err) {
            console.error(err.response ? err.response.data : err.message);
        }
        _getAvatar()
    }

    return (
        <div className="Card">
            <div className="upper-container">
                <div className="image-container">
                    <img src={auth.url} />
                </div>
            </div>
            <div className="lower-container">
                <h3> {auth.name} </h3>
                <Link to="/createProfile">
                    <button className="btn3">Edit profile</button>
                </Link>
                <h4> {auth.status} </h4>
                <h4> {auth.birthday} </h4>
                <h4> {auth.location} </h4>
                <p> {auth.about} </p>
            </div>
        </div>
    )
}