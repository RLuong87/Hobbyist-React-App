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

const Register = () => {

  let navigate = useNavigate();

  const [query, setQuery] = useState({
    username: '',
    email: '',
    password: '',
    confirm: '',
    fname: '',
  })
  
  const [auth, setAuth] = useContext(AuthContext);

  const updateForm = (field, value) => {
    setQuery({
      ...query,
      [field]: value
    })
  }


  const onSubmit = () => {

    if (query.password !== query.confirm) {
      alert("Passwords do not match")
      return;
    }

    const data = query;
    data.name = `${query.fname}`;
    // create user, login, create customer
    createUser(data);
    alert("Submitted");
  };

  const createUser = async (data) => {
    try {
      const res = await axios.post(`${apiHostUrl}/api/auth/signup`, data);
      login(data);
    } catch (err) {
      console.error(err.response ? err.response.data : err.message);
    }
  }

  const login = async (data) => {
    try {
      const res = await axios.post(`${apiHostUrl}/api/auth/signin`, data);
      console.log(res.data);
      createCustomer(data, res.data.token);
    } catch (err) {
      console.error(err.response ? err.response.data : err.message);
    }
  }

  const createCustomer = async (data, token) => {
    data.email = data.username;
    try {
      const res = await axios.post(
        `${apiHostUrl}/customers`,
        data,
        {
          headers:
          {
            "Authorization": `Bearer ${token}`
          }
        })
      console.log(res.data);
      setAuth({token, name: res.data.name})
      alert(res.data.id)
      navigate('/');
    } catch (err) {
      console.error(err.response ? err.response.data : err.message);
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
          query={query}
          onChange={updateForm}
          onSubmit={onSubmit}
        />
      </BorderCard>
    </Container>
  )
}

export default Register;