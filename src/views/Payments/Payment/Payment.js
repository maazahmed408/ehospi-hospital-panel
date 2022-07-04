import React, { useState, Fragment } from 'react';
import 'src/asset/plugins/bootstrap/css/bootstrap.min.css';
import 'src/asset/css/main.css';
import { Link } from 'react-router-dom';
import data from 'src/views/Payments/mock-data.json';
import ReadOnlyRow from 'src/views/Payments/ReadOnlyRow';
import EditableRow from 'src/views/Payments/EditableRow';

const Payment = () => {
  const [contacts, setContacts] = useState(data);

  const [editFormData, setEditFormData] = useState({
    Bill_No: '',
    Bill_Date: '',
    Patient: '',
    Doctor: '',
    Amount: '',
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
      Bill_No: editFormData.Bill_No,
      Bill_Date: editFormData.Bill_Date,
      Patient: editFormData.Doctor,
      Doctor: editFormData.Doctor,
      Amount: editFormData.Amount,
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
      Bill_No: contact.Bill_No,
      Bill_Date: contact.Bill_Date,
      Patient: contact.Patient,
      Doctor: contact.Doctor,
      Amount: contact.Amount,
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
            <div class="block-header">
              <h2>Payments</h2>
            </div>
            <div class="row clearfix">
              <div class="col-lg-12 col-md-12 col-sm-12">
                <div class="card">
                  <div class="header">
                    <h2>Hospital Payments</h2>
                  </div>
                  <div class="body table-responsive">
                    <form onSubmit={handleEditFormSubmit}>
                      <table class="table table-bordered table-striped table-hover js-basic-example dataTable">
                        <thead>
                          <tr>
                            <th>Bill No</th>
                            <th>Bill Date</th>
                            <th>Patient</th>
                            <th>Doctor</th>
                            <th>Amount</th>
                            <th>status</th>
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
              <Link to="Add payment">
                {/* <a  className="btn btn-raised g-bg-cyan" style={{borderRadius: '10px'}}>Add payment</a> */}
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
export default Payment;
