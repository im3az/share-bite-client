import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

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

  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationKey: ["deleteFood"],
    mutationFn: (id) => {
      return axios
        .delete(`http://localhost:5000/deleteFood/${id}`)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    onSuccess: () => {
      toast.success("Food deleted");
      queryClient.invalidateQueries(["manageMyFoods"]);
    },
  });

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
      <th>
        <Link to={`/updateFoods/${_id}`} className="btn btn-accent btn-xs mx-2">
          Update
        </Link>
        <Link className="btn btn-secondary btn-xs mx-2">Manage</Link>
        <Link onClick={() => mutate(_id)} className="btn btn-error btn-xs mx-2">
          Delete
        </Link>
      </th>
    </tr>
  );
};

export default ManageTableRow;
