import { useQuery } from "@tanstack/react-query";
import AvailableFoodsCard from "../../components/AvailableFoodsCard";
import axios from "axios";
import Loading from "../../components/Loading";
import { Link } from "react-router-dom";

const FeaturedFoods = () => {
  const { isPending, data: donatedFoods } = useQuery({
    queryKey: ["availableFoods"],
    queryFn: async () => {
      const res = axios
        .get("https://share-bite-server-dpt0g090w-im3az.vercel.app/availableFoods?foodStatus=available")
        .then((data) => {
          return data.data;
        });
      return res;
    },
  });

  if (isPending) {
    return <Loading />;
  }

  const first6DonatedFoods = donatedFoods.slice(0, 6);

  return (
    <div className="my-5 ">
      <div className="grid grid-cols-1 lg:grid-cols-2 p-5  gap-y-10 ">
        {first6DonatedFoods.map((food) => (
          <AvailableFoodsCard key={food._id} food={food}></AvailableFoodsCard>
        ))}
      </div>
      <div className="text-center my-10">
        <Link to="availableFoods">
          <button className="btn btn-secondary">See all</button>
        </Link>
      </div>
    </div>
  );
};

export default FeaturedFoods;
