import React, { useContext } from 'react';
import Form from '../common/Form';
import Button from '../common/Button';
import BorderCard from '../common/BorderCard';
import InlineInputContainer from '../common/InlineInputContainer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import TextArea from '../common/TextArea';
import { TextField } from '@mui/material';

const UpdateContentForm = (props) => {

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
                        placeholder={"Edit Post"}
                        onChange={handleChange}
                        required
                    />
                </InlineInputContainer>
                <TextField
                    name='picture'
                    id='picture'
                    value={newContent.picture}
                    placeholder={"Photo"}
                    onChange={handleChange}
                />
                <Button>Save</Button>
                <Link to="/profilePage">
                    <button className='btn3'>
                        <FontAwesomeIcon icon={["fas", "xmark"]} />
                    </button>
                </Link>
            </Form>
        </BorderCard>
    )
}

export default UpdateContentForm;