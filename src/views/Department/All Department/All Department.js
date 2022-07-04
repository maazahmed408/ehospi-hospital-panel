import React, { useState } from 'react';
import 'src/asset/plugins/bootstrap/css/bootstrap.min.css';
import 'src/asset/css/main.css';
import axios from 'axios';
import { baseUrl } from 'src/views/config.js/baseUrl';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure();

const All_Department = () => {
  const [valueData, setvalueData] = useState([]);
  const [r, setr] = useState([]);

  const resultData = async () => {
    const result = await axios.get(
      baseUrl + '/hospitalAdmin/getFullDepartment',
      {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('token'),
        },
      },
    );
    setvalueData(result.data);
    console.log('Data:', result.data);
  };

  React.useEffect(() => {
    resultData();
  }, [r]);

  const hAdminDepAction = async (id) => {
    const p = id.department;

    const hAdmin = async () => {
      const result = await axios.put(
        baseUrl + '/hospitalAdmin/deleteDepartment/' + p,
        {},
        {
          data: { department: p },
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token'),
          },
        },
      );
      if (result) {
        setr(r + 1);
        toast.error('Department deleted successfully', {
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

  const [contacts, setContacts] = useState(valueData);

  const [editFormData, setEditFormData] = useState({
    department: ' ',
  });
  console.log(setEditFormData);
  const [editContactId, setEditContactId] = useState(null);

  const handleEditFormSubmit = (event) => {
    event.preventDefault();
    const editedContact = {
      id: editContactId,
      department: editFormData.department,
    };
    const newContacts = [...contacts];
    const index = contacts.findIndex((contact) => contact.id === editContactId);
    newContacts[index] = editedContact;
    setContacts(newContacts);
    setEditContactId(null);
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
                    <h2>Department List</h2>
                  </div>
                  <div class="body table-responsive">
                    <form onSubmit={handleEditFormSubmit}>
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
                            <th>Department Name</th>
                            <th>Actions</th>
                          </tr>
                        </thead>
                        <tfoot></tfoot>
                        <tbody style={{ width: '5px' }}>
                          {valueData.length !== 0 &&
                            valueData.map((value) => (
                              <tr>
                                <td>{value.department}</td>
                                <td style={{ textAlign: 'left' }}>
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
export default All_Department;
