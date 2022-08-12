import React, { useContext } from 'react';
import Form from '../common/Form';
import Input from '../common/Input';
import Button from '../common/Button';
import BorderCard from '../common/BorderCard';
import InlineInputContainer from '../common/InlineInputContainer';
import TextArea from '../common/TextArea';
import { AuthContext } from '../Providers/AuthProvider';
import { Grid } from '@mui/material';

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
                </InlineInputContainer>
                <div className="date">{dateBuilder(new Date())}</div>
                <Button>Save content</Button>
            </Form>
            <div style={{
                display: "flex",
                justifyContent: "center"
            }}>
                <Button>Upload a photo</Button>
            </div>
        </BorderCard>
    )
}

export default ContentForm;