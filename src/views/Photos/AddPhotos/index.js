import React, { useState, useEffect } from 'react';
import 'src/asset/plugins/bootstrap/css/bootstrap.min.css';
import 'src/asset/css/main.css';
import { uploadHospitalPhoto } from '../../../apiService/photos';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure();
require('dotenv').config();

const AddPhotos = () => {
  const [file, setFile] = useState('');

  const handleChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    const data = new FormData();
    data.append('image', file);

    uploadHospitalPhoto(data).then((res) => {
      if (res.success === true) {
        setFile('');
        toast.success('Image Uploaded');
      } else {
        setFile('');
        toast.error('Image Upload Failed');
      }
    });

    e.target.value = null;
  };

  return (
    <>
      <div>
        <section class="content">
          <div class="container-fluid">
            <div style={{ paddingBottom: '30px' }}>
              <h2
                className="Addbed"
                style={{
                  color: '#056078',
                  fontSize: '20px',
                  paddingTop: '30px',
                }}
              >
                Add Hospital Photos:
              </h2>
              <div
                style={{
                  display: 'flex',
                  //   justifyContent: 'center',
                  alignItems: 'center',
                  marginTop: '50px',
                }}
              >
                <input type="file" onChange={handleChange} />
                {file && (
                  <button
                    onClick={handleSubmit}
                    style={{
                      outline: 0,
                      border: 1,
                      padding: '10px',
                      background: '#056078',
                      color: 'white',
                      borderRadius: '10px',
                    }}
                  >
                    Upload Image
                  </button>
                )}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
export default AddPhotos;
