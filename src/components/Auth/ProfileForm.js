import React from "react";
import Container from "../common/Container";
import Form from "../common/Form";
import InlineInputContainer from "../common/InlineInputContainer";
import Input from "../common/Input";
import Button from "../common/Button";
import FileUpload from "../UploadFile/FileUpload";
import ImgUpload from '../UploadFile/ImgUpload'
import BorderCard from "../common/BorderCard";
import TextArea from "../common/TextArea";

const ProfileForm = (props) => {
    const { profile } = props;

    const handleChange = (e) => {
        props.onChange(e.target.id, e.target.value)
    }

    return (
        <Container>
            <BorderCard>
                <div className="align-content">
                    <ImgUpload />
                </div>
            </BorderCard>
            <Form onSubmit={props.onSubmit} style={{ marginTop: '1em' }}>
                <InlineInputContainer>
                    <Input
                        name="username"
                        id="username"
                        value={profile.username}
                        placeholder={"Display Name"}
                        onChange={handleChange}
                        type="text"
                    />
                </InlineInputContainer>
                <InlineInputContainer>
                    <Input
                        name="status"
                        id="status"
                        value={profile.status}
                        placeholder={"Status"}
                        onChange={handleChange}
                        type="text"
                    />
                </InlineInputContainer>
                <InlineInputContainer>
                    <Input
                        name="birthday"
                        id="birthday"
                        value={profile.birthday}
                        placeholder={"Birthday"}
                        onChange={handleChange}
                        type="text"
                    />
                </InlineInputContainer>
                <InlineInputContainer>
                    <Input
                        name="location"
                        id="location"
                        value={profile.location}
                        placeholder={"Location"}
                        onChange={handleChange}
                        type="text"
                    />
                </InlineInputContainer>
                <InlineInputContainer>
                    <TextArea
                        name="about"
                        id="about"
                        value={profile.about}
                        placeholder={"About Me"}
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