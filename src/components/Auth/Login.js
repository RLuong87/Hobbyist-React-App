import React, { useContext, useState } from "react";
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
    login(data)

    if (data.password != query.password) {
      alert("Wrong username or password")
      return;
    }
    alert("Login successful")

    console.log(data);
  }

  const login = async (data) => {
    try {
      const res = await axios.post(`${apiHostUrl}/api/auth/signin`,
        data);
      setAuth({
        token: res.data.token,
        profile: {},
        roles: res.data.roles
      })
      console.log(res.data);
      navigate("/");
    } catch (err) {
      console.error(err.response ? err.response.data : err.message);
    }
  }

  return (
    <div className="login-pic">
      <Container>
        <h1 style={{
          margin: 100,
          textShadow: '1px 1px black',
          textAlign: 'center',
          fontSize: 90,
          color: 'gold'
        }}
        >Login
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
            Create a Page for your catch.
          </div>
        </footer>
      </Container>
    </div>
  )
}

export default Login;
