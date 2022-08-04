import axios from "axios";
import { apiHostUrl } from "../../config";
import { AuthContext } from "../Providers/AuthProvider";
import React, { Component, useState, useContext } from "react";


const Upload = () => {
    const [auth] = useContext(AuthContext)

    axios.post(`${apiHostUrl}/api/customers/uploadAvatar`,
        {
            headers: {
                "Authorization": `Bearer ${auth.token}`
            }
        }
    )
}

class FileUpload extends Component {

    state = {

        selectedFile: null
    };

    onFileChange = e => {

        this.setState({ selectedFile: e.target.files[0] });

    };

    onFileUpload = () => {

        const formData = new FormData();

        formData.append(
            "myFile",
            this.state.selectedFile,
            this.state.selectedFile.name
        );

        Upload(this.state.selectedFile)
        console.log(this.state.selectedFile);

    };
    fileData = () => {

        if (this.state.selectedFile) {

            return (
                <div>
                    <h2>File Details:</h2>

                    <p>File Name: {this.state.selectedFile.name}</p>


                    <p>File Type: {this.state.selectedFile.type}</p>


                    <p>
                        Last Modified:{" "}
                        {this.state.selectedFile.lastModifiedDate.toDateString()}
                    </p>

                </div>
            );
        } else {
            return (
                <div>
                    <br />
                    <h4 style={{ textAlign: "center" }}>Upload a profile picture</h4>
                </div>
            );
        }
    };

    render() {

        return (
            <div>
                <div>
                    <input type="file" onChange={this.onFileChange} />
                    <button onClick={this.onFileUpload}>
                        Upload
                    </button>
                </div>
                {this.fileData()}
            </div>
        );
    }
}

export default FileUpload;