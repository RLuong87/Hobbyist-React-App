import React from 'react';
import Container from '../common/Container';
import Form from '../common/Form';
import InlineInputContainer from '../common/InlineInputContainer';
import Input from '../common/Input';
import Button from '../common/Button';

const NewUserForm = ({ onSubmit, onChange, query }) => {
  // const {onSubmit, onChange, query} = props

  const handleChange = (e) => {
    onChange(e.target.id, e.target.value)
  }

  return (
    // <Container>
      <Form onSubmit={onSubmit} style={{ marginTop: "1em" }}>
        <InlineInputContainer>
          <Input
            name='fname'
            id='fname'
            value={query.fname}
            placeholder={"First Name"}
            onChange={handleChange}
            required
          />
          <Input
            name='lname'
            id='lname'
            value={query.lname}
            placeholder={"Last Name"}
            onChange={handleChange}
            required
          />
        </InlineInputContainer>
        <InlineInputContainer>
          <Input
            name='username'
            id='username'
            value={query.username}
            placeholder={"Email Address"}
            onChange={handleChange}
            type="email"
            required
          />
        </InlineInputContainer>
        <InlineInputContainer>
          <Input
            name='password'
            id='password'
            value={query.password}
            placeholder={"Password"}
            onChange={handleChange}
            type="password"
            required
          />
          <Input
            name='confirm'
            id='confirm'
            value={query.confirm}
            placeholder={"Confirm Password"}
            onChange={handleChange}
            type="password"
            required
          />
        </InlineInputContainer>
        <button className='btn2'>Submit</button>
      </Form>
    // </Container>
  )
}

export default NewUserForm;