import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import 'src/asset/plugins/bootstrap/css/bootstrap.min.css';
import 'src/asset/css/main.css';
import { baseUrl } from 'src/views/config.js/baseUrl';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure();
require('dotenv').config();

const Add_Department = () => {
  const [r, setr] = useState(0);
  const [department, setdepartment] = useState('');
  const [arr, setArr] = useState([]);
  const [check, setCheck] = useState([]);
  const [disable, setDisable] = useState(false);
  const [buttonText, setButtonText] = useState('Save');
  const history = useHistory();

  const resultData = async () => {
    const result = await axios.get(baseUrl + '/hospitalAdmin/getDepartment', {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      },
    });
    setdepartment(result.data);
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

  const navigateTo = () => history.push('/Department/All Department');

  async function handleClick(e) {
    e.preventDefault();
    setDisable(true);
    setButtonText('Loading...');

    let item = arr;
    let result = await axios.post(
      baseUrl + '/hospitalAdmin/addDepartment',
      { arr: item },
      {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('token'),
        },
      },
    );
    if (result) {
      setr(r + 1);
      setButtonText('Save...');
      setDisable(false);
      toast.success('Department added successfully', {
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
              <h2
                className="Addbed"
                style={{
                  color: '#056078',
                  fontSize: '20px',
                  paddingTop: '30px',
                }}
              >
                Select all departments :
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
                        {department.length !== 0 &&
                          department.map((e) => {
                            return (
                              <li>
                                <input
                                  type="checkbox"
                                  onChange={handleCheck}
                                  value={e}
                                  id={e}
                                  key={e}
                                />
                                <label
                                  className="r-flex"
                                  htmlFor={e}
                                  value={e}
                                  key={e}
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
        </section>
      </div>
    </>
  );
};
export default Add_Department;
