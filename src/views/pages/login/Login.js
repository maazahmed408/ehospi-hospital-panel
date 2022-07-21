import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import image from 'src/assets/images/avatars/Bg-Login.png';
import 'src/asset/css/main.css';
import { baseUrl } from 'src/views/config.js/baseUrl';
import axios from 'axios';

const Login = () => {
  const history = useHistory();
  const [uid, setuid] = useState('');
  const [password, setpassword] = useState('');

  //login function ------
  async function login(e) {
    e.preventDefault();
    let item = { uid, password };
    let result = await axios.post(baseUrl + '/login/hospitalAdmin', item);
    if (!result.data.token) {
      alert('login failed');
    } else {
      localStorage.setItem('token', result.data.token);
      localStorage.setItem('hName', result.data.hospitalName);
      localStorage.setItem('uid', uid);
      history.push('./dashboard');
    }
  }
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${image})`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      >
        <section className="vh-100 d-flex flex-column align-items-center justify-content-center ">
          <div className="container-fluid">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-md-9 col-lg-6 col-xl-5">
                <img src="" className="img-fluid" alt="" />
              </div>
              <div
                className=" logincontaner col-md-8 col-lg-6 col-xl-4 offset-xl-1 py-5"
                style={{
                  background: 'white',
                  height: '30rem',
                  borderRadius: '5px',
                }}
              >
                <form onSubmit={login}>
                  <div className="">
                    <h2 className="mt-10 mb-0 me-3 text-center">e-Hospi</h2>
                    <div
                      className="col-sm-12 text align-center welcomeback "
                      style={{
                        fontSize: '15px',
                        color: '#cdc8c8',
                        marginLeft: '60px',
                      }}
                    >
                      Welcome back! Please Login to Your Account{' '}
                    </div>
                    <div className="mt-5">
                      <div className="form-outline mb-2">
                        <label className=" mb-0 form-label" htmlFor="username">
                          <h5>Username : </h5>
                        </label>
                        <input
                          type="text"
                          name="uid"
                          value={uid}
                          onChange={(e) => {
                            setuid(e.target.value);
                          }}
                          className="form-control form-control-sm"
                        />
                      </div>
                      <div className=" form-outline ">
                        <label className=" mb-0 form-label" htmlFor="password">
                          <h5>Password:</h5>
                        </label>
                        <input
                          type="text"
                          name="password"
                          value={password}
                          onChange={(e) => {
                            setpassword(e.target.value);
                          }}
                          className="form-control form-control-sm"
                        />
                      </div>
                    </div>
                    <div
                      className="loginform row text-center  mt-4 pt-2 text align-center d-flex "
                      style={{ justifyContent: 'center' }}
                    >
                      <div className=" col-sm-6">
                        <button
                          type="submit"
                          className=" login1 col-sm-6  btn btn-primary btn-bg "
                          style={{ width: '200px' }}
                        >
                          Login
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
export default Login;
