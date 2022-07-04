import React, { useState, useEffect } from 'react';
import 'src/asset/plugins/bootstrap/css/bootstrap.min.css';
import 'src/asset/css/main.css';
import { baseUrl } from 'src/views/config.js/baseUrl';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure();
const Rejected_Booking = () => {
  const [n, setn] = useState(0);
  const [valueData, setvalueData] = useState([]);
  const delAction = async (value) => {
    const answer = window.confirm(
      'Are you sure? You want to remove: ' + value.bookingId,
    );
    if (answer) {
      const result = await axios.put(
        baseUrl + '/hospitalAdmin/rejectToPending',
        { bookingId: value.bookingId },
        {
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token'),
          },
        },
      );
      if (result.data.message === 'Sent to pending request sucessfully') {
        toast.success('Sent to pending request sucessfully', {
          autoClose: 600,
          theme: 'colored',
        });
        setn(n + 1);
      } else {
        toast.warn('Something bad happenned', {
          autoClose: 600,
          theme: 'colored',
        });
      }
    }
  };
  const resultData = async () => {
    const result = await axios.get(
      baseUrl + '/hospitalAdmin/getRejectedBookingRequests',
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
  }, [n]);
  return (
    <>
      <div>
        <section className="content">
          <div className="container-fluid">
            <div className="row clearfix">
              <div className="col-lg-12 col-md-12 col-sm-12 ">
                <div className="card">
                  <div className="header">
                    <h2>Rejected Booking List </h2>
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
                            <th>Action</th>
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
                                <td style={{ textAlign: 'center' }}>
                                  <button
                                    onClick={() => delAction(value)}
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
export default Rejected_Booking;
