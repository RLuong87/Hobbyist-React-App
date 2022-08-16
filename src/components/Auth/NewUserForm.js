import React from 'react';
import Form from '../common/Form';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';

const NewUserForm = ({ onSubmit, onChange, query }) => {

  const handleChange = (e) => {
    e.preventDefault();
    onChange(e.target.id, e.target.value)
  }

  return (
    <div>
      <Form onSubmit={onSubmit} noValidate style={{ marginTop: "1em" }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              name="fname"
              id='fname'
              value={query.fname}
              label="First Name"
              onChange={handleChange}
              required
              autoFocus
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              name="lname"
              id='lname'
              value={query.lname}
              label="Last Name"
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              name="email"
              id='email'
              value={query.email}
              label="Email Address"
              onChange={handleChange}
              type="email"
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              name="password"
              id='password'
              value={query.password}
              label="Password"
              onChange={handleChange}
              type="password"
              autoComplete="new-password"
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              name="confirm"
              id='confirm'
              value={query.confirm}
              label="Confirm Password"
              onChange={handleChange}
              type="password"
              required
            />
          </Grid>
        </Grid>
        <br />
        <Button
          fullWidth
          type="submit"
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Submit
        </Button>
        <div style={{ textAlign: "center" }}>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link to="/login" href="#" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </div>
      </Form>
    </div>
  )
}

export default NewUserForm;