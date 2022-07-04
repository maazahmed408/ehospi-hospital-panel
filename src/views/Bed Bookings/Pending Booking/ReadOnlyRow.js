import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faCircleXmark } from '@fortawesome/free-solid-svg-icons';
const ReadOnlyRow = ({ statechild, updatestatechild, contact, onProceed }) => {
  const handleEditClick = (event, contact) => {
    updatestatechild(contact.hospitalCode);
    onProceed();
  };
  return (
    <tr style={{ height: '5px' }}>
      <td>{contact.patientName}</td>
      <td>{contact.familyMember}</td>
      <td>{contact.dob}</td>
      <td>{contact.gender}</td>
      <td>{contact.fatherHusbandName}</td>
      <td>{contact.address}</td>
      <td>{contact.phone}</td>
      <td>{contact.email}</td>
      <td>{contact.nationality}</td>
      <td>{contact.religion}</td>
      <td>{contact.monthlyIncome}</td>
      <td>{contact.occupation}</td>
      <td>{contact.altPhone}</td>
      <td>{contact.doctorName}</td>
      <td>{contact.policyNumber}</td>
      <td>{contact.employerName}</td>
      <td>{contact.employerId}</td>
      <td>{contact.bookingStatus}</td>
      <td>{contact.hospitalCode}</td>

      <td>
        <div className="col-sm-12 d-flex text align-center">
          <div className="col-sm-3">
            <button
              className="btn btn-xm px-0 py-0 btn "
              onClick={(event) => handleEditClick(event, contact)}
            >
              <FontAwesomeIcon style={{ color: 'green' }} icon={faCheck} />
            </button>
          </div>
          <div className="col-sm-3">
            <button className="btn btn-xm px-0 py-0 btn btn-xm">
              <FontAwesomeIcon style={{ color: 'red' }} icon={faCircleXmark} />
            </button>
          </div>
        </div>
      </td>
    </tr>
  );
};
export default ReadOnlyRow;
