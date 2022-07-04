import React, { useState } from 'react';
import axios from 'axios';
import 'src/asset/plugins/bootstrap/css/bootstrap.min.css';
import 'src/asset/css/main.css';
import { baseUrl } from 'src/views/config.js/baseUrl';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useHistory } from 'react-router-dom';
toast.configure();
require('dotenv').config();

const AddSubAdmin = () => {
  const [uid, setuid] = useState('');
  const [password, setpassword] = useState('');
  const [disable, setDisable] = useState(false);
  const [buttonText, setButtonText] = useState('Save');
  const [duty, setDuty] = useState('');
  const [c, setc] = useState();
  const history = useHistory();
  const navigateTo = () => {
    history.push('/Manage Sub Admins/SubAdmins List');
  };

  const handleManChange = () => {
    setDuty('management');
  };
  const handleFinChange = () => {
    setDuty('finance');
  };
  async function handleFormSubmit(e) {
    e.preventDefault();
    setDisable(true);
    setButtonText('Loading...');
    let item = { uid, password, duty };
    let result = await axios.post(
      baseUrl + '/hospitalAdmin/addHospitalSubAdmin',
      item,
      {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('token'),
        },
      },
    );
    if (result) {
      setDisable(false);
      setButtonText('Save');
      setuid('');
      setpassword('');
      setDuty('');
      toast.success('Sub-admin added successfully', {
        autoClose: 600,
        theme: 'colored',
      });
      setc(false);
      setc(null);
      navigateTo();
    }
  }

  return (
    <>
      <div>
        <section className="content">
          <div className="container-fluid">
            <div className="row clearfix">
              <div className="col-lg-12 col-md-12 col-sm-12 ">
                <div className="card">
                  <div className="header">
                    <h2>Add Hospital Subadmin </h2>
                  </div>
                  <form onSubmit={handleFormSubmit}>
                    <div className="body">
                      <div className=" mb-4 row clearfix">
                        <div className="col-sm-4 ">
                          <div className="form-group1">
                            <h6>ID</h6>
                            <div className="form-line1">
                              <input
                                name="Usersid"
                                value={uid}
                                required="required"
                                onChange={(e) => {
                                  setuid(e.target.value);
                                }}
                                className="form-control no-resize"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-4 ">
                          <div className="form-group1">
                            <h6>Password</h6>
                            <div className="form-line1">
                              <input
                                name="password"
                                required="required"
                                value={password}
                                onChange={(e) => {
                                  setpassword(e.target.value);
                                }}
                                className="form-control no-resize"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <h6>Account Privileges:</h6>
                      <div>
                        <input
                          style={{
                            position: 'inherit',
                            opacity: 1,
                            marginLeft: '1em',
                            marginRight: '0.3rem',
                          }}
                          type="radio"
                          value="Management"
                          name="duty"
                          checked={c}
                          onChange={handleManChange}
                        />
                        Management
                        <input
                          style={{
                            position: 'inherit',
                            opacity: 1,
                            marginLeft: '1em',
                            marginRight: '0.3rem',
                          }}
                          type="radio"
                          value="Finance"
                          name="duty"
                          checked={c}
                          onChange={handleFinChange}
                        />
                        Finance
                      </div>
                      <div className="text align-right">
                        <button
                          className=""
                          style={{
                            border: '1px solid',
                            background: '#056078',
                            color: 'white',
                            width: '6rem',
                            height: '2.5rem',
                            borderRadius: '5px',
                          }}
                          disabled={disable}
                          type="submit"
                        >
                          {buttonText}
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AddSubAdmin;
