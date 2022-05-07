import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import NewUserForm from './NewUserForm';
import Container from '../common/Container';
import Splash from '../common/Splash';
import splashImg from '../../assets/fishing/fishScenery.jpg';
import { apiHostUrl } from '../../config';
import FaButton from '../faCommon/FaButton'


const Register = (props) => {

  const [newUser, setNewUser] = useState({
    email: '',
    password: '',
    fName: '',
    lName: '',
  })

  const navigate = useNavigate();

  const updateForm = (field, value) => {
    setNewUser({
      ...newUser,
      [field]: value
    })
  }

  const onSubmit = () => {
    alert("Submitted");
    const data = newUser;
    data.name = `${data.fName} ${data.lName}`;
    data.username = data.email;

    // create user, login, create customer
    createUser(data);
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
      navigate('/login');
    } catch (err) {
      console.error(err.response.data);
    }
  }

  return (
    <Container>
      <Splash image={splashImg} style={{
        height: "60vh",
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
      <FaButton>
      <NewUserForm
        newUser={newUser}
        onChange={updateForm}
        onSubmit={onSubmit}
      />
      </FaButton>
    </Container>
  )
}

export default Register;