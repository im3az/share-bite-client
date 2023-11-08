import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useParams } from "react-router-dom";
import Loading from "../../components/Loading";

const SingleFoodDetails = () => {
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
  } = SingleFoodDetails;

  return (
    <div>
      <div className="bg-gray-100 p-6 text-center">
        <img
          src={foodImage}
          alt={foodName}
          className="w-full max-h-[600px] object-cover"
        />
        <h1 className="text-5xl font-bold my-4 text-[#F017B8]">{foodName}</h1>
        <p className="text-gray-700 text-xl">{additionalNotes}</p>
      </div>

      <div className="bg-white p-6 shadow-md mt-4 flex flex-col md:flex-row justify-evenly">
        <div className="flex flex-col w-full">
          <div className="grid card bg-base-300 p-10 rounded-box ">
            <div>
              <h2 className="text-3xl font-bold mb-2 text-[#327DA0]">
                Food Details
              </h2>

              <div className="text-lg">
                <h2 className="font-semibold my-1">Quantity: {foodQuantity}</h2>
                <h2 className="font-semibold my-1">Pickup Location:{pickupLocation}</h2>
                <h2 className="font-semibold my-1">Expiration Date/Time:{expiredDateTime}</h2>
              </div>
            </div>
          </div>
          <div className="divider"></div>
          <div className="grid card bg-base-300 p-10 rounded-box ">
            <div>
              <h2 className="text-3xl font-bold mb-2 text-[#327DA0]">
                Donator Information
              </h2>
              <div className="flex items-center  font-semibold my-1">
                <img
                  src={donatorImage}
                  alt={donatorName}
                  className="w-16 h-16 object-cover rounded-full mr-2"
                />
                <div>
                  <p>Name: {donatorName}</p>
                  <p>Email: {donatorEmail}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div>
          <h2 className="text-2xl font-semibold mb-2">Food Details</h2>
          <ul>
            <li>
              <strong>Quantity:</strong> {foodQuantity}
            </li>
            <li>
              <strong>Pickup Location:</strong> {pickupLocation}
            </li>
            <li>
              <strong>Expiration Date/Time:</strong> {expiredDateTime}
            </li>
          </ul>
        </div> */}

        {/* <div>
          <h2 className="text-2xl font-semibold mt-4 mb-2">
            Donator Information
          </h2>
          <div className="flex items-center">
            <img
              src={donatorImage}
              alt={donatorName}
              className="w-10 h-10 object-cover rounded-full mr-2"
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
        </div> */}
      </div>
    </div>
  );
};

export default SingleFoodDetails;
