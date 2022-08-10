import React from 'react';
import Form from '../common/Form';
import Input from '../common/Input';
import Button from '@mui/material/Button';
import InlineInputContainer from '../common/InlineInputContainer';

const NewUserForm = ({ onSubmit, onChange, query }) => {
  // const {onSubmit, onChange, query} = props

  const handleChange = (e) => {
    onChange(e.target.id, e.target.value)
  }

  return (
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
            name='email'
            id='email'
            value={query.email}
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
        <Button type="submit"
          // fullWidth
          variant="contained">Submit</Button>
      </Form>
  )
}

export default NewUserForm;