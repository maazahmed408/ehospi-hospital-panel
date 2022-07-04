import React, { useState, Fragment } from 'react';
import 'src/asset/plugins/bootstrap/css/bootstrap.min.css';
import 'src/asset/css/main.css';
import { Link } from 'react-router-dom';
import data from 'src/views/Bed Booking/mock-data.json';
import ReadOnlyRow from 'src/views/Bed Booking/ReadOnlyRow';
import EditableRow from 'src/views/Bed Booking/EditableRow';

const All_bed = () => {
  const [contacts, setContacts] = useState(data);
  const [editFormData, setEditFormData] = useState({
    Room_No: '',
    Patient: '',
    Allotment: '',
    Discharge: '',
    Room_Type: '',
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
      Room_No: editFormData.Room_No,
      Patient: editFormData.Patient,
      Allotment: editFormData.Allotment,
      Discharge: editFormData.Discharge,
      Room_Type: editFormData.Discharge,
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
      Room_No: contact.Room_No,
      Patient: contact.patient,
      Allotment: contact.Allotment,
      Discharge: contact.Discharge,
      Room_Type: contact.Room_Type,
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
              <div class="Alldoctor col-lg-12 col-md-12 col-sm-12">
                <div class="card">
                  <div class="header">
                    <div class=" Addnow1 col row-12 d-flex">
                      <h2 class="col-10" style={{ paddingTop: '10px' }}>
                        Bed Menu
                      </h2>
                      <div className=" Addnow1">
                        <Link to="Bed Expense">
                          <button
                            class=" col-2"
                            type="button"
                            className="bedexpense btn btn-primary"
                            style={{
                              borderRadius: '10px',
                              background: '#056078',
                              color: 'white',
                              fontSize: '10px',
                            }}
                          >
                            Add Now
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div class="body table-responsive">
                    <form onSubmit={handleEditFormSubmit}>
                      <table class="table table-bordered table-striped table-hover js-basic-example dataTable">
                        <thead>
                          <tr>
                            <th>Room/ward Type</th>
                            <th>Bed Type</th>
                            <th>Facility</th>
                            <th>charges</th>
                            <th>Total Amount</th>
                            <th>Action</th>
                          </tr>
                        </thead>
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
                    {/*<form onSubmit={handleAddFormSubmit}>
                                            <input
                                                type="text"
                                                name="Room_No"
                                                required="required"
                                                placeholder="Enter Room_no"
                                                onChange={handleAddFormChange}
                                            />
                                            <input
                                                type="text"
                                                name="Patient"
                                                required="required"
                                                placeholder="Patient"
                                                onChange={handleAddFormChange}
                                            />
                                             <input
                                                type="text"
                                                name="Allotment"
                                                required="required"
                                                placeholder="Allotment"
                                                onChange={handleAddFormChange}
                                            />
                                             <input
                                                type="text"
                                                name="Discharge"
                                                required="required"
                                                placeholder="Discharge"
                                                onChange={handleAddFormChange}
                                            />
                                            <input
                                                type="text"
                                                name="Room_Type"
                                                required="required"
                                                placeholder="Room_Type"
                                                onChange={handleAddFormChange}
                                            />
                                            <button className="btn btn-primary" type="submit">Add</button>
                                            </form>*/}
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
export default All_bed;
