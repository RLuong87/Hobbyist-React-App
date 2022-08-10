import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import LoginForm from "./LoginForm";
import Container from "../common/Container";
import { apiHostUrl } from "../../config";
import { AuthContext } from '../Providers/AuthProvider'

const Login = () => {

  const [query, setQuery] = useState({
    username: '',
    password: '',
  });

  const [auth, setAuth] = useContext(AuthContext);
  const navigate = useNavigate();

  const updateForm = (field, value) => {
    setQuery({
      ...query,
      [field]: value
    })
  }

  const onSubmit = () => {
    const data = query;
    data.password = query.password;

    if (query.password != data.password) {
      alert("Username or password is incorrect")
      return;
    }
    login(data)
  }

  const login = async (data) => {
    try {
      const res = await axios.post(`${apiHostUrl}/api/auth/signin`,
        data);
      setAuth({
        ...auth,
        token: res.data.token,
        profile: {},
        roles: res.data.roles,
      })
      console.log(res.data);
      navigate("/");
    } catch (err) {
      console.error(err.response ? err.response.data : err.message);
    }
  }

  const _getSelf = async (token) => {
    try {
      const res = await axios.get(`${apiHostUrl}/api/customers/self`,
        {
          headers: {
            "Authorization": `Bearer ${auth.token}`
          }
        }
      )
      console.log(res.data);
    } catch (err) {
      console.error(err.response ? err.response.data : err.message);
    }
    _getSelf()
  }

  return (
    <div className="login-pic">
      <Container>
        <h1 style={{
          margin: 100,
          textShadow: '1px 1px black',
          textAlign: 'center',
          fontSize: 70,
          color: 'gold'
        }}>
          Sign in
        </h1>
        <div className="box-border">
          <LoginForm
            query={query}
            onChange={updateForm}
            onSubmit={onSubmit}
          />
        </div>
        <footer>
          <div className="footer">
            <h1 style={{
              color: "gold",
              textShadow: '1px 1px black',
            }}>
              Create a Page for your catch.
            </h1>
          </div>
        </footer>
      </Container>
    </div>
  )
}

export default Login;
