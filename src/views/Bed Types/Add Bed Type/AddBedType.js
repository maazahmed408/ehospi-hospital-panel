import { useState, useEffect } from 'react';
import * as React from 'react';
import 'src/asset/plugins/bootstrap/css/bootstrap.min.css';
import 'src/asset/css/main.css';
import axios from 'axios';
import { baseUrl } from 'src/views/config.js/baseUrl';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useHistory } from 'react-router-dom';
toast.configure();
const Add_BedTypes = () => {
  const [c, setC] = useState('Save');
  const [disable, setDisable] = useState(false);
  const [bedName, setBedName] = useState('');
  const [amenitiesCharges, setAmenitiesCharges] = useState(0);
  const [facilitiesCharges, setFacilitiesCharges] = useState(0);
  const [bedCharges, setbedCharges] = useState('');
  const [check1, setCheck1] = useState([]);
  const [check2, setCheck2] = useState([]);
  const [allAmenities, setAllAmenities] = useState([]);
  const [allFacilities, setAllFacilities] = useState([]);
  const [amenities, setAmenities] = useState([]);
  const [facilities, setFacilities] = useState([]);
  const [checkedValue, setCheckedValue] = useState();
  const [file, setFile] = useState();
  const [bedCount, setBedCount] = useState();
  const history = useHistory();
  const navigateTo = () => {
    history.push('/Bed Types/Bed Type List');
  };

  const handleCheck1 = (e) => {
    setCheck1((prevState) => {
      let isIndexFound = prevState.indexOf(e.amenities);
      if (isIndexFound === -1) {
        let n = amenitiesCharges;
        n += e.price;
        setAmenitiesCharges(n);
        prevState.push(e.amenities);
        return prevState;
      } else {
        prevState.splice(isIndexFound, 1);
        let n = amenitiesCharges;
        n -= e.price;
        setAmenitiesCharges(n);
        return prevState;
      }
    });
    setAmenities(check1);
  };

  const handleCheck2 = (e) => {
    setCheck2((prevState) => {
      let isIndexFound = prevState.indexOf(e.facilities);
      if (isIndexFound === -1) {
        let n = facilitiesCharges;
        n += e.price;
        setFacilitiesCharges(n);
        prevState.push(e.facilities);
        return prevState;
      } else {
        prevState.splice(isIndexFound, 1);
        let n = facilitiesCharges;
        n -= e.price;
        setFacilitiesCharges(n);
        return prevState;
      }
    });
    setFacilities(check2);
  };

  async function handleClick(e) {
    e.preventDefault();
    let data = new FormData();
    setC('Loading...');
    setDisable(true);
    let item = { bedName },
      item3 = { amenitiesCharges, facilitiesCharges, bedCharges },
      item4 =
        Number(item3.amenitiesCharges) +
        Number(item3.facilitiesCharges) +
        Number(item3.bedCharges);

    data.append('amenities[]', amenities);
    data.append('facilities[]', facilities);
    data.append('bedName', item.bedName);
    data.append('numberOfBeds', bedCount);
    data.append('amenitiesCharges', Number(item3.amenitiesCharges));
    data.append('facilitiesCharges', Number(item3.facilitiesCharges));
    data.append('bedCharges', Number(item3.bedCharges));
    data.append('totalCharges', Number(item4));
    if (file) {
      data.append('image', file);
    }

    console.log(data);
    let result = await axios.post(
      baseUrl + '/hospitalAdmin/addBedTypes',
      data,
      {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('token'),
        },
      },
    );
    if (result) {
      toast.success('Bed added successfully', {
        autoClose: 600,
        theme: 'colored',
      });
      setBedName('');
      setCheckedValue(false);
      setCheckedValue(null);
      setAmenitiesCharges('');
      setFacilitiesCharges('');
      setbedCharges('');
      setCheck1([]);
      setCheck2([]);
      setDisable(false);
      setC('Save');
      navigateTo();
    }
  }

  const handleFile = (e) => {
    setFile(e.target.files[0]);
  };

  const resultData = async () => {
    const result = await axios.get(
      baseUrl + '/hospitalAdmin/getFullAmenities',
      {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('token'),
        },
      },
    );
    if (Array.isArray(result.data)) {
      setAllAmenities(result.data);
    } else {
      console.log(result.data);
    }
  };

  const resData = async () => {
    const result = await axios.get(
      baseUrl + '/hospitalAdmin/getFullFacilities',
      {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('token'),
        },
      },
    );

    if (Array.isArray(result.data)) {
      setAllFacilities(result.data);
    } else {
      console.log(result.data);
    }
  };
  useEffect(() => {
    resultData();
    resData();
  }, []);
  return (
    <>
      <div>
        <section class="content">
          <div class="container-fluid">
            <div class="block-header">
              <h1
                className="Addbed"
                style={{ color: '#056078', fontSize: '20px' }}
              >
                Add Bed Type
              </h1>
            </div>
            <div>
              <div class=" Addnow1 col row-12 d-flex">
                <div className=" facility1 col-sm-10 ">
                  <form style={{ display: 'flex', alignItems: 'center' }}>
                    <input
                      style={{ marginLeft: '10px', paddingTop: '5px' }}
                      type="text"
                      name="BedName"
                      required="required"
                      value={bedName}
                      onChange={(e) => {
                        setBedName(e.target.value);
                      }}
                      placeholder="Enter Bed Name"
                    />
                    <input
                      style={{ marginLeft: '30px', paddingTop: '5px' }}
                      type="number"
                      name="Enter bed Charges"
                      required="required"
                      value={bedCharges}
                      placeholder="Bed Charges"
                      onChange={(e) => {
                        setbedCharges(e.target.value);
                      }}
                    />
                    <input
                      style={{ marginLeft: '30px', paddingTop: '5px' }}
                      type="number"
                      name="numberOfBeds"
                      required="required"
                      value={bedCount}
                      placeholder="Number Of Beds"
                      onChange={(e) => {
                        setBedCount(e.target.value);
                      }}
                    />
                    <input
                      type="file"
                      style={{ marginLeft: '25px' }}
                      onChange={(e) => {
                        handleFile(e);
                      }}
                    />
                  </form>
                </div>
              </div>
              <div>
                <h2
                  className="Addbed"
                  style={{
                    color: '#056078',
                    fontSize: '20px',
                    paddingTop: '30px',
                  }}
                >
                  Select all amenities in this bed type :
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
                          flexDirection: 'column',
                          listStyle: 'none',
                        }}
                      >
                        <div className="r-flex">
                          {allAmenities.length !== 0 &&
                            allAmenities.map((e) => {
                              return (
                                <li key={e.amenities}>
                                  <input
                                    type="checkbox"
                                    value={e.amenities}
                                    id={e.amenities}
                                    checked={checkedValue}
                                    onClick={() => handleCheck1(e)}
                                  />
                                  <label
                                    className="r-flex"
                                    value={e.amenities}
                                    htmlFor={e.amenities}
                                    style={{
                                      paddingInline: '2rem',
                                    }}
                                  >
                                    {e.amenities}
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
              <div>
                <h2
                  className="Addbed"
                  style={{
                    color: '#056078',
                    fontSize: '20px',
                    paddingTop: '30px',
                  }}
                >
                  Select all facilities in this bed type :
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
                          flexDirection: 'column',
                          listStyle: 'none',
                        }}
                      >
                        <div className="r-flex">
                          {allFacilities.length !== 0 &&
                            allFacilities.map((e) => {
                              return (
                                <li key={e.facilities}>
                                  <input
                                    type="checkbox"
                                    value={e.facilities}
                                    id={e.facilities}
                                    checked={checkedValue}
                                    onClick={() => handleCheck2(e)}
                                  />
                                  <label
                                    className="r-flex"
                                    value={e.facilities}
                                    htmlFor={e.facilities}
                                    style={{
                                      paddingInline: '2rem',
                                    }}
                                  >
                                    {e.facilities}
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
                {c}
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
export default Add_BedTypes;
