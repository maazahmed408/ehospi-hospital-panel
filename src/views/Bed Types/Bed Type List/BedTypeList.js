import React, { useState, Fragment, useEffect } from 'react';
import 'src/asset/plugins/bootstrap/css/bootstrap.min.css';
import 'src/asset/css/main.css';
import { baseUrl } from 'src/views/config.js/baseUrl';
import { getBedTypeImages } from '../../../apiService/photos';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import NewModal from 'src/components/NewModal';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure();

const BedType_List = () => {
  const [valueData, setvalueData] = useState([]);
  const [r, setr] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  const [images, setImages] = useState([]);
  const [selectedBedId, setSelectedBedId] = useState('');

  const resultData = async () => {
    const result = await axios.get(baseUrl + '/hospitalAdmin/getBedTypes', {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      },
    });
    console.log(result.data);
    if (result.status === 200 && result.data.message !== 'No beds found') {
      setvalueData(result.data);
    } else {
      setvalueData([]);
    }
  };
  useEffect(() => {
    resultData();
  }, [r]);
  const hAdminDelAction = async (value) => {
    var answer = window.confirm(
      'Are you sure? You want to delete: ' + value.bedName,
    );
    if (answer) {
      const result = await axios.delete(
        baseUrl + '/hospitalAdmin/deleteBedTypes/' + value._id,
        {
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token'),
          },
        },
      );
      if (result.data.message === 'Deleted sucessfully') {
        toast.error('Department deleted successfully', {
          autoClose: 600,
          theme: 'colored',
        });
        setr(r + 1);
      }
    }
  };

  const handleViewImages = (id) => {
    setSelectedBedId(id);
    getBedTypeImages(id).then((res) => {
      if (res.data.images) {
        setImages(res.data.images);
      }
    });
    setModalVisible(true);
  };

  return (
    <>
      <div>
        <section className="content">
          <div className="container-fluid">
            <div className="row clearfix">
              <div className="col-lg-12 col-md-12 col-sm-12 ">
                <div className="card">
                  <div className="header">
                    <h2>Bed Type List </h2>
                  </div>
                  <div class="body table-responsive">
                    <form>
                      <table class="table table-bordered table-striped table-hover js-basic-example dataTable">
                        <thead>
                          <tr
                            className="table patient"
                            style={{
                              paddingTop: '30px',
                              marginLeft: '30px',
                              width: '5px',
                            }}
                          >
                            <th>Bed Name</th>
                            <th>Amenities</th>
                            <th>Facilities</th>
                            <th>Amenities charges</th>
                            <th>Facilities charges</th>
                            <th>Bed charges</th>
                            <th>Total charges</th>
                            <th>Number Of Beds</th>
                            <th>Actions</th>
                          </tr>
                        </thead>
                        <tfoot></tfoot>
                        <tbody style={{ width: '5px' }}>
                          {valueData &&
                            valueData.map((value, index) => (
                              <tr key={index}>
                                <td>{value.bedName}</td>
                                <td>{value.amenities.length}</td>
                                <td>{value.facilities.length}</td>
                                <td>{value.charges.amenitiesCharges}</td>
                                <td>{value.charges.facilitiesCharges}</td>
                                <td>{value.charges.bedCharges}</td>
                                <td>{value.charges.totalCharges}</td>
                                <td>{value.numberOfBeds}</td>
                                <td
                                  style={{
                                    textAlign: 'center',
                                  }}
                                >
                                  <button
                                    onClick={() => handleViewImages(value._id)}
                                    className="btn btn-xm px-1 py-1 btn btn-xm"
                                    style={{ marginRight: '1.5rem' }}
                                  >
                                    <FontAwesomeIcon
                                      style={{ color: 'green' }}
                                      icon={faEye}
                                    />
                                  </button>
                                  <button
                                    onClick={() => hAdminDelAction(value)}
                                    className="btn btn-xm px-0 py-1 btn btn-xm text-align left"
                                  >
                                    <FontAwesomeIcon
                                      style={{ color: 'red' }}
                                      icon={faCircleXmark}
                                    />
                                  </button>
                                </td>
                              </tr>
                            ))}
                        </tbody>
                      </table>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <NewModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        images={images}
        bedId={selectedBedId}
      />
    </>
  );
};
export default BedType_List;
