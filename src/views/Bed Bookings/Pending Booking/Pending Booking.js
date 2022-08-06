import React, { useState, useEffect } from 'react';
import 'src/asset/plugins/bootstrap/css/bootstrap.min.css';
import { FaFileDownload } from 'react-icons/fa';
import 'src/asset/css/main.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { baseUrl } from 'src/views/config.js/baseUrl';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure();

const Pending_Booking = () => {
  const [valueData, setvalueData] = useState([]);
  const [r, setr] = useState(0);
  const resultData = async () => {
    const result = await axios.get(
      baseUrl + '/hospitalAdmin/getPendingBookingRequests',
      {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('token'),
        },
      },
    );
    setvalueData(result.data);
  };

  const childaction = async (id) => {
    const Accept = async () => {
      await axios.put(
        baseUrl + '/hospitalAdmin/accept/bookingRequests',
        { bookingId: id.bookingId },
        {
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token'),
          },
        },
      );
      setr(r + 1);
      toast.success('Signup Request Accepted !', { autoClose: 600 });
    };

    var answer = window.confirm(
      'Are you sure? You want to accept: ' + id.bookingId,
    );
    if (answer) {
      Accept();
    }
  };

  const childaction2 = async (id) => {
    const Reject = async () => {
      await axios.put(
        baseUrl + '/hospitalAdmin/reject/bookingRequests',
        { bookingId: id.bookingId },
        {
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token'),
          },
        },
      );
      setr(r + 1);
      toast.error('Signup Request Rejected', { autoClose: 600 });
    };

    var answer = window.confirm(
      'Are you sure? You want to reject: ' + id.bookingId,
    );
    if (answer) {
      Reject();
    }
  };

  useEffect(() => {
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
                    <h2>Pending List </h2>
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
                            <th>Permission</th>
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
                                <td>{value.bookingId}</td>
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
                                <td
                                  style={{
                                    textAlign: 'right',
                                  }}
                                >
                                  <button
                                    onClick={() => childaction(value)}
                                    className="btn btn-xm px-1 py-1 btn btn-xm"
                                    style={{ marginRight: '1.5rem' }}
                                  >
                                    <FontAwesomeIcon
                                      style={{ color: 'green' }}
                                      icon={faCheck}
                                    />
                                  </button>
                                  <button
                                    onClick={() => childaction2(value)}
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
    </>
  );
};
export default Pending_Booking;
