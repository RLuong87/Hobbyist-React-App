import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import LoginForm from "./LoginForm";
import Container from "../common/Container";
import Splash from "../common/Splash";
import splashImg from '../../assets/fishing/fishingDude.jpg';
import splashImg2 from '../../assets/fishing/bait.jpg';
import { apiHostUrl } from "../../config";
import { AuthContext } from '../Providers/AuthProvider'
import BorderCard from '../common/BorderCard';

const Login = (props) => {
  const [newLogin, setNewLogin] = useState({
    username: '',
    password: '',
  });

  const [auth, setAuth] = useContext(AuthContext);
  const navigate = useNavigate();

  const updateForm = (field, value) => {
    setNewLogin({
      ...newLogin,
      [field]: value
    })
  }

  const onSubmit = () => {
    const data = newLogin;

    if (newLogin.password) {
      alert("Incorrect username or password")
    }
    login(data);
  }

  const login = async (data) => {
    try {
      const res = await axios.post(`${apiHostUrl}/api/auth/signin`, data,
        {
          headers:
          {
            Authorization: `Bearer ${auth.token}`
          }
        });
      setAuth({
        token: res.data.token,
        name: res.data.name,
        roles: res.data.roles,
      })
      console.log(res);
      navigate("/createProfile");
    } catch (err) {
      console.error(err.response ? err.response.data : err.message);
    }
  }

  return (
    <Container>
      <Splash image={splashImg} style={{
        height: '80vh',
        color: '#F1F1F1',
      }}>
        <h1 style={{
          textShadow: '1px 1px black',
          textAlign: 'center',
          fontSize: 90,
          color: 'gold'
        }}
        >Login
        </h1>
      </Splash>
      <BorderCard>
        <LoginForm
          newLogin={newLogin}
          onChange={updateForm}
          onSubmit={onSubmit}
        />
      </BorderCard>
      <Splash image={splashImg2} style={{
        height: '100vh',
        color: '#F1F1F1'
      }}>
      </Splash>
    </Container>
  )
}

export default Login;
