import React from "react";
import Container from "../common/Container";
import Form from '../common/Form';
import InlineInputContainer from "../common/InlineInputContainer";
import Input from "../common/Input";
import Button from "../common/Button";
import { useNavigate } from "react-router-dom";

const LoginForm = (props) => {
  const {query} = props;
  let navigate = useNavigate();

  const onSubmit = () => {
    navigate("/signup");
  }

  const handleChange = (e) => {
    props.onChange(e.target.id, e.target.value);
  }
  
  return (
    <Container>
      <Form onSubmit={props.onSubmit} style={{marginTop: '1em'}} >
        <InlineInputContainer>
          <Input
            name="username"
            id="username"
            value={query.username}
            placeholder={"Email address"}
            onChange={handleChange}
            required
            type="email"
          />
        </InlineInputContainer>
        <InlineInputContainer>
          <Input
            name="password"
            id="password"
            value={query.password}
            placeholder={"Password"}
            onChange={handleChange}
            required
            type="password"
          />
        </InlineInputContainer>
        <Button>Login</Button>
      </Form>
      <p>____________________________________________________ </p>
      <button onClick={onSubmit} className='btn2'>Create a new account</button>
    </Container>
  )
}

export default LoginForm;