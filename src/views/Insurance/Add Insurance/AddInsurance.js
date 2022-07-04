import { useState } from 'react';
import * as React from 'react';
import 'src/asset/plugins/bootstrap/css/bootstrap.min.css';
import 'src/asset/css/main.css';
import axios from 'axios';
import { baseUrl } from 'src/views/config.js/baseUrl';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useHistory } from 'react-router-dom';
toast.configure();
const Add_Insurance = () => {
  const [r, setr] = useState(0);
  const [valueData, setvalueData] = useState([]);
  const [arr, setArr] = useState([]);
  const [check, setCheck] = useState([]);
  const [disable, setDisable] = useState(false);
  const [buttonText, setButtonText] = useState('Save');
  const history = useHistory();
  const navigateTo = () => {
    history.push('/Insurance/Insurance List');
  };
  const resultData = async () => {
    const result = await axios.get(baseUrl + '/hospitalAdmin/getInsurance', {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      },
    });
    setvalueData(result.data);
  };

  React.useEffect(() => {
    resultData();
  }, [r]);

  const handleCheck = (e) => {
    let clicked = e.target.value;
    let ob = {
      insurance: clicked.split('(')[0].trim().toString(),
      tpa: clicked.split('(')[1].trim().split(')')[0].trim().toString(),
    };
    setCheck((prevState) => {
      let isIndexFound = prevState.findIndex(
        (s) => s.insurance === ob.insurance && s.tpa === ob.tpa,
      );
      if (isIndexFound === -1) {
        prevState.push(ob);
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
      baseUrl + '/hospitalAdmin/addInsurance',
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
      toast.success('Insurance added successfully', {
        autoClose: 600,
        theme: 'colored',
      });
      navigateTo();
    }
  }

  return (
    <>
      <div>
        <section className="content">
          <div className="container-fluid">
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
                  Select all the insurances you want :
                </h2>

                <div
                  className="services col d-flex"
                  style={{ paddingTop: '1rem' }}
                >
                  <div className="col-md-12" style={{ paddingRight: '12px' }}>
                    <ul>
                      <div
                        className=""
                        style={{
                          justifyContent: 'space-between',
                          listStyle: 'none',
                        }}
                      >
                        <div style={{ width: '550px', float: 'left' }}>
                          {valueData.length !== 0 &&
                            valueData.map((e) => (
                              <li key={e.insurance}>
                                <input
                                  type="checkbox"
                                  onChange={handleCheck}
                                  value={e.insurance + ' (' + e.tpa + ')'}
                                  id={e.insurance + ' (' + e.tpa + ')'}
                                />
                                <label
                                  className="r-flex"
                                  htmlFor={e.insurance + ' (' + e.tpa + ')'}
                                  style={{
                                    paddingInline: '2rem',
                                  }}
                                >
                                  {e.insurance}
                                  <span>({e.tpa})</span>
                                </label>
                              </li>
                            ))}
                        </div>
                      </div>
                    </ul>
                  </div>
                </div>
              </div>
              <div></div>
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
export default Add_Insurance;
