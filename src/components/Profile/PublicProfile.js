import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { apiHostUrl } from "../../config";
import { AuthContext } from "../Providers/AuthProvider";
import Container from "../common/Container";
import axios from "axios";
import "./ContentCard.css";
import './Card.css';
import User from "../Users/User";
import BorderCard from "../common/BorderCard";
import HomeContent from "../Home/HomeContent";
import moment from "moment";

const Profile = (props) => {

    const [auth] = useContext(AuthContext);
    const params = useParams();

    const [user, setUser] = useState({
        id: params.userId
    });

    useEffect(() => {
        const _getUser = async () => {
            const res = await axios.get(`${apiHostUrl}/api/customers/${user.id}`,
                {
                    headers: {
                        Authorization: `Bearer ${auth.token}`
                    }
                })
            console.log(res.data);
            setUser(res.data)
        }
        _getUser()
    }, [auth.token])

    const displayContent = () => {
        return user.map(u => <User contents={u} key={u.id} />)
    }

    return (
        <Container>
            <div style={{ marginTop: "45px" }}>
                <div className="Card">
                    <div className="upper-container">
                        <div className="image-container">
                            <img src={user.avatar} height={100} />
                        </div>
                    </div>
                    <div className="lower-container">
                        <button className="btn2">Add Friend</button>
                        <h3>{user.name}</h3>
                        <h4>{user.status}</h4>
                        <h4>{user.birthday}</h4>
                        <h4>{user.location}</h4>
                        <p>{user.about}</p>
                    </div>
                </div>
            </div>
            <div className="Content-card">
                <div className="upper-container">
                    <p>{moment(user.localDateTime).format('MMMM D YYYY, h:mm a')}</p>
                    <div className="image-container2">
                        <img src={user.avatar} />
                    </div>
                </div>
                <div className="lower-container">
                    {/* <h4>{user.content}</h4> */}
                    <div className="image-container3">
                        <img src={user.picture} />
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Profile;