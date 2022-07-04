import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  getHospitalPhoto,
  deleteHospitalPhoto,
} from '../../../apiService/photos';
toast.configure();

const ListPhoto = () => {
  const [imageList, setImageList] = useState([]);

  const getAllImages = () => {
    getHospitalPhoto().then((res) => {
      setImageList(res.data.data);
    });
  };

  useEffect(() => {
    getAllImages();
  }, []);

  const handleDelete = (url) => {
    var answer = window.confirm('Are you sure? You want to delete');
    if (answer) {
      deleteHospitalPhoto({ fileUrl: url }).then((res) => {
        if (res.success === true) {
          getAllImages();
          toast.info('Images Deleted Successfully');
        } else {
          toast.error('Something went wrong');
        }
      });
    }
  };

  return (
    <div
      style={{
        background: 'white',
        padding: '20px',
        minHeight: '75vh',
        filter: 'drop-shadow(10px 10px 50px #A9A7A7)',
        // boxShadow: '5px 5px 10px 10px rgba(255,255,255,0.9)',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '30px',
          objectFit: 'contain',
          justifyContent: 'center',
          marginTop: '20px',
        }}
      >
        {imageList &&
          imageList.map((image, index) => (
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
              }}
            >
              <img
                key={index}
                src={image}
                style={{
                  width: '300px',
                  height: '300px',
                  filter: 'drop-shadow(10px 10px 10px #A9A7A7)',
                }}
              />
              <button
                onClick={() => handleDelete(image)}
                style={{
                  border: 0,
                  outline: 0,
                  padding: '10px 15px',
                  borderRadius: '5px',
                  background: '#DE4839',
                  color: '#eee',
                  zIndex: '999',
                }}
              >
                Delete
              </button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ListPhoto;
