import React, { useState, useEffect } from 'react';
import 'src/asset/plugins/bootstrap/css/bootstrap.min.css';
import 'src/asset/css/main.css';
import axios from 'axios';
import { baseUrl } from 'src/views/config.js/baseUrl';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure();
const Facilities_Price = () => {
  const [facilitiess, setAllFacilities] = useState([]);
  const [r, setr] = useState(0);
  const [disable, setDisable] = useState(false);
  const [editFormData, setEditFormData] = useState('');
  console.log(setEditFormData);
  const resultData = async () => {
    const result = await axios.get(
      baseUrl + '/hospitalAdmin/getFullFacilities',
      {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('token'),
        },
      },
    );

    let data = [];

    console.log('API calling');
    for (let i = 0; i < result.data.length; i++) {
      let p = result.data[i];
      p.input = '';
      p.itemIndex = i;
      data.push(p);
    }
    setAllFacilities(data);
  };
  useEffect(() => {
    resultData();
  }, [r]);

  const handleAddFormChange = (e, id) => {
    if (e.nativeEvent.data) {
      let newInput = [...facilitiess];
      newInput[id].input = newInput[id].input + e.nativeEvent.data;
      setAllFacilities(newInput);
    }
  };

  const childaction2 = async (v, index) => {
    setDisable(true);
    if (!v.input) {
      toast.warning('Please update price', {
        autoClose: 600,
        theme: 'colored',
      });
    } else {
      const result = await axios.put(
        baseUrl + '/hospitalAdmin/updateFacilityPrice',
        { price: v.input, facility: v.facilities },
        {
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token'),
          },
        },
      );
      let p = r;
      setr(++p);
      setDisable(false);
      console.log(result);
      if (
        result.data != null &&
        result.data.message === 'Price updated Sucessfully'
      ) {
        setDisable(false);
        toast.success('Facilities price added successfully', {
          autoClose: 600,
          theme: 'colored',
        });
      }
    }
  };
  const childaction3 = async (v, index) => {
    setDisable(true);
    const hAdmin = async () => {
      const result = await axios.put(
        baseUrl + '/hospitalAdmin/deleteFacilities/' + v._id,
        {},
        {
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token'),
          },
        },
      );
      let p = r;
      setr(++p);
      setDisable(false);
      if (result) {
        setDisable(false);
        toast.error('Facilities deleted successfully', {
          autoClose: 600,
          theme: 'colored',
        });
      }
    };
    var answer = window.confirm(
      'Are you sure? You want to delete: ' + v.facilities,
    );
    if (answer) {
      hAdmin();
    }
  };

  return (
    <>
      <h1 className="Addbed" style={{ color: '#056078', fontSize: '20px' }}>
        Add facilities charges :
      </h1>

      <label style={{ marginLeft: '50px', paddingTop: '5px' }}>
        Facilities List
      </label>

      <label style={{ marginLeft: '150px', paddingTop: '5px' }}>
        Facilities Price
      </label>

      <div>
        {facilitiess.length !== 0 &&
          facilitiess.map((v, index) => {
            return (
              <>
                <input
                  style={{ marginLeft: '30px', paddingTop: '5px' }}
                  type="text"
                  value={v.facilities}
                  name="facilitiesList"
                  required="required"
                />

                <input
                  style={{ marginLeft: '60px', paddingTop: '5px' }}
                  type="text"
                  name="price"
                  required="required"
                  placeholder={v.price}
                  value={editFormData.price}
                  onChange={(e) => handleAddFormChange(e, index)}
                />
                <button
                  className="submit2"
                  style={{
                    background: '#056078',
                    color: 'white',
                    marginLeft: '100px',
                    borderRadius: '5px',
                  }}
                  type="submit"
                  disabled={disable}
                  onClick={() => childaction2(v, index)}
                >
                  Save
                </button>
                <button
                  className="submit2"
                  style={{
                    background: '#056078',
                    color: 'white',
                    marginLeft: '100px',
                    borderRadius: '5px',
                  }}
                  type="submit"
                  disabled={disable}
                  onClick={() => childaction3(v, index)}
                >
                  Delete
                </button>
                <br />
              </>
            );
          })}
      </div>
    </>
  );
};
export default Facilities_Price;
