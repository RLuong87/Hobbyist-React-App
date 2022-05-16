import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import LoginForm from "./LoginForm";
import Container from "../common/Container";
import Splash from "../common/Splash";
import splashImg2 from '../../assets/fishing/bait.jpg';
import { apiHostUrl } from "../../config";
import { AuthContext } from '../Providers/AuthProvider'

const Login = () => {

  const [query, setQuery] = useState({
    username: '',
    password: '',
  });

  const [submitting, setSubmitting] = useState(false);
  const [auth, setAuth] = useContext(AuthContext);
  const navigate = useNavigate();

  const updateForm = (field, value) => {
    setQuery({
      ...query,
      [field]: value
    })
  }

  const onSubmit = async () => {
    setSubmitting(true);
    try {
      const res = await axios.post(`${apiHostUrl}/api/auth/signin`, query);
      setAuth({ ...auth, token: res.data.token })
      setSubmitting(false)
      console.log(res);
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
        <div className="new-form">
          <LoginForm
            query={query}
            onChange={updateForm}
            onSubmit={onSubmit}
            submitting={submitting}
          />
        </div>
        <footer>
          <div className="footer">
            <span role='img' aria-label='love'>
            </span>{' '}
            Create a Page for your catch.
          </div>
        </footer>
      </Container>
    </div>
  )
}

export default Login;
