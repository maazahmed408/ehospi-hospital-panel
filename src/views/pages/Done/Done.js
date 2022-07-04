import React from 'react';
import image from 'src/assets/images/Bg-Login.png';
import image1 from 'src/assets/images/accept.png';
import 'src/asset/css/main.css';

const Done = () => {
  return (
    <>
      <div
        className="logocontainer"
        style={{
          backgroundImage: `url(${image})`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      >
        <section
          className="vh-100 d-flex flex-column align-items-center  "
          style={{ marginButtom: '200px' }}
        >
          <div className="container-fluid">
            <div className="row d-flex justify-content-center align-items-center vh-100">
              <div className="col-md-9 col-lg-6 col-xl-5">
                <img src="" className="img-fluid" alt="" />
              </div>
              <div
                className="logocontaner col-md-8 col-lg-6 col-xl-4 offset-xl-2 py-4 text align-center"
                style={{
                  background: 'white',
                  height: '20rem',
                  width: '40rem',
                  borderRadius: '5px',
                  marginBottom: '50px',
                  marginLeft: '20px',
                }}
              >
                <div
                  className="logo mb-4  row text align-center"
                  style={{ marginLeft: '15rem' }}
                >
                  <img
                    style={{ fontSize: '20%', height: '80px', width: '100px' }}
                    src={image1}
                    alt="logo"
                  />
                </div>
                <h6 style={{ textAlign: 'center' }}>
                  THANK YOU FOR REGISTERING YOUR HOSPITAL WITH US
                </h6>
                <div className="mb-0">
                  <h6
                    style={{
                      color: 'gray',
                      textAlign: 'center',
                      fontSize: '10px',
                    }}
                  >
                    Your request has been submitted for approval. After
                    confirmation form the app owner,
                  </h6>
                </div>
                <div className="mb-0">
                  <h6
                    style={{
                      color: 'gray',
                      textAlign: 'center',
                      fontSize: '10px',
                    }}
                  >
                    you will receive an email for your login purpose.
                  </h6>
                </div>

                <div
                  className=" row donebutton text align-center"
                  style={{ marginLeft: '14rem', paddingTop: '45px' }}
                >
                  <button
                    className=""
                    style={{
                      border: '1px solid',
                      background: '#056078',
                      color: 'white',
                      width: '10rem',
                      height: '3rem',
                      borderRadius: '6px',
                    }}
                    type="button"
                  >
                    Done
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
export default Done;
