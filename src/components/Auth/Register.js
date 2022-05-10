import React, { useState, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import NewUserForm from './NewUserForm';
import Container from '../common/Container';
import Splash from '../common/Splash';
import splashImg from '../../assets/fishing/brassReel.jpg';
import { apiHostUrl } from '../../config';
import BorderCard from '../common/BorderCard';
import { AuthContext } from '../Providers/AuthProvider';

const Register = (props) => {

  const [newUser, setNewUser] = useState({
    email: '',
    password: '',
    confirm: '',
    fName: '',
  })

  const navigate = useNavigate();

  const updateForm = (field, value) => {
    setNewUser({
      ...newUser,
      [field]: value
    })
  }

  const [auth, setAuth] = useContext(AuthContext);

  const onSubmit = () => {

    if (newUser.password != newUser.confirm) {
      alert("Passwords do not match")
      return;
    }

    const data = newUser;
    data.name = `${data.fName}`;
    data.username = data.email;
    // create user, login, create customer
    createUser(data);
    alert("Submitted");
  };

  const createUser = async (data) => {
    try {
      const res = await axios.post(`${apiHostUrl}/api/auth/signup`, data);
      console.log(res.data);
      login(data);
    } catch (err) {
      console.error(err.message);
    }
  }

  const login = async (data) => {
    try {
      const res = await axios.post(`${apiHostUrl}/api/auth/signin`, data);
      console.log(res.data);
      createCustomer(data, res.data.token);
    } catch (err) {
      console.error(err.response.data);
    }
  }

  const createCustomer = async (data, token) => {
    try {
      const res = await axios.post(
        `${apiHostUrl}/customers`,
        data,
        {
          headers:
          {
            Authorization: `Bearer ${token}`
          }
        })
      console.log(res.data);
      setAuth({token, name: res.data.name})
      navigate('/login');
    } catch (err) {
      console.error(err.response.data);
    }
  }

  return (
    <Container>
      <Splash image={splashImg} style={{
        height: "80vh",
        color: "#F1F1F1",
      }}>
        <h1 style={{
          textShadow: '1px 0 0 #000, 0 -1px 0 #000, 0 1px 0 #000, -1px 0 0 #000',
          textAlign: 'center',
          fontSize: 90,
          color: 'gold'
        }}>
          Register
        </h1>
      </Splash>
      <BorderCard>
        <NewUserForm
          newUser={newUser}
          onChange={updateForm}
          onSubmit={onSubmit}
        />
      </BorderCard>
    </Container>
  )
}

export default Register;