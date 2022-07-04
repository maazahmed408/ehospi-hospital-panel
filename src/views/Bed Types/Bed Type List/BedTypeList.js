import React, { useState, Fragment, useEffect } from 'react';
import 'src/asset/plugins/bootstrap/css/bootstrap.min.css';
import 'src/asset/css/main.css';
import { baseUrl } from 'src/views/config.js/baseUrl';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure();

const BedType_List = () => {
  const [valueData, setvalueData] = useState([]);
  const [r, setr] = useState(0);
  const resultData = async () => {
    const result = await axios.get(baseUrl + '/hospitalAdmin/getBedTypes', {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      },
    });
    setvalueData(result.data);
  };
  useEffect(() => {
    resultData();
  }, [r]);
  const hAdminDelAction = async (value) => {
    var answer = window.confirm(
      'Are you sure? You want to delete: ' + value.bedName,
    );
    if (answer) {
      const result = await axios.put(
        baseUrl + '/hospitalAdmin/deleteBedTypes/' + value._id,
        {},
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
                            <th>Actions</th>
                          </tr>
                        </thead>
                        <tfoot></tfoot>
                        <tbody style={{ width: '5px' }}>
                          {valueData.length !== 0 &&
                            valueData.map((value) => (
                              <tr>
                                <td>{value.bedName}</td>
                                <td>{value.amenities.length}</td>
                                <td>{value.facilities.length}</td>
                                <td>{value.charges.amenitiesCharges}</td>
                                <td>{value.charges.facilitiesCharges}</td>
                                <td>{value.charges.bedCharges}</td>
                                <td>{value.charges.totalCharges}</td>
                                <td style={{ textAlign: 'center' }}>
                                  <button
                                    onClick={() => hAdminDelAction(value)}
                                    className="btn btn-xm px-1 py-1 btn btn-xm"
                                  >
                                    <i class="fas fa-trash"></i>
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
    </>
  );
};
export default BedType_List;
