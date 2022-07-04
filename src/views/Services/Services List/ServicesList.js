import React, { useState } from 'react';
import 'src/asset/plugins/bootstrap/css/bootstrap.min.css';
import 'src/asset/css/main.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { baseUrl } from 'src/views/config.js/baseUrl';
import axios from 'axios';

toast.configure();

const Services_List = () => {
  const [valueData, setvalueData] = useState([]);
  const [r, setr] = useState(0);

  const resultData = async () => {
    const result = await axios.get(baseUrl + '/hospitalAdmin/getFullServices', {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      },
    });
    setvalueData(result.data);
  };

  React.useEffect(() => {
    resultData();
  }, [r]);

  const hAdminDepAction = async (id) => {
    const p = id.services;

    const hAdmin = async () => {
      const result = await axios.put(
        baseUrl + '/hospitalAdmin/deleteServices/' + p,
        {},
        {
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token'),
          },
        },
      );
      if (result) {
        setr(r + 1);
        toast.error('Service deleted successfully', {
          autoClose: 600,
          theme: 'colored',
        });
      }
    };
    var answer = window.confirm('Are you sure? You want to delete: ' + p);
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
                    <h2>Services List </h2>
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
                            <th>Services List</th>
                            <th>Actions</th>
                          </tr>
                        </thead>
                        <tfoot></tfoot>
                        <tbody style={{ width: '5px' }}>
                          {valueData.length !== 0 &&
                            valueData.map((value) => (
                              <tr>
                                <td>{value.services}</td>
                                <td style={{ textAlign: 'center' }}>
                                  <button
                                    onClick={() => hAdminDepAction(value)}
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
export default Services_List;
