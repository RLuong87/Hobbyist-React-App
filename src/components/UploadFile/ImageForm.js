import React from "react";
import Form from "../common/Form";
import Input from "../common/Input";
import InlineInputContainer from "../common/InlineInputContainer";
import BorderCard from "../common/BorderCard";
import Button from "../common/Button";

const ImageForm = (props) => {

    const { newAvatar } = props;

    const handleChange = (e) => {
        props.onChange(e.target.id, e.target.value)
    }

    return (
        <div>
            <Form onSubmit={props.onSubmit} style={{ marginTop: "1em" }}>
                <InlineInputContainer>
                    <Input
                        name='url'
                        id='url'
                        value={newAvatar.url}
                        placeholder='Image url'
                        onChange={handleChange}
                        type="text"
                    />
                </InlineInputContainer>
                <Button>Save</Button>
            </Form>
        </div>
    )
}

export default ImageForm;