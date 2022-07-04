import React from 'react';

const EditableRow = ({
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
          placeholder="Enter Amenities Price"
          name="Amenities_Price"
          value={editFormData.AmenitiesPrice}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <div className="col-sm-8 d-flex text align-center">
          <div className="col-sm-4">
            <button type="submit" class="btn btn-sm">
              Save
            </button>
          </div>
          <div className="col-sm-4">
            <button
              className="btn btn-sm"
              type="button"
              onClick={handleCancelClick}
            >
              Cancel
            </button>
          </div>
        </div>
      </td>
    </tr>
  );
};

export default EditableRow;
