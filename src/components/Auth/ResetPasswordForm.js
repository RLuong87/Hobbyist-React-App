import React from "react";
import Form from "../common/Form";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Grid } from "@mui/material";

const ResetPasswordForm = ({ onSubmit, onChange, query }) => {

    const handleChange = (e) => {
        onChange(e.target.id, e.target.value)
    }

    return (
        <Form onSubmit={onSubmit} noValidate style={{ marginTop: "1em" }}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        name="email"
                        id='email'
                        value={query.email}
                        label="Email Address"
                        onChange={handleChange}
                        required
                        autoFocus
                    />
                </Grid>
            </Grid>
            <Button
                fullWidth
                type="submit"
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
            >
                Send me a recovery link
            </Button>
        </Form>
    )
}

export default ResetPasswordForm;