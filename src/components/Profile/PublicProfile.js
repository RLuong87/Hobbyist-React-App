import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { apiHostUrl } from "../../config";
import { AuthContext } from "../Providers/AuthProvider";
import CreateContent from "../Auth/CreateContent";
import ContentForm from "../Auth/ContentForm";
import Content from './Content';
import Container from "../common/Container";
import axios from "axios";
import './Card.css';

const Profile = () => {

    const [auth] = useContext(AuthContext);
    const [content, setContent] = useState([]);
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
        return content.content.map(con => <Content contents={con} key={con.id} />)
    }

    return (
        <Container>
            <div style={{ marginTop: "30px" }}>
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
                    <div>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Profile;