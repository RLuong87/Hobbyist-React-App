import React from "react";
import Container from "../common/Container";
import Form from '../common/Form';
import { Link } from "react-router-dom";
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

const LoginForm = (props) => {
  const { query } = props;

  const handleChange = (e) => {
    props.onChange(e.target.id, e.target.value);
  }

  return (
    <Container>
      <Form onSubmit={props.onSubmit} style={{ marginTop: '1em' }} >
        <TextField
          name="username"
          id="username"
          value={query.username}
          placeholder={"Email address"}
          onChange={handleChange}
          required
          type="email"
        />
        <TextField
          name="password"
          id="password"
          value={query.password}
          placeholder={"Password"}
          onChange={handleChange}
          type="password"
          required
        />
        <Grid container>
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
        </Grid>
        <Button
          type="submit"
          // fullWidth
          variant="contained"
        >
          Sign In
        </Button>
      </Form>
      <br />
      <Link to='/signup' href="#" variant="body2">
        {"Don't have an account? Sign Up"}
      </Link>
    </Container>
  )
}

export default LoginForm;