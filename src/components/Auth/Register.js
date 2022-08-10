import React, { useState, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import NewUserForm from './NewUserForm';
import Container from '../common/Container';
import { apiHostUrl } from '../../config';
import { AuthContext } from '../Providers/AuthProvider';

const Register = () => {

  let navigate = useNavigate();

  const [query, setQuery] = useState({
    email: '',
    password: '',
    confirm: '',
    fname: '',
    lname: ''
  })

  const [auth, setAuth] = useContext(AuthContext);

  const updateForm = (field, value) => {
    setQuery({
      ...query,
      [field]: value
    })
  }

  const onSubmit = () => {
    alert("Registration successful");

    if (query.password !== query.confirm) {
      alert("Passwords do not match")
      return;
    }

    const data = query;
    data.name = `${query.fname} ${query.lname}`;
    data.username = data.email;
    createUser(data);
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
      createCustomer(data, res.data.token);
      setAuth({ name: res.data.name })
      console.log(res.data);
    } catch (err) {
      console.error(err.response ? err.response.data : err.message);
    }
  }

  const createCustomer = async (data, token) => {
    try {
      const res = await axios.post(
        `${apiHostUrl}/api/customers`,
        data,
        {
          headers:
          {
            "Authorization": `Bearer ${token}`
          }
        })
      console.log(res.data);
      setAuth({
        token,
        name: res.data.name,
        email: res.data.email
      })
      navigate('/');
    } catch (err) {
      console.error(err.response ? err.response.data : err.message);
    }
  }

  return (
    <div className='register-pic'>
      <Container>
        <h1 style={{
          margin: 100,
          textShadow: '1px 0 0 #000, 0 -1px 0 #000, 0 1px 0 #000, -1px 0 0 #000',
          textAlign: 'center',
          fontSize: 70,
          color: 'gold'
        }}>
          Sign Up
        </h1>
        <div className='box-border'>
          <NewUserForm
            query={query}
            onChange={updateForm}
            onSubmit={onSubmit}
          />
        </div>
      </Container>
    </div>
  )
}

export default Register;