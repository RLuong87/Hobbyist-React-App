import React from "react";
import Form from "../common/Form";
import InlineInputContainer from "../common/InlineInputContainer";
import Button from '@mui/material/Button';
import { TextField } from "@mui/material";
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';

const ProfileForm = (props) => {
    const { profile } = props;

    const handleChange = (e) => {
        props.onChange(e.target.id, e.target.value)
    }

    return (
        <div className="box-border2">
            <Form onSubmit={props.onSubmit} style={{ marginTop: '1em' }}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField
                            variant="outlined"
                            fullWidth
                            name="avatar"
                            id="avatar"
                            value={profile.avatar}
                            label="Profile picture"
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            margin="normal"
                            name="username"
                            id="username"
                            value={profile.username}
                            label="Display Name"
                            onChange={handleChange}
                            type="text"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            margin="normal"
                            name="status"
                            id="status"
                            value={profile.status}
                            label="Status"
                            onChange={handleChange}
                            type="text"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            name="birthday"
                            id="birthday"
                            value={profile.birthday}
                            label="Birthday"
                            onChange={handleChange}
                            type="text"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            name="location"
                            id="location"
                            value={profile.location}
                            label="Location"
                            onChange={handleChange}
                            type="text"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            margin="normal"
                            fullWidth
                            name="about"
                            id="about"
                            value={profile.about}
                            label="About Me"
                            onChange={handleChange}
                            type="text"
                        />
                    </Grid>
                </Grid>
                <Button
                    type="submit"
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                >
                    Save Profile
                </Button>
            </Form>
        </div>
    )
}

export default ProfileForm;