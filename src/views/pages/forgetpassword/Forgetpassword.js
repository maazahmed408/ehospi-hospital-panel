import React, { useState } from 'react';
import image from 'src/assets/images/avatars/Bg-Login.png';
import 'src/asset/css/main.css';

import { Link } from 'react-router-dom';

const Forgetpassword = (props) => {
  const [email, setemail] = useState('');
  const handleSubmit = (e) => {
    setemail('');
    e.preventDefault();
  };

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
        <section className="vh-100 d-flex flex-column align-items-center justify-content-center  ">
          <div className="container-fluid">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-md-9 col-lg-6 col-xl-5">
                <img src="" className="img-fluid" alt="" />
              </div>
              <div
                className="col-md-8 col-lg-6 col-xl-4 offset-xl-2 py-4"
                style={{
                  background: 'white',
                  height: '30rem',
                  borderRadius: '5px',
                }}
              >
                <form onSubmit={handleSubmit}>
                  <div className="">
                    <h2 className="mt-10 me-3 text-center">eHospi</h2>
                    <div className="text align-center">
                      <h6 style={{ fontSize: '13px', marginLeft: '35px' }}>
                        Enter your Email and we send you a password reset Link
                      </h6>
                    </div>
                    <hr />
                    <div className="form-outline mb-2">
                      <input
                        type="text"
                        name="Email"
                        value={email}
                        onChange={(e) => {
                          setemail(e.target.value);
                        }}
                        required="required"
                        className="form-control form-control-sm"
                        placeholder="Enter your Email"
                      />
                    </div>

                    <div className="row d-flex  text-center text-lg-start  text align-center ">
                      <div className="col-sm-6">
                        <h6 style={{ fontSize: '13px' }}>
                          Time Remaining 00.30 sec
                        </h6>
                      </div>
                      <div className=" resetcontainer col-sm-6">
                        <Link to="/Resendotp">Resent otp</Link>
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

export default Forgetpassword;
