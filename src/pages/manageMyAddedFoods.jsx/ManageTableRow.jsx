import React from "react";

const ManageTableRow = ({ foods }) => {
  const {
    _id,
    foodName,
    foodImage,
    foodQuantity,
    pickupLocation,
    expiredDateTime,
    additionalNotes,
    donatorImage,
    donatorName,
    donatorEmail,
    foodStatus,
  } = foods;
  //   console.log(_id);
  return (
    <tr>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={foodImage} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold">{foodName}</div>
          </div>
        </div>
      </td>
      <td>{additionalNotes}</td>
      <td>{pickupLocation}</td>
      <th className="">
        <button className="btn btn-primary btn-xs mx-2">Update</button>
        <button className="btn btn-secondary btn-xs mx-2">Manage</button>
        <button className="btn btn-error btn-xs mx-2">Delete</button>
      </th>
    </tr>
  );
};

export default ManageTableRow;
