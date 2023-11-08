import axios from "axios";
import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../providers/AuthProvider";
import Loading from "../../components/Loading";
import { useNavigate } from "react-router-dom";

const AddFoods = () => {
  const [foodName, setFoodName] = useState("");
  const [foodImage, setFoodImage] = useState("");
  const [foodQuantity, setFoodQuantity] = useState("");
  const [pickupLocation, setPickupLocation] = useState("");
  const [expiredDateTime, setExpiredDateTime] = useState("");
  const [additionalNotes, setAdditionalNotes] = useState("");
  // const [donatorImage, setDonatorImage] = useState("");
  // const [donatorName, setDonatorName] = useState("");
  // const [donatorEmail, setDonatorEmail] = useState("");
  const [foodStatus, setFoodStatus] = useState("available");
  const navigate = useNavigate();

  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return <Loading />;
  }

  const donatorImage = user.photoURL;
  const donatorName = user.displayName;
  const donatorEmail = user.email;

  // console.log(user?.displayName);
  // console.log(user?.email);
  // console.log(user?.photoURL);

  const handleSubmit = (e) => {
    e.preventDefault();
    const availableFoodsData = {
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
    };
    // console.log(availableFoodsData);
    axios
      .post("http://localhost:5000/availableFoods", availableFoodsData)
      .then((data) => {
        console.log(data.data);
        toast.success("Food added successfully");
        navigate("/availableFoods");
      })
      .catch((error) => {
        toast.error(error);
      });
  };

  return (
    <div className=" min-h-screen p-20 text-center">
      <h2 className="text-center font-bold text-4xl lg:text-5xl text-[#F017B8] mb-10">
        Add<span className="text-[#4BACBF]"> foods </span>
      </h2>
      <form onSubmit={handleSubmit}>
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
                onBlur={(e) => setFoodName(e.target.value)}
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
                onBlur={(e) => setFoodImage(e.target.value)}
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
                name="quantity"
                placeholder=" Food Quantity (no. of person to be served.)"
                onBlur={(e) => setFoodQuantity(e.target.value)}
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
                onBlur={(e) => setPickupLocation(e.target.value)}
                required
                className="input input-bordered w-full"
              />
            </label>
          </div>

          <div className="form-control md:w-1/3">
            <label className="label">
              <span className="label-text">Expiry Date</span>
            </label>
            <label className="input-group">
              <input
                type="date"
                name="expiryDate"
                placeholder="Expired Date"
                onBlur={(e) => setExpiredDateTime(e.target.value)}
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
                name="brand"
                className="input input-bordered w-full"
                required
                onBlur={(e) => setFoodStatus(e.target.value)}
                defaultValue="available"
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
                // onBlur={(e) => setDonatorImage(e.target.value)}
                required
                readOnly
                defaultValue={user.photoURL}
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
                // onBlur={(e) => setDonatorName(e.target.value)}
                readOnly
                required
                defaultValue={user.displayName}
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
                // onBlur={(e) => setDonatorEmail(e.target.value)}
                readOnly
                required
                defaultValue={user.email}
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
                name="notes"
                placeholder=" Additional Notes"
                onBlur={(e) => setAdditionalNotes(e.target.value)}
                required
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>

        <input
          type="submit"
          value="Add food"
          className="btn btn-primary w-1/2"
        />
      </form>
    </div>
  );
};

export default AddFoods;
