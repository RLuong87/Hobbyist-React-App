import React from "react";
import Container from "../common/Container";
import Form from '../common/Form';
import { Link } from "react-router-dom";
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';

const LoginForm = (props) => {
  const { query } = props;

  const handleChange = (e) => {
    props.onChange(e.target.id, e.target.value);
  }

  return (
    <div>
      <Form onSubmit={props.onSubmit} style={{ marginTop: '1em' }} >
        <TextField
          fullWidth
          margin="normal"
          name="username"
          id="username"
          value={query.username}
          label="Email address"
          onChange={handleChange}
          required
          type="email"
        />
        <TextField
          fullWidth
          name="password"
          id="password"
          value={query.password}
          label="Password"
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
          fullWidth
          type="submit"
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Sign In
        </Button>
        <Grid container>
          <Grid item xs>
            <Link to="/resetPassword" variant="body2">
              Forgot password?
            </Link>
          </Grid>
          <Grid item>
            <Link to="/signup" variant="body2">
              {"Don't have an account? Sign Up"}
            </Link>
          </Grid>
        </Grid>
      </Form>
    </div>
  )
}

export default LoginForm;