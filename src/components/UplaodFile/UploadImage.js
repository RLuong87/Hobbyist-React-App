import React, { Component } from 'react'
import { apiHostUrl } from '../../config'
import axios from 'axios'

class UploadImage extends Component {
    state = {
        selectedFile: null
    }

    fileSelectHandler = event => {
        this.setState({
            selectedFile: event.target.files[0]
        })
    }

    fileUploadHandler = () => {
        const data = new FormData();
        data.append('image', this.state.selectedFile, this.state.selectedFile.name)
        axios.post(
            `${apiHostUrl}/test/uploadImage`)
            .then(res => {
                console.log(res);
            })
    }

    render() {
        return (
            <div className='App'>
                <input type='file' onChange={this.fileSelectHandler} />
                <button onClick={this.fileUploadHandler}>Upload</button>
            </div>
        )
    }
}

export default UploadImage;