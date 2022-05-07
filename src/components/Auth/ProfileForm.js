import React from "react";
import Container from "../common/Container";
import Form from "../common/Form";
import InlineInputContainer from "../common/InlineInputContainer";
import Input from "../common/Input";
import Button from "../common/Button";

const ProfileForm = (props) => {
    const {newProfile} = props;

    const handleChange = (e) => {
        props.onChange(e.target.id, e.target.value)
    }

    return (
        <Container>
            <Form onSubmit={props.onSubmit} style={{ marginTop: '1em' }}>
                <InlineInputContainer>
                    <Input
                        name="username"
                        id="username"
                        value={newProfile.username}
                        placeholder={"Name"}
                        onChange={handleChange}
                        type="text"
                    />
                </InlineInputContainer>
                <InlineInputContainer>
                    <Input
                        name="status"
                        id="status"
                        value={newProfile.status}
                        placeholder={"Status"}
                        onChange={handleChange}
                        type="text"
                    />
                </InlineInputContainer>
                <InlineInputContainer>
                    <Input
                        name="birthday"
                        id="birthday"
                        value={newProfile.birthday}
                        placeholder={"Birthday"}
                        onChange={handleChange}
                        type="text"
                    />
                </InlineInputContainer>
                <InlineInputContainer>
                    <Input
                        name="location"
                        id="location"
                        value={newProfile.location}
                        placeholder={"Location"}
                        onChange={handleChange}
                        type="text"
                    />
                </InlineInputContainer>
                <Button>Save Profile</Button>
            </Form>
        </Container>
    )
}

export default ProfileForm;