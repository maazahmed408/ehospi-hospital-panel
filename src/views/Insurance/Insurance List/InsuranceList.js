import React, { useState, Fragment } from 'react';
import 'src/asset/plugins/bootstrap/css/bootstrap.min.css';
import 'src/asset/css/main.css';
import { baseUrl } from 'src/views/config.js/baseUrl';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure();

const Insurance_List = () => {
  const [valueData, setvalueData] = useState([]);
  const [r, setr] = useState(0);

  const resultData = async () => {
    const result = await axios.get(
      baseUrl + '/hospitalAdmin/getFullInsurance',
      {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('token'),
        },
      },
    );
    setvalueData(result.data);
  };

  React.useEffect(() => {
    resultData();
  }, [r]);

  const hAdminInsAction = async (id) => {
    const hAdmin = async () => {
      const result = await axios.put(
        baseUrl +
          '/hospitalAdmin/deleteInsurance/' +
          id.insurance +
          '/' +
          id.tpa,
        {},
        {
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token'),
          },
        },
      );

      if (result) {
        setr(r + 1);
        toast.error('Insurance deleted successfully', {
          autoClose: 600,
          theme: 'colored',
        });
      }
    };
    var answer = window.confirm(
      'Are you sure? You want to delete: ' + id.insurance + ' (' + id.tpa + ')',
    );
    if (answer) {
      hAdmin();
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
                    <h2>Insurance List </h2>
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
                            <th>Insurance List</th>
                            <th>TPA</th>
                            <th>Actions</th>
                          </tr>
                        </thead>
                        <tfoot></tfoot>
                        <tbody style={{ width: '5px' }}>
                          {valueData.length !== 0 &&
                            valueData.map((value) => (
                              <tr>
                                <td>{value.insurance}</td>
                                <td>{value.tpa}</td>

                                <td style={{ textAlign: 'center' }}>
                                  <button
                                    onClick={() => hAdminInsAction(value)}
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
export default Insurance_List;
