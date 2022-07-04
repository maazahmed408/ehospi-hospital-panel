import { useState, Fragment } from 'react';
import * as React from 'react';
import 'src/asset/plugins/bootstrap/css/bootstrap.min.css';
import 'src/asset/css/main.css';
import axios from 'axios';
import { baseUrl } from 'src/views/config.js/baseUrl';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useHistory } from 'react-router-dom';
toast.configure();

const Add_Facilities = () => {
  const [arr, setArr] = useState([]);
  const [r, setr] = useState(0);
  const [check, setCheck] = useState([]);
  const [facilities, setFacilities] = useState([]);
  const [disable, setDisable] = useState(false);
  const [buttonText, setButtonText] = useState('Save');
  const history = useHistory();
  const navigateTo = () => {
    history.push('/Facilities/Facilities Price');
  };

  const resultData = async () => {
    const result = await axios.get(baseUrl + '/hospitalAdmin/getFacilities', {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      },
    });
    setFacilities(result.data);
  };

  React.useEffect(() => {
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
    e.preventDefault();
    setDisable(true);
    setButtonText('Loading...');

    let item = arr;
    let result = await axios.post(
      baseUrl + '/hospitalAdmin/addFacilities',
      { arr: item },
      {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('token'),
        },
      },
    );

    if (result) {
      setr(r + 1);
      setButtonText('Save');
      setDisable(false);
      toast.success('Facilities added successfully', {
        autoClose: 600,
        theme: 'colored',
      });
      navigateTo();
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
                  className="Addbed"
                  style={{
                    color: '#056078',
                    fontSize: '20px',
                    paddingTop: '30px',
                  }}
                >
                  Select all facilities :
                </h2>
                <div
                  className="services col d-flex"
                  style={{ paddingTop: '1rem' }}
                >
                  <div className="col-sm-4" style={{ paddingRight: '12px' }}>
                    <ul>
                      <div
                        className=""
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          flexDirection: 'row',
                          listStyle: 'none',
                        }}
                      >
                        <div className="r-flex">
                          {facilities.length !== 0 &&
                            facilities.map((e) => {
                              return (
                                <li>
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
                type="submit"
                disabled={disable}
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
export default Add_Facilities;
