import React from 'react';
import Form from '../common/Form';
import Input from '../common/Input';
import Button from '../common/Button';
import BorderCard from '../common/BorderCard';
import InlineInputContainer from '../common/InlineInputContainer';
import TextArea from '../common/TextArea';

const ContentForm = (props) => {

    const { newContent } = props;

    const handleChange = (e) => {
        props.onChange(e.target.id, e.target.value)
    }

    return (
        <BorderCard>
            <Form onSubmit={props.onSubmit} stylye={{ marginTop: "1em" }}>
                <InlineInputContainer>
                    <TextArea
                        name='content'
                        id='content'
                        value={newContent.content}
                        placeholder={"What's on your mind?"}
                        onChange={handleChange}
                        required
                    />
                </InlineInputContainer>
                <Button>Save content</Button>
            </Form>
        </BorderCard>
    )
}

export default ContentForm;