import React, { useState } from 'react';
import 'src/asset/plugins/bootstrap/css/bootstrap.min.css';
import 'src/asset/css/main.css';
import { baseUrl } from 'src/views/config.js/baseUrl';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure();

const SubAdmin_list = () => {
  const [valueData, setvalueData] = useState([]);
  const [r, setr] = useState(0);

  const resultData = async () => {
    const result = await axios.get(
      baseUrl + '/hospitalAdmin/getHospitalSubAdmin',
      {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('token'),
        },
      },
    );
    setvalueData(result.data);
  };

  const hAdminAction = async (id) => {
    const p = id.uid;

    const hAdmin = async () => {
      const result = await axios.delete(
        baseUrl + '/hospitalAdmin/deleteHospitalSubAdmin',
        {
          data: { uid: p },
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token'),
          },
        },
      );
      if (result) {
        setr(r + 1);
        toast.error('Sub-Admin deleted successfully', {
          autoClose: 600,
        });
      }
    };
    var answer = window.confirm('Are you sure? You want to delete: ' + id.uid);
    if (answer) {
      hAdmin();
    }
  };

  React.useEffect(() => {
    resultData();
  }, [r]);

  return (
    <>
      <div>
        <section className="content">
          <div className="container-fluid">
            <div className="row clearfix">
              <div className="col-lg-12 col-md-12 col-sm-12 ">
                <div className="card">
                  <div className="header">
                    <h2>SubAdmin User List </h2>
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
                            <th>Userid</th>
                            <th>Duty</th>
                            <th>Actions</th>
                          </tr>
                        </thead>
                        <tfoot></tfoot>
                        <tbody style={{ width: '5px' }}>
                          {valueData.length !== 0 &&
                            valueData.map((value) => (
                              <tr>
                                <td>{value.uid}</td>
                                <td>{value.duty}</td>
                                <td style={{ textAlign: 'center' }}>
                                  <button
                                    onClick={() => hAdminAction(value)}
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
export default SubAdmin_list;
