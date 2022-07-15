import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../Providers/AuthProvider'
import { apiHostUrl } from '../../config'
import Form from '../common/Form'
import axios from 'axios'

const UploadImage = () => {

    const [auth] = useContext(AuthContext);
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
                `${apiHostUrl}/api/customers/uploadAvatar`,
                data,
                {
                    headers: {
                        Authorization: `Bearer ${auth.token}`
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