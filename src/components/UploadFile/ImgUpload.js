import axios from 'axios';
import React, { useContext, useState } from 'react';
import ImageUploading from 'react-images-uploading';
import { apiHostUrl } from '../../config';
import { AuthContext } from '../Providers/AuthProvider';

const ImgUpload = () => {
  const [auth] = useContext(AuthContext)
  const [images, setImages] = useState([]);
  const maxNumber = 69;

  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };

  const onSubmit = () => {
    const data = images;
    uploadImg(data)
  }

  const uploadImg = async (data) => {
    try {
      const res = await axios.post(`${apiHostUrl}/api/customers/uploadAvatar`,
        data,
        {
          headers: {
            "Authorization": `Bearer ${auth.token}`
          }
        }
      )
      console.log(res.data);
      setImages(res.data)
    } catch (err) {
      console.error(err.response ? err.response.data : err.message);
    }
  }

  return (
    <div className="App">
      <ImageUploading
        multiple
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
        dataURLKey="data_url"
      >
        {({
          imageList,
          onImageUpload,
          onImageRemoveAll,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps,
        }) => (
          // write your building UI
          <div className="upload__image-wrapper">
            <button
              style={isDragging ? { color: 'red' } : undefined}
              onClick={onImageUpload}
              {...dragProps}
            >
              Click or Drop here
            </button>
            &nbsp;
            <button onClick={onImageRemoveAll}>Remove all images</button>
            {imageList.map((image, index) => (
              <div key={index} className="image-item">
                <img src={image['data_url']} alt="" width="100" />
                <div className="image-item__btn-wrapper">
                  <button onClick={onSubmit}>Save</button>
                  <button onClick={() => onImageUpdate(index)}>Update</button>
                  <button onClick={() => onImageRemove(index)}>Remove</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </ImageUploading>
    </div>
  );
}

export default ImgUpload;