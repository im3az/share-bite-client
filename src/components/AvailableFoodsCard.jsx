import { Link } from "react-router-dom";

const AvailableFoodsCard = ({ food }) => {
  const {
    foodName,
    additionalNotes,
    donatorEmail,
    donatorImage,
    donatorName,
    expiredDateTime,
    foodImage,
    foodQuantity,
    foodStatus,
    pickupLocation,
    _id,
  } = food;
  return (
    <div className="relative flex w-full max-w-[48rem] flex-col md:flex-row  rounded-xl bg-white bg-clip-border text-gray-700 shadow-md mx-auto">
      <div className="relative w-full md:w-2/5 m-0 overflow-hidden text-gray-700 bg-white rounded-r md:rounded-r-none shrink-0 rounded-md md:rounded-xl bg-clip-border">
        <img
          src={foodImage}
          alt="image"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="p-3">
        <h6 className="block mb-1 font-sans text-xl antialiased font-bold leading-relaxed tracking-normal text-pink-500 uppercase">
          {foodName}
        </h6>
        <h4 className="block mb-1 font-sans text-base antialiased font-normal leading-snug tracking-normal text-blue-gray-900">
          Pickup: {pickupLocation}
        </h4>
        <p className="block mb-1 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
          Note: {additionalNotes}
        </p>
        <p className="block mb-1 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
          Expiry date: {expiredDateTime}
        </p>
        <p className="block mb-1 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
          Food Quantity(Per server): {foodQuantity}
        </p>
        <div className="bg-slate-100 px-4 rounded-md">
          <p className="font-semibold leading-relaxed text-gray-700 pt-2">
            Donated by:
          </p>
          <div className="relative flex w-full max-w-[26rem] flex-col  bg-transparent bg-clip-border text-gray-700 shadow-none">
            <div className="relative flex items-center gap-4 pt-0 pb-8 mx-0 mt-4 overflow-hidden text-gray-700 bg-transparent shadow-none bg-clip-border">
              <img
                src={donatorImage}
                alt="donor image"
                className="relative inline-block h-[58px] w-[58px]  object-cover object-center"
              />
              <div className="flex w-full flex-col gap-0.5">
                <div className="flex items-center justify-between">
                  <h5 className="block font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                    {donatorName}
                  </h5>
                </div>
                <p className="block font-sans text-base antialiased font-light leading-relaxed text-blue-gray-900">
                  {donatorEmail}
                </p>
              </div>
            </div>
          </div>
        </div>

        <Link className="btn btn-secondary mt-3" to={`/availableFoods/${_id}`}>
          Details
        </Link>
      </div>
    </div>
  );
};

export default AvailableFoodsCard;
