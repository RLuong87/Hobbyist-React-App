import React from 'react';
import Form from '../common/Form';
import Input from '../common/Input';
import Button from '../common/Button';
import InlineInputContainer from '../common/InlineInputContainer';

const ContentForm = (props) => {

    const { newContent } = props;

    const handleChange = (e) => {
        props.onChange(e.target.id, e.target.value)
    }

    return (
        <Form onSubmit={props.onSubmit} stylye={{ marginTop: "1em" }}>
            <InlineInputContainer>
                <Input
                    name='title'
                    id='title'
                    value={newContent.title}
                    placeholder={"Title"}
                    onChange={handleChange}
                    required
                />
            </InlineInputContainer>
            <InlineInputContainer>
                <Input
                    name='content'
                    id='content'
                    value={newContent.content}
                    placeholder={"Content"}
                    onChange={handleChange}
                    required
                />
            </InlineInputContainer>
            <Button>Save content</Button>
        </Form>
    )
}

export default ContentForm;