import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useParams } from "react-router-dom";
import Loading from "../../components/Loading";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const SingleFoodDetails = () => {
  const { user } = useContext(AuthContext);
  const { id } = useParams();

  const { isPending, data: SingleFoodDetails } = useQuery({
    queryKey: ["availableSingleFood"],
    queryFn: async () => {
      const res = axios
        .get(`http://localhost:5000/availableFoods/${id}`)
        .then((data) => {
          return data.data;
        })
        .catch((error) => {
          console.log(error);
        });
      return res;
    },
  });

  if (isPending) {
    return <Loading />;
  }

  //   console.log(SingleFoodDetails);

  const {
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
    _id,
  } = SingleFoodDetails;

  console.log(_id);

  return (
    <div>
      <div className="bg-gray-100 p-6 text-center">
        <img
          src={foodImage}
          alt={foodName}
          className="w-full max-h-[600px] object-cover"
        />
        <h1 className="text-3xl md:text-5xl font-bold my-4 text-[#F017B8]">
          {foodName}
        </h1>
        <p className="text-gray-700 text-xl">{additionalNotes}</p>
      </div>

      <div className="bg-white p-6 shadow-md mt-4 flex flex-col md:flex-row justify-evenly">
        <div className="flex flex-col w-full">
          <div className="flex flex-col w-full lg:flex-row justify-evenly bg-base-300 p-10 rounded-box ">
            <div>
              <h2 className="text-3xl font-bold mb-2 text-[#327DA0]">
                Food Details
              </h2>

              <div className="text-lg">
                <h2 className=" my-1">
                  <strong>Quantity: </strong> {foodQuantity}
                </h2>
                <h2 className=" my-1">
                  <strong>Pickup Location: </strong>
                  {pickupLocation}
                </h2>
                <h2 className=" my-1">
                  <strong>Expiration Date: </strong> {expiredDateTime}
                </h2>
              </div>
            </div>

            <div className="divider lg:divider-horizontal"></div>

            <div>
              <h2 className="text-3xl font-bold mb-2 text-[#327DA0]">
                Donator Information
              </h2>
              <div className="flex items-center  my-1">
                <img
                  src={donatorImage}
                  alt={donatorName}
                  className="w-16 h-16 object-cover rounded-full mr-2"
                />
                <div>
                  <p>
                    <strong>Name:</strong> {donatorName}
                  </p>
                  <p>
                    <strong>Email:</strong> {donatorEmail}
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* <button className="btn ">
            Request
          </button> */}

          {/* Open the modal using document.getElementById('ID').showModal() method */}
          <button
            className="btn btn-secondary w-1/2 mx-auto my-6"
            onClick={() => document.getElementById("my_modal_5").showModal()}
          >
            open modal
          </button>

          <dialog
            id="my_modal_5"
            className="modal modal-bottom sm:modal-middle"
          >
            <div className="modal-box">
              <form>
                {/* Food name , image, quantity*/}
                <div className="md:flex mb-8 gap-5">
                  <div className="form-control md:w-1/3">
                    <label className="label">
                      <span className="label-text">Food Name</span>
                    </label>
                    <label className="input-group">
                      <input
                        type="text"
                        name="name"
                        placeholder="Food Name"
                        required
                        defaultValue={foodName}
                        readOnly
                        className="input input-bordered w-full"
                      />
                    </label>
                  </div>

                  <div className="form-control md:w-1/3">
                    <label className="label">
                      <span className="label-text">Food Image</span>
                    </label>
                    <label className="input-group">
                      <input
                        type="text"
                        name="foodImage"
                        placeholder="Food image URL"
                        required
                        defaultValue={foodImage}
                        readOnly
                        className="input input-bordered w-full"
                      />
                    </label>
                  </div>

                  <div className="form-control md:w-1/3">
                    <label className="label">
                      <span className="label-text">Food Id</span>
                    </label>
                    <label className="input-group">
                      <input
                        type="text"
                        name="quantity"
                        placeholder="Food Id"
                        defaultValue={_id}
                        readOnly
                        required
                        className="input input-bordered w-full"
                      />
                    </label>
                  </div>
                </div>

                {/* location, expiry date, food status*/}
                <div className="md:flex mb-8 gap-5">
                  <div className="form-control md:w-1/3">
                    <label className="label">
                      <span className="label-text">Pickup Location</span>
                    </label>
                    <label className="input-group">
                      <input
                        type="text"
                        name="location"
                        placeholder="Pickup Location"
                        defaultValue={pickupLocation}
                        readOnly
                        required
                        className="input input-bordered w-full"
                      />
                    </label>
                  </div>

                  <div className="form-control md:w-1/3">
                    <label className="label">
                      <span className="label-text">Expired Date</span>
                    </label>
                    <label className="input-group">
                      <input
                        type="text"
                        name="expiryDate"
                        placeholder="Expired Date"
                        defaultValue={expiredDateTime}
                        readOnly
                        required
                        className="input input-bordered w-full"
                      />
                    </label>
                  </div>

                  <div className="form-control md:w-1/3">
                    <label className="label">
                      <span className="label-text">Requested date</span>
                    </label>
                    <label className="input-group">
                      <input
                        type="date"
                        name="status"
                        placeholder="Food Status "
                        required
                        className="input input-bordered w-full"
                      />
                    </label>
                  </div>
                </div>

                {/* Donation, name, email */}
                <div className="md:flex mb-8 gap-5">
                  <div className="form-control md:w-1/3">
                    <label className="label">
                      <span className="label-text">Donation amount</span>
                    </label>
                    <label className="input-group">
                      <input
                        type="number"
                        name="donatorImage"
                        placeholder="Donate"
                        required
                        className="input input-bordered w-full"
                      />
                    </label>
                  </div>

                  <div className="form-control md:w-1/3">
                    <label className="label">
                      <span className="label-text">Donator Name</span>
                    </label>
                    <label className="input-group">
                      <input
                        type="text"
                        name="donatorName"
                        placeholder="Donator Name"
                        required
                        defaultValue={donatorName}
                        className="input input-bordered w-full"
                      />
                    </label>
                  </div>

                  <div className="form-control md:w-1/3">
                    <label className="label">
                      <span className="label-text">Donator email</span>
                    </label>
                    <label className="input-group">
                      <input
                        type="email"
                        name="donatorEmail"
                        placeholder="Donator email"
                        defaultValue={donatorEmail}
                        readOnly
                        required
                        className="input input-bordered w-full"
                      />
                    </label>
                  </div>
                </div>

                {/*  Additional Notes*/}
                <div className="md:flex mb-8 gap-5">
                  <div className="form-control  md:w-1/2">
                    <label className="label">
                      <span className="label-text"> Additional Notes</span>
                    </label>
                    <label className="input-group">
                      <input
                        type="text"
                        name="notes"
                        placeholder=" Additional Notes"
                        required
                        defaultValue={additionalNotes}
                        className="input input-bordered w-full"
                      />
                    </label>
                  </div>

                  <div className="form-control  md:w-1/2">
                    <label className="label">
                      <span className="label-text"> Requester email</span>
                    </label>
                    <label className="input-group">
                      <input
                        type="text"
                        name="notes"
                        placeholder=" Additional Notes"
                        required
                        defaultValue={user?.email}
                        readOnly
                        className="input input-bordered w-full"
                      />
                    </label>
                  </div>
                </div>

                <input
                  type="submit"
                  value="Confirm"
                  className="btn btn-secondary w-full"
                />
              </form>

              <div className="modal-action flex-col w-full">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn btn-warning w-full">Close</button>
                </form>
                {/* <button className="btn btn-primary">Confirm</button> */}
              </div>
            </div>
          </dialog>
        </div>
      </div>
    </div>
  );
};

export default SingleFoodDetails;
