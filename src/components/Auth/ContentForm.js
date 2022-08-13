import React, { useContext } from 'react';
import Form from '../common/Form';
import Button from '../common/Button';
import BorderCard from '../common/BorderCard';
import TextArea from '../common/TextArea';
import { AuthContext } from '../Providers/AuthProvider';
import { TextField } from '@mui/material';
import InlineInputContainer from '../common/InlineInputContainer';

const ContentForm = (props) => {

    const [auth] = useContext(AuthContext);
    const { newContent } = props;

    const handleChange = (e) => {
        props.onChange(e.target.id, e.target.value)
    }

    const dateBuilder = (d) => {
        let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "November", "December"];
        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

        let day = days[d.getDay()];
        let date = d.getDate();
        let month = months[d.getMonth()];
        let year = d.getFullYear();

        return `${day}, ${month} ${date} ${year}`
    }

    return (
        <BorderCard>
            <Form onSubmit={props.onSubmit} style={{ marginTop: "1em" }}>
                <InlineInputContainer>
                    <TextArea
                        name='content'
                        id='content'
                        value={newContent.content}
                        placeholder={`What's on your mind, ${auth.name}?`}
                        onChange={handleChange}
                        required
                    />
                    <TextField
                        name='picture'
                        id='picture'
                        value={newContent.picture}
                        placeholder="Photo"
                        onChange={handleChange}
                    />
                </InlineInputContainer>
                <div className="date">{dateBuilder(new Date())}</div>
                <Button>Save content</Button>
            </Form>
        </BorderCard>
    )
}

export default ContentForm;