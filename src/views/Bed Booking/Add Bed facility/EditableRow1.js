import React from "react";

const EditableRow1 = ({
  editFormData,
  handleEditFormChange,
  handleCancelClick,
}) => {
  return (
    <tr>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter Facility"
          name="Facility_Name"
          value={editFormData.Facility_Name}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Description"
          name="Description"
          value={editFormData.Description}
          onChange={handleEditFormChange}
        ></input>
      </td>
      
    
      <td>
        <div className="col-sm-12 d-flex text align-center">
          <div className="col-sm-6">
        <button type="submit" class="btn btn-sm">Save</button></div>
        <div className="col-sm-6">
        <button  className="btn btn-sm"type="button" onClick={handleCancelClick}>
          Cancel
        </button></div>
        </div>
      </td>
    </tr>
  );
};

export default EditableRow1;