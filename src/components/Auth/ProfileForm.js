import React from "react";
import Container from "../common/Container";
import Form from "../common/Form";
import InlineInputContainer from "../common/InlineInputContainer";
import Input from "../common/Input";
import Button from "../common/Button";
import FileUpload from "../UplaodFile/FileUpload";
import BorderCard from "../common/BorderCard";

const ProfileForm = (props) => {
    const { newProfile } = props;

    const handleChange = (e) => {
        props.onChange(e.target.id, e.target.value)
    }

    return (
        <BorderCard>

            <Container>
                <FileUpload />
                <Form onSubmit={props.onSubmit} style={{ marginTop: '1em' }}>
                    <InlineInputContainer>
                        <Input
                            name="username"
                            id="username"
                            value={newProfile.username}
                            placeholder={"Display Name"}
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
                    <InlineInputContainer>
                        <Input
                            name="about"
                            id="about"
                            value={newProfile.about}
                            placeholder={"About Me"}
                            onChange={handleChange}
                            type="text"
                        />
                    </InlineInputContainer>
                    <Button>Save Profile</Button>
                </Form>
            </Container>
        </BorderCard>
    )
}

export default ProfileForm;