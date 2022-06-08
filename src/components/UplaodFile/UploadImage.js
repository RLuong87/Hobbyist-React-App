import React, { useEffect, useState } from 'react'
import { apiHostUrl } from '../../config'
import Form from '../common/Form'
import axios from 'axios'

const UploadImage = () => {

    const [selectedFile, setSelectedFile] = useState([])

    const fileSelectHandler = event => {
        setSelectedFile({
            selectedFile: event.target.files[0]
        })
    }

    const onSubmit = () => {
        const data = selectedFile;
        fileUploadHandler(data)
    }

    const fileUploadHandler = async (data, token) => {
        try {
            const res = await axios.post(
                `${apiHostUrl}/test/uploadImage`,
                data,
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
        } catch (err) {
            console.error(err.response ? err.response.data : err.message);
        }
    }


    return (
        <div className='App'>
            <Form
                onSubmit={onSubmit}
            >
                <input type='file' onChange={fileSelectHandler} />
                <button onClick={fileUploadHandler}>Upload</button>
            </Form>
        </div>
    )
}

export default UploadImage;