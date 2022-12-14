import React, { useState, Fragment } from 'react';
import 'src/asset/plugins/bootstrap/css/bootstrap.min.css';
import 'src/asset/css/main.css';
import { Link } from 'react-router-dom';
import data from 'src/views/Patient/mock-data.json';
import ReadOnlyRow from 'src/views/Patient/ReadOnlyRow';
import EditableRow from 'src/views/Patient/EditableRow';
import { Button } from '@coreui/coreui';

const All_patient = () => {
  const [contacts, setContacts] = useState(data);
  const [editFormData, setEditFormData] = useState({
    Patient_id: '',
    Name: '',
    Age: '',
    Adress: '',
    PhoneNumber: '',
    LastVisit: '',
  });

  const [editContactId, setEditContactId] = useState(null);

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute('name');
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedContact = {
      id: editContactId,
      Patient_id: editFormData.Patient_id,
      Name: editFormData.Name,
      Age: editFormData.Age,
      Adress: editFormData.Adress,
      PhoneNumber: editFormData.PhoneNumber,
      LastVisit: editFormData.LastVisit,
    };

    const newContacts = [...contacts];
    const index = contacts.findIndex((contact) => contact.id === editContactId);

    newContacts[index] = editedContact;

    setContacts(newContacts);
    setEditContactId(null);
  };

  const handleEditClick = (event, contact) => {
    event.preventDefault();
    setEditContactId(contact.id);
    const formValues = {
      Patient_id: contact.Patient_id,
      Name: contact.Name,
      Age: contact.Age,
      Adress: contact.Adress,
      PhoneNumber: contact.PhoneNumber,
      LastVisit: contact.LastVisit,
    };

    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditContactId(null);
  };

  const handleDeleteClick = (contactId) => {
    const newContacts = [...contacts];
    const index = contacts.findIndex((contact) => contact.id === contactId);
    newContacts.splice(index, 1);
    setContacts(newContacts);
  };

  return (
    <>
      <div>
        <section class="content">
          <div class="container-fluid">
            <div class="row clearfix">
              <div class="col-lg-12 col-md-12 col-sm-12">
                <div class="card">
                  <div class="header">
                    <h2>Hospital patient</h2>
                    <form class=" searchbox form-inline d-flex my-2 my-lg-0">
                      <input
                        class="form-control mr-sm-2"
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                      />
                      <button
                        class="btn btn-outline-success my-2 my-sm-0"
                        type="submit"
                      >
                        Search
                      </button>
                    </form>
                  </div>
                  <div class="body table-responsive">
                    <form onSubmit={handleEditFormSubmit}>
                      <table class="table table-bordered table-striped table-hover js-basic-example dataTable">
                        <thead>
                          <tr
                            className="tablepatient"
                            style={{ paddingTop: '30px' }}
                          >
                            <th>Patient Id</th>
                            <th>Name</th>
                            <th>Age</th>
                            <th>address</th>
                            <th>Number</th>
                            <th>Last Visit</th>
                            <th>Status</th>
                          </tr>
                        </thead>
                        <tfoot></tfoot>
                        <tbody>
                          {contacts.map((contact) => (
                            <Fragment>
                              {editContactId === contact.id ? (
                                <EditableRow
                                  editFormData={editFormData}
                                  handleEditFormChange={handleEditFormChange}
                                  handleCancelClick={handleCancelClick}
                                />
                              ) : (
                                <ReadOnlyRow
                                  contact={contact}
                                  handleEditClick={handleEditClick}
                                  handleDeleteClick={handleDeleteClick}
                                />
                              )}
                            </Fragment>
                          ))}
                        </tbody>
                      </table>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row clearfix">
            <div className="col-sm-12 text-center">
              <Link to="Add patient">
                <Button>Add Patient</Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
export default All_patient;
