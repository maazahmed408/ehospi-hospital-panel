import React, { useState } from 'react';
import 'react-phone-input-2/lib/style.css';
import axios from 'axios';
import { baseUrl } from 'src/views/config.js/baseUrl';
import image from 'src/assets/images/avatars/Bg-Login.png';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure();

const Hospitalform = () => {
  const [hospitalName, sethospitalName] = useState('');
  const [HospitalType, sethospitalType] = useState('');
  const [hospitalAddress, sethospitalAddress] = useState('');
  const [city, setcity] = useState('');
  const [state, setstate] = useState('');
  const [contactNo, setcontactNo] = useState('');
  const [numberOfBeds, setNumberOfBeds] = useState('');
  const api = async (e) => {
    e.preventDefault();
    let result = await axios.post(baseUrl + '/hospitalSignup', {
      hospitalName: hospitalName,
      hospitalType: HospitalType,
      hospitalAddress: hospitalAddress,
      city: city,
      state: state,
      phone: contactNo,
      numberOfBeds: numberOfBeds,
    });
    if (result) {
      toast.success('Thanks for registering us !');
      sethospitalName('');
      sethospitalType('');
      sethospitalAddress('');
      setcity('');
      setstate('');
      setcontactNo('');
      setNumberOfBeds('');
    }
  };

  return (
    <>
      <div
        className="hospitalcontainer"
        style={{
          backgroundImage: `url(${image})`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          height: '100vh',
        }}
      >
        <section className=" d-flex flex-column align-items-center justify-content-center ">
          <div className="container-fluid">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div
                className=" hospitalstyle text align-center   row col-md-12 col-sm-6  offset-xl-2 py-5"
                style={{
                  background: 'white',
                  height: 'auto',
                  borderRadius: '5px',
                  width: '48rem',
                  fontSize: '11px',
                  marginRight: '12rem',
                  marginBottom: '4rem',
                  marginTop: '4rem',
                }}
              >
                <form>
                  <div className="headermain row">
                    <h2
                      className=" ehospi mb-0 mb-0 text-center"
                      style={{ fontWeight: 'bold', paddingBottom: '1rem' }}
                    >
                      E-Hospi!
                    </h2>
                    <h6
                      className=" pleasefill mb-0 text align-center"
                      style={{
                        fontSize: '13px',
                        textAlign: 'center',
                        paddingBottom: '1.5rem',
                      }}
                    >
                      {' '}
                      Please fill the Registration form{' '}
                    </h6>
                  </div>
                  <h4> Enter Hospital Details</h4>
                  <form>
                    <div className=" formcontaner mb-3 row d-flex">
                      <div className="">
                        <div className="row d-flex">
                          <div className="mb-2 col-sm-6">
                            <lable For="First Name">Hospital Name</lable>
                            <input
                              type="text"
                              name="hospitalName"
                              id="hospitalName"
                              require="true"
                              value={hospitalName}
                              onChange={(e) => sethospitalName(e.target.value)}
                              className="form-control form-control-sm"
                            />
                          </div>
                          <div className="mb-2 col-sm-6">
                            <lable For="First Name">Hospital Type</lable>
                            <input
                              type="text"
                              name=""
                              id="hospitalname"
                              require="true"
                              value={HospitalType}
                              onChange={(e) => {
                                sethospitalType(e.target.value);
                              }}
                              className="form-control form-control-sm"
                            />
                          </div>
                        </div>
                        <div className="row d-flex">
                          <div className="mb-2 col-sm-6">
                            <lable For="First Name">Hospital Address</lable>
                            <input
                              type="text"
                              name="hospitalAddress"
                              id="hospitalAddress"
                              require="true"
                              value={hospitalAddress}
                              onChange={(e) => {
                                sethospitalAddress(e.target.value);
                              }}
                              className="form-control form-control-sm"
                            />
                          </div>
                          <div className="mb-2 col-sm-6">
                            <lable For="First Name">City</lable>
                            <input
                              type="text"
                              name="city"
                              id="city"
                              require="true"
                              value={city}
                              onChange={(e) => {
                                setcity(e.target.value);
                              }}
                              className="form-control form-control-sm"
                            />
                          </div>
                        </div>
                        <div className="row d-flex">
                          <div className="mb-2 col-sm-6">
                            <lable For="First Name">State</lable>
                            <input
                              type="text"
                              name="hospitalname"
                              id="state"
                              require="true"
                              value={state}
                              onChange={(e) => {
                                setstate(e.target.value);
                              }}
                              className="form-control form-control-sm"
                            />
                          </div>
                          <div className="mb-2 col-sm-6">
                            <lable For="First Name">Contact No</lable>
                            <input
                              type="text"
                              name="contactNo"
                              id="contactNo"
                              require="true"
                              value={contactNo}
                              onChange={(e) => setcontactNo(e.target.value)}
                              className="form-control form-control-sm"
                            />
                          </div>
                          <div className="mb-2 col-sm-6">
                            <lable For="First Name">Number of Beds</lable>
                            <input
                              type="text"
                              name="alternateNo"
                              id="alternateNo"
                              require="true"
                              value={numberOfBeds}
                              onChange={(e) => setNumberOfBeds(e.target.value)}
                              className="form-control form-control-sm"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>

                  <div
                    className="row mb-4  text align center"
                    style={{ marginLeft: '15rem' }}
                  >
                    <div className="">
                      <button
                        className=""
                        type="submit"
                        class="btn btn-primary"
                        style={{ marginLeft: '20px' }}
                        onClick={api}
                      >
                        Register
                      </button>
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
export default Hospitalform;
