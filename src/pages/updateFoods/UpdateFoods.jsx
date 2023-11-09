import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "../../components/Loading";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet-async";

const UpdateFoods = () => {
  const { id } = useParams();

  const { isPending, data: oldData } = useQuery({
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

  const navigate = useNavigate();

  if (isPending) {
    return <Loading />;
  }

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
  } = oldData;

  const handleUpdate = (e) => {
    e.preventDefault();

    const form = e.target;

    const foodName = form.foodName.value;
    const foodImage = form.foodImage.value;
    const foodQuantity = form.foodQuantity.value;
    const pickupLocation = form.pickupLocation.value;
    const expiredDateTime = form.expiredDateTime.value;
    const additionalNotes = form.additionalNotes.value;
    const foodStatus = form.foodStatus.value;

    // console.log(updateData);

    axios
      .put(`http://localhost:5000/updateFoods/${_id}`, {
        foodName,
        foodImage,
        foodQuantity,
        pickupLocation,
        expiredDateTime,
        additionalNotes,
        foodStatus,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        toast.error(error);
      });
    toast.success("Food Updated successfully");
    navigate("/availableFoods");
  };

  return (
    <div className=" min-h-screen p-20 text-center">
      <Helmet>
        <title>ShareBite | Update food</title>
      </Helmet>
      <h2 className="text-center font-bold text-4xl lg:text-5xl text-[#F017B8] mb-10">
        Update<span className="text-[#4BACBF]"> foods </span>
      </h2>
      <form onSubmit={handleUpdate}>
        {/* Food name , image, quantity*/}
        <div className="md:flex mb-8 gap-5">
          <div className="form-control md:w-1/3">
            <label className="label">
              <span className="label-text">Food Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="foodName"
                placeholder="Food Name"
                defaultValue={foodName}
                required
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
                defaultValue={foodImage}
                required
                className="input input-bordered w-full"
              />
            </label>
          </div>

          <div className="form-control md:w-1/3">
            <label className="label">
              <span className="label-text">Food quantity</span>
            </label>
            <label className="input-group">
              <input
                type="number"
                name="foodQuantity"
                placeholder=" Food Quantity (no. of person to be served.)
                "
                defaultValue={foodQuantity}
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
                name="pickupLocation"
                placeholder="Pickup Location
                "
                defaultValue={pickupLocation}
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
                type="date"
                name="expiredDateTime"
                placeholder="Expired Date"
                defaultValue={expiredDateTime}
                required
                className="input input-bordered w-full"
              />
            </label>
          </div>

          <div className="form-control md:w-1/3">
            <label className="label">
              <span className="label-text">Food Status</span>
            </label>
            <label className="input-group">
              <select
                name="foodStatus"
                className="input input-bordered w-full"
                required
                defaultValue={foodStatus}
              >
                <option value="available">Available</option>
                <option value="unavailable">Unavailable</option>
              </select>
            </label>
          </div>
        </div>

        {/* Donator image, name, email */}
        <div className="md:flex mb-8 gap-5">
          <div className="form-control md:w-1/3">
            <label className="label">
              <span className="label-text">Donator Image</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="donatorImage"
                placeholder="Donator Image URL"
                defaultValue={donatorImage}
                readOnly
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
                defaultValue={donatorName}
                readOnly
                required
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
        <div className="mb-8">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text"> Additional Notes</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="additionalNotes"
                placeholder=" Additional Notes"
                defaultValue={additionalNotes}
                required
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>

        <input type="submit" value="Update" className="btn btn-primary w-1/2" />
      </form>
    </div>
  );
};

export default UpdateFoods;
