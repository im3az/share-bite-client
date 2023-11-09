import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import Swal from "sweetalert2";

const MyFoodRequestCard = ({ foods }) => {
  const {
    requesterName,
    requesterImage,
    requesterEmail,
    requestedDate,
    foodName,
    foodImage,
    foodId,
    donatorName,
    donatorEmail,
    pickupLocation,
    expiredDateTime,
    newAdditionalNotes,
    donationAmount,
    foodStatus,
    _id,
  } = foods;

  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationKey: ["deleteMyFood"],
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
            .delete(`https://share-bite-server-dpt0g090w-im3az.vercel.app/myFoodDelete/${id}`)
            .then((res) => {
              console.log(res);
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              queryClient.invalidateQueries(["myRequestedFoods"]);
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
    <div className="max-w-sm rounded-md shadow-md bg-gray-50 text-gray-800">
      <img
        src={foodImage}
        alt=""
        className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500"
      />
      <div className="flex flex-col justify-between p-6 space-y-8">
        <h2 className="mx-auto text-xl font-bold">{foodName}</h2>
        <div className="space-y-2">
          <h2>
            <strong>Donator Name: </strong> {donatorName}
          </h2>
          <h2>
            <strong>Pickup location: </strong> {pickupLocation}
          </h2>
          <h2>
            <strong>Expire date:</strong> {expiredDateTime}
          </h2>
          <h2>
            <strong>Requested date:</strong> {requestedDate}
          </h2>
          <h2>
            <strong>Donation Amount:</strong> {donationAmount}
          </h2>
          <h2>
            <strong>Status:</strong> {foodStatus}
          </h2>
        </div>
        <button
          onClick={() => mutate(_id)}
          className="btn btn-secondary text-gray-50"
        >
          Cancel request
        </button>
      </div>
    </div>
  );
};

export default MyFoodRequestCard;
