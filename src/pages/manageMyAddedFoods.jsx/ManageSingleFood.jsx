import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "../../components/Loading";
import toast from "react-hot-toast";

const ManageSingleFood = () => {
  const { id } = useParams();

  const navigate = useNavigate();
  const { data: requestedFoodData, isPending } = useQuery({
    queryKey: ["requestedFood"],
    queryFn: async () => {
      const res = await axios.get(
        `http://localhost:5000/manageSingleFood/${id}`
      );
      return res.data;
    },
  });

  if (isPending) {
    return <Loading />;
  }

  //   console.log(requestedFoodData);

  const {
    requesterName,
    requesterImage,
    requesterEmail,
    requestedDate,
    foodId,
    foodImage,
    foodName,
  } = requestedFoodData;

  const handleUpdate = (e) => {
    e.preventDefault();

    const foodStatus = "unavailable";

    // console.log(updateData);

    axios
      .put(`http://localhost:5000/manageSingleFood/${foodId}`, {
        foodStatus,
      })
      .then((response) => {
        console.log(response);
        toast.success("Food Updated successfully");
      })
      .catch((error) => {
        toast.error(error);
      });
    // toast.success("Food Updated successfully");
    // navigate("/manageMyFoods");
  };

  return (
    <div>
      {requestedFoodData ? (
        <div className="card sm:w-2/3 md:w-1/2 lg:w-2/3 xl:w-1/4 bg-base-100 shadow-xl mx-auto p-10 my-7">
          <figure>
            <img src={foodImage} alt="Shoes" className="w-full rounded-md" />
          </figure>
          <div className="card-body">
            <h2 className="text-2xl font-bold">Requester:</h2>
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 overflow-hidden rounded-full">
                <img
                  src={requesterImage}
                  alt={`${requesterName}'s Image`}
                  className="object-cover w-full h-full"
                />
              </div>
              <div>
                <h2 className="text-xl font-bold">{requesterName}</h2>
                <p className="text-gray-600">{requesterEmail}</p>
                <p className="text-gray-600">Request Time: {requestedDate}</p>
              </div>
            </div>
            <div className="card-actions justify-end">
              <button onClick={handleUpdate} className="btn btn-primary">
                Delivered
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="hero min-h-screen">
          <h2 className="text-3xl font-bold mb-4">
            No one still requested for this.
          </h2>
        </div>
      )}
    </div>
  );
};

export default ManageSingleFood;
