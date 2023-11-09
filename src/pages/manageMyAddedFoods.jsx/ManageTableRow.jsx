import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

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
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          return axios
            .delete(`https://share-bite-server-dpt0g090w-im3az.vercel.app/deleteFood/${id}`)
            .then((res) => {
              console.log(res);
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              queryClient.invalidateQueries(["manageMyFoods"]);
            })
            .catch((err) => {
              console.log(err);
            });
        }
      });

      // return axios
      //   .delete(`https://share-bite-server-dpt0g090w-im3az.vercel.app/deleteFood/${id}`)
      //   .then((res) => {
      //     console.log(res);
      //   })
      //   .catch((err) => {
      //     console.log(err);
      //   });
    },
    onSuccess: () => {
      // toast.success("Food deleted");
      // queryClient.invalidateQueries(["manageMyFoods"]);
    },
  });

  return (
    <tr>
      <Helmet>
        <title>ShareBite | Manage single food</title>
      </Helmet>
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
        <Link
          to={`/manageSingleFood/${_id}`}
          className="btn btn-secondary btn-xs mx-2"
        >
          Manage
        </Link>
        <Link onClick={() => mutate(_id)} className="btn btn-error btn-xs mx-2">
          Delete
        </Link>
      </th>
    </tr>
  );
};

export default ManageTableRow;
