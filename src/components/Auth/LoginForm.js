import React from "react";
import Container from "../common/Container";
import Form from '../common/Form';
import InlineInputContainer from "../common/InlineInputContainer";
import Input from "../common/Input";
import Button from "../common/Button";
import { Link } from "react-router-dom";

const LoginForm = (props) => {
  const { query } = props;

  const handleChange = (e) => {
    props.onChange(e.target.id, e.target.value);
  }

  return (
    <Container>
      <Form onSubmit={props.onSubmit} style={{ marginTop: '1em' }} >
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
        <button className="btn2">Login</button>
      </Form>
      <p>____________________________________________________ </p>
      <Link to='/signup'>
        <button className="btn2">Create a new account</button>
      </Link>
    </Container>
  )
}

export default LoginForm;