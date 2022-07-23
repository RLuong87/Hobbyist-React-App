import React from 'react';
import Form from '../common/Form';
import Input from '../common/Input';
import Button from '../common/Button';
import BorderCard from '../common/BorderCard';
import InlineInputContainer from '../common/InlineInputContainer';
import TextArea from '../common/TextArea';

const ContentForm = (props) => {

    const { newContent } = props;

    const dateBuilder = (d) => {
        let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "November", "December"];
        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

        let day = days[d.getDay()];
        let date = d.getDate();
        let month = months[d.getMonth()];
        let year = d.getFullYear();

        return `${day}, ${month} ${date} ${year}`
    }

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