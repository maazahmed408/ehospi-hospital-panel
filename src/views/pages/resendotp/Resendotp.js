import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import image from 'src/assets/images/avatars/Bg-Login.png';
import 'src/asset/css/main.css';
import { Link } from 'react-router-dom';
const Resendotp = () => {
  const history = useHistory();
  const initialValues = {
    resetotp: ' ',
    newpassword: ' ',
    conformpassword: '',
  };
  const [formValues, setformValues] = useState(initialValues);
  const [formErrors, setformErrors] = useState({});
  const [IsSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setformValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setformErrors(validate(formValues));
    setIsSubmit(true);
    setformValues('');
  };
  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && IsSubmit) {
    }
  });
  const validate = (values) => {
    const errors = {};
    if (values.resetotp === 0) {
      errors.resetotp = 'resetotp is required';
    }
    if (values.newpassword === 0) {
      errors.newpassword = 'password is required';
    }
    if (values.conformpassword === 0) {
      errors.conformpassword = 'password is required';
    }
    if (values.newpassword !== values.conformpassword) {
      errors.conformpassword = "conform password don't match.";
    }
    return errors;
  };
  const handleDirect = (event) => {
    history.push('/Passwordsuccess');
  };
  return (
    <>
      <div
        className="maincontiner"
        style={{
          backgroundImage: `url(${image})`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      >
        <section className="vh-100 d-flex flex-column align-items-center justify-content-center ">
          {Object.keys(formErrors).length === 0 && IsSubmit ? (
            handleDirect()
          ) : (
            <Link to="/Resendotp"></Link>
          )}
          <div className="container-fluid">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-md-9 col-lg-6 col-xl-5">
                <img src="" className="img-fluid" alt="" />
              </div>
              <div
                className="col-md-8 col-lg-6 col-xl-4 offset-xl-1 py-5"
                style={{
                  background: 'white',
                  height: '34rem',
                  borderRadius: '5px',
                }}
              >
                <form onSubmit={handleSubmit}>
                  <div className="">
                    <h2 className="mb-0 me-3 text-center">eHospi</h2>
                    <div className="headercontainer col-sm-12 text align-center">
                      Enter your email and we send you a password Reset Link
                    </div>
                    <hr />

                    <div className="form-outline mb-2">
                      <label className="form-label" For="reset">
                        <h5>Reset code:</h5>
                      </label>
                      <input
                        type="text"
                        name="resetotp"
                        id="reset"
                        value={formValues.resetotp}
                        onChange={handleChange}
                        className="form-control form-control-sm"
                        placeholder="Enter a Reset code"
                      />
                      <div style={{ color: 'red' }}> {formErrors.resetotp}</div>
                    </div>
                    <div className="form-outline mb-2">
                      <label className="form-label" For="newpassword">
                        <h5>newpassword:</h5>
                      </label>
                      <input
                        type="text"
                        name="newpassword"
                        value={formValues.newpassword}
                        onChange={handleChange}
                        className="form-control form-control-sm"
                        placeholder="Enter a new password"
                      />
                      <div style={{ color: 'red' }}>
                        {' '}
                        {formErrors.newpassword}
                      </div>
                    </div>
                    <div className="form-outline mb-2">
                      <label className="form-label" For="conformpassword">
                        <h5>conformpassword:</h5>
                      </label>
                      <input
                        type="text"
                        name="conformpassword"
                        value={formValues.conformpassword}
                        onChange={handleChange}
                        className="form-control form-control-sm"
                      />
                      <div style={{ color: 'red' }}>
                        {' '}
                        {formErrors.conformpassword}
                      </div>
                    </div>

                    <div className="text-center text-lg-start mt-4 pt-2 text align-center">
                      <div className="row-12 text align-center form-outline mb-2">
                        <button
                          type="submit"
                          className="col-12  btn btn-primary btn-bg "
                          style={{
                            paddingLeft: '4rem',
                            paddingRight: '4rem',
                            color: 'white',
                          }}
                        >
                          Change Password
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

export default Resendotp;
