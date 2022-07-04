import { useState, useEffect } from 'react';
import * as React from 'react';
import 'src/asset/plugins/bootstrap/css/bootstrap.min.css';
import 'src/asset/css/main.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { baseUrl } from 'src/views/config.js/baseUrl';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

toast.configure();
const Add_Amenities = () => {
  const [r, setr] = useState(0);
  const [arr, setArr] = useState([]);
  const [check, setCheck] = useState([]);
  const [amenities, setAmenities] = useState([]);
  const [disable, setDisable] = useState(false);
  const [buttonText, setButtonText] = useState('Save');
  const history = useHistory();
  const navigateTo = () => history.push('/Amenities/Amenities Price');

  const resultData = async () => {
    const result = await axios.get(baseUrl + '/hospitalAdmin/getAmenities', {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      },
    });
    setAmenities(result.data);
  };

  useEffect(() => {
    resultData();
  }, [r]);

  const handleCheck = (e) => {
    let clicked = e.target.value;
    setCheck((prevState) => {
      let isIndexFound = prevState.indexOf(clicked);
      if (isIndexFound === -1) {
        prevState.push(clicked);
        return prevState;
      } else {
        prevState.splice(isIndexFound, 1);
        return prevState;
      }
    });
    setArr(check);
  };

  async function handleClick(e) {
    setDisable(true);
    setButtonText('Loading...');
    e.preventDefault();

    let item = arr;
    let result = await axios.post(
      baseUrl + '/hospitalAdmin/addAmenities',
      { arr: item },
      {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('token'),
        },
      },
    );

    setArr([]);
    item = arr;
    if (result) {
      setDisable(false);
      setButtonText('Save');
      toast.success('Amenities added successfully', {
        autoClose: 600,
        theme: 'colored',
      });
      navigateTo();
    }
    if (result.data.message === 'New Amenities pushed sucessfully') {
      setr(r + 1);
    }
  }

  return (
    <>
      <div>
        <section class="content">
          <div class="container-fluid">
            <div>
              <div>
                <h2
                  className="Amenities"
                  style={{
                    color: '#056078',
                    fontSize: '20px',
                    paddingTop: '30px',
                  }}
                >
                  Select all amenities :
                </h2>
                <div className="services" style={{ paddingTop: '1rem' }}>
                  <div className="col-md-6" style={{}}>
                    <ul>
                      <div
                        className="col-md-12"
                        style={{
                          display: 'r-flex',
                          justifyContent: 'space-between',
                          flexDirection: 'column',
                          listStyle: 'none',
                          float: 'right',
                        }}
                      >
                        <div className="r-flex">
                          {amenities.length !== 0 &&
                            amenities.map((e) => {
                              return (
                                <li key={e}>
                                  <input
                                    type="checkbox"
                                    onChange={handleCheck}
                                    value={e}
                                    id={e}
                                  />
                                  <label
                                    className="r-flex"
                                    htmlFor={e}
                                    style={{
                                      paddingInline: '2rem',
                                    }}
                                  >
                                    {e}
                                  </label>
                                </li>
                              );
                            })}
                        </div>
                      </div>
                    </ul>
                  </div>
                </div>
              </div>

              <button
                className="submit2"
                style={{
                  background: '#056078',
                  color: 'white',
                  marginLeft: '25rem',
                  borderRadius: '5px',
                }}
                disabled={disable}
                type="submit"
                onClick={handleClick}
              >
                {buttonText}
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
export default Add_Amenities;
