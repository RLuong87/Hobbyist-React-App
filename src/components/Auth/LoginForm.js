import React from "react";
import Container from "../common/Container";
import Form from '../common/Form';
import InlineInputContainer from "../common/InlineInputContainer";
import Input from "../common/Input";
import { Link } from "react-router-dom";
import HorizontalLine from '../common/HorizontalLine'

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
      <br/>
      <HorizontalLine style={{width: 400}} />
      <Link to='/signup'>
        <button className="btn2">Create a new account</button>
      </Link>
    </Container>
  )
}

export default LoginForm;