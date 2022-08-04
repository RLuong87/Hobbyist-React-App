import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../Providers/AuthProvider'
import { apiHostUrl } from '../../config'
import axios from 'axios'
import ImgUpload from './ImgUpload'
import Container from "../common/Container";
import ImageForm from './ImageForm'

const UploadImage = () => {

    const [auth] = useContext(AuthContext);

    const [newAvatar, setAvatar] = useState({
        url: ""
    })

    const updateForm = (field, value) => {
        setAvatar({
            ...newAvatar,
            [field]: value
        })
    }

    const onSubmit = () => {
        const data = newAvatar;
        uploadAvatar(data)
    }

    const uploadAvatar = async (token) => {
        try {
            const res = await axios.post(
                `${apiHostUrl}/api/customers/uploadAvatar`,
                {
                    headers: {
                        Authorization: `Bearer ${auth.token}`
                    }
                })
            console.log(res.data);
            setAvatar(res.data);
        } catch (err) {
            console.error(err.response ? err.response.data : err.message);
        }
    }

    return (
        <Container>
            <ImageForm
                newAvatar={newAvatar}
                onChange={updateForm}
                onSubmit={onSubmit}
            />
        </Container>
    )
}

export default UploadImage;