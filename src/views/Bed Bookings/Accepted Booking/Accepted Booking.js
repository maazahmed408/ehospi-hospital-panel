import React, { useState, Fragment, useEffect } from 'react';
import { FaFileDownload } from 'react-icons/fa';
import 'src/asset/plugins/bootstrap/css/bootstrap.min.css';
import 'src/asset/css/main.css';
import { baseUrl } from 'src/views/config.js/baseUrl';
import axios from 'axios';
import { Form, Modal, Button } from 'react-bootstrap';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure();

const Accepted_Booking = () => {
  const [valueData, setvalueData] = useState([]);
  // const [c, setC] = useState(true);
  const [show, setShow] = useState(false);
  const [bookingId, setBookingId] = useState('');
  const [idPlaceholder, setIdPlaceholder] = useState('');
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const handleClose = () => {
    setBookingId('');
    setName('');
    setDate('');
    setTime('');

    return setShow(false);
  };

  const handleShow = ({ id, name }) => {
    setIdPlaceholder(id);
    setName(name);
    return setShow(true);
  };
  const resultData = async () => {
    const result = await axios.get(
      baseUrl + '/hospitalAdmin/getAcceptedBookingRequests',
      {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('token'),
        },
      },
    );
    setvalueData(result.data);
  };

  useEffect(() => {
    resultData();
  }, []);

  const handleComplete = async () => {
    try {
      const res = await axios.post(
        baseUrl + '/hospitalAdmin/completeBooking',
        {
          bookingId: bookingId,
          patientName: name,
          date: date,
          time: time,
        },
        {
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token'),
          },
        },
      );
      if (res.status === 200) {
        resultData();
        handleClose();
        toast.success('Completed Successfully');
      }
    } catch (e) {
      console.log(e);
      handleClose();
      toast.error('Failed To Submit');
    }
  };

  return (
    <>
      <div>
        <section className="content">
          <div className="container-fluid">
            <div className="row clearfix">
              <div className="col-lg-12 col-md-12 col-sm-12 ">
                {/* <Button
                  variant="success"
                  onClick={handleShow}
                  style={{
                    marginBottom: '1rem',
                    display: 'block',
                    marginLeft: 'auto',
                    marginRight: 0,
                  }}
                >
                  Booking Completed
                </Button> */}

                <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>
                      Fill the details to complete the booking :
                    </Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <Form>
                      <Form.Group className="mb-3">
                        <Form.Label style={{ color: 'black' }}>
                          Booking Id
                        </Form.Label>
                        <Form.Control
                          value={bookingId}
                          type="Booking ID"
                          placeholder={idPlaceholder}
                          autoFocus
                          onChange={(e) => setBookingId(e.target.value)}
                        />
                        <Form.Group className="mb-3">
                          <Form.Label style={{ color: 'black' }}>
                            Patient Name
                          </Form.Label>
                          <Form.Control
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Enter full name"
                          />
                        </Form.Group>
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Label style={{ color: 'black' }}>Date</Form.Label>
                        <Form.Control
                          type="date"
                          value={date}
                          placeholder="Enter date"
                          onChange={(e) => setDate(e.target.value)}
                        />
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Label style={{ color: 'black' }}>Time</Form.Label>
                        <Form.Control
                          type="time"
                          value={time}
                          placeholder="Enter time"
                          onChange={(e) => setTime(e.target.value)}
                        />
                      </Form.Group>
                    </Form>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                      Close
                    </Button>
                    <Button variant="primary" onClick={handleComplete}>
                      Complete Booking
                    </Button>
                  </Modal.Footer>
                </Modal>

                {/* <button
                  style={{
                    marginBottom: '1rem',
                    display: 'block',
                    marginLeft: 'auto',
                    marginRight: 0,
                  }}
                >
                  Booking Completed
                </button> */}
                <div className="card">
                  <div className="header">
                    <h2>Accepted Booking List </h2>
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
                            {/* <th>HospitalCode</th> */}
                            <th>BookingID</th>
                            <th>BookingStatus</th>
                            <th>PatientName</th>
                            <th>FamilyMember</th>
                            <th>Date_Of_Birth</th>
                            <th>Gender</th>
                            <th>F/H_Name</th>
                            <th>Full_Address</th>
                            <th>Phone</th>
                            <th>Email</th>
                            <th>Nationality</th>
                            <th>Religion</th>
                            <th>MonthlyIncome</th>
                            <th>Occupation</th>
                            <th>Alt_Phone</th>
                            <th>Doctor_Name</th>
                            <th>Policy_Number</th>
                            <th>EmployerName</th>
                            <th>EmployerID</th>
                            <th>Prescription</th>
                            <th>Id Proof</th>
                            <th>Insurance</th>
                          </tr>
                        </thead>
                        <tfoot></tfoot>
                        <tbody style={{ width: '5px' }}>
                          {valueData.length !== 0 &&
                            valueData.map((value) => (
                              <tr>
                                <td>
                                  <Button
                                    variant="success"
                                    onClick={() =>
                                      handleShow({
                                        id: value.bookingId,
                                        name: value.patientName,
                                      })
                                    }
                                  >
                                    {value.bookingId}
                                  </Button>
                                </td>
                                <td>{value.bookingStatus}</td>
                                <td>{value.patientName}</td>
                                <td>{value.familyMember}</td>
                                <td>{value.dob}</td>
                                <td>{value.gender}</td>
                                <td>{value.fatherHusbandName}</td>
                                <td>{value.address}</td>
                                <td>{value.phone}</td>
                                <td>{value.email}</td>
                                <td>{value.nationality}</td>
                                <td>{value.religion}</td>
                                <td>{value.monthlyIncome}</td>
                                <td>{value.occupation}</td>
                                <td>{value.altPhone}</td>
                                <td>{value.doctorName}</td>
                                <td>{value.policyNumber}</td>
                                <td>{value.employerName}</td>
                                <td>{value.employerId}</td>
                                <td align="center">
                                  <a href={value.prescriptionUrl} download>
                                    <FaFileDownload
                                      size={24}
                                      style={{ cursor: 'pointer' }}
                                    />
                                  </a>
                                </td>
                                <td align="center">
                                  <a href={value.idProofUrl} download>
                                    <FaFileDownload
                                      size={24}
                                      style={{ cursor: 'pointer' }}
                                    />
                                  </a>
                                </td>
                                <td align="center">
                                  <a href={value.insuranceUrl} download>
                                    <FaFileDownload
                                      size={24}
                                      style={{ cursor: 'pointer' }}
                                    />
                                  </a>
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
export default Accepted_Booking;
