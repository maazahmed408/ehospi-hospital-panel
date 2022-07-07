import React, { useState } from 'react';
import {
  uploadBedImageService,
  deleteBedImagesService,
} from '../apiService/photos';
import {
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CButton,
} from '@coreui/react';
import { toast } from 'react-toastify';

const NewModal = ({
  modalVisible,
  setModalVisible,
  images = [],
  bedId = '',
}) => {
  const [file, setFile] = useState(null);
  const [isUpload, setIsUpload] = useState(false);

  const handleDelete = (image) => {
    deleteBedImagesService({ fileUrl: image, id: bedId }).then((res) => {
      if (res.success === true) {
        toast.info('Image Deleted Successfully');
        setIsUpload(false);
        setModalVisible(false);
      } else {
        toast.error('Something Went Wrong');
        setIsUpload(false);
        setModalVisible(false);
      }
    });
  };

  const handleImageUpload = () => {
    if (!isUpload) {
      setIsUpload(true);
    } else {
      if (file) {
        let data = new FormData();
        data.append('image', file);
        data.append('id', bedId);
        uploadBedImageService(data).then((response) => {
          if (response.success === true) {
            toast.success('Image Uploaded Successfully');
            setModalVisible(false);
            setIsUpload(false);
          } else {
            toast.error('Failed to upload');
            setModalVisible(false);
            setIsUpload(false);
          }
        });
      } else {
        toast.error('please select a file');
      }
    }
  };

  return (
    <CModal
      size="xl"
      visible={modalVisible}
      onClose={() => {
        setModalVisible(false);
        setIsUpload(false);
      }}
    >
      <CModalHeader
        style={{
          display: 'flex',
          width: '100%',
          alignItems: 'center',
          gap: '40px',
        }}
      >
        <CModalTitle>Bed Images</CModalTitle>
        {isUpload ? (
          <input type="file" onChange={(e) => setFile(e.target.files[0])} />
        ) : null}
        <CButton
          color="success"
          style={{ borderRadius: '5px' }}
          onClick={handleImageUpload}
        >
          {isUpload ? 'Upload' : 'Add More Images'}
        </CButton>
      </CModalHeader>
      <CModalBody style={{ width: '100%', height: '100%' }}>
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
          {images &&
            images.map((image, index) => (
              <div
                key={image}
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
                    width: '400px',
                    height: '250px',
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
      </CModalBody>
    </CModal>
  );
};

export default NewModal;
