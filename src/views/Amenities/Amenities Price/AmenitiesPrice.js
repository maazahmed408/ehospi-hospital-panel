import React, { useState, useEffect } from 'react';
import 'src/asset/plugins/bootstrap/css/bootstrap.min.css';
import 'src/asset/css/main.css';
import axios from 'axios';
import { baseUrl } from 'src/views/config.js/baseUrl';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure();
const Amenities_Price = () => {
  const [amenitiess, setAllAmenities] = useState([]);
  const [r, setr] = useState(0);
  const [disable, setDisable] = useState(false);
  let editFormData = '';

  const resultData = async () => {
    const result = await axios.get(
      baseUrl + '/hospitalAdmin/getFullAmenities',
      {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('token'),
        },
      },
    );

    let data = [];
    for (let i = 0; i < result.data.length; i++) {
      let p = result.data[i];
      p.input = '';
      p.itemIndex = i;
      data.push(p);
    }
    setAllAmenities(data);
  };
  useEffect(() => {
    resultData();
  }, [r]);

  const handleAddFormChange = (e, id) => {
    if (e.nativeEvent.data) {
      let newInput = [...amenitiess];
      newInput[id].input = newInput[id].input + e.nativeEvent.data;
      setAllAmenities(newInput);
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
        baseUrl + '/hospitalAdmin/updateAmenityPrice',
        { price: v.input, amenity: v.amenities },
        {
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token'),
          },
        },
      );
      let p = r;
      setr(++p);
      console.log(result);
      setDisable(false);
      if (
        result.data != null &&
        result.data.message === 'Price updated Sucessfully'
      ) {
        setDisable(false);
        toast.success('Amenities price added successfully', {
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
        baseUrl + '/hospitalAdmin/deleteAmenities/' + v._id,
        {},
        {
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token'),
          },
        },
      );
      let p = r;
      setr(++p);
      console.log(result);
      setDisable(false);
      if (result) {
        setDisable(false);
        toast.error('Amenities deleted successfully', {
          autoClose: 600,
          theme: 'colored',
        });
      }
    };

    var answer = window.confirm(
      'Are you sure? You want to delete: ' + v.amenities,
    );
    if (answer) {
      hAdmin();
    }
  };

  return (
    <>
      <h1 className="Addbed" style={{ color: '#056078', fontSize: '20px' }}>
        Add amenities charges :
      </h1>

      <label style={{ marginLeft: '50px', paddingTop: '5px' }}>
        Amenities List
      </label>

      <label style={{ marginLeft: '150px', paddingTop: '5px' }}>
        Amenities Price
      </label>

      <div>
        {amenitiess.length !== 0 &&
          amenitiess.map((v, index) => {
            return (
              <>
                <input
                  style={{ marginLeft: '30px', paddingTop: '5px' }}
                  type="text"
                  value={v.amenities}
                  name="AmenitiesList"
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
export default Amenities_Price;
