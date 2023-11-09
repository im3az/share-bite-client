import { useQuery } from "@tanstack/react-query";
import AvailableFoodsCard from "../../components/AvailableFoodsCard";
import axios from "axios";
import Loading from "../../components/Loading";
import { Helmet } from "react-helmet-async";

const AvailableFoods = () => {
  const { isPending, data: donatedFoods } = useQuery({
    queryKey: ["availableFoods"],
    queryFn: async () => {
      const res = axios
        .get(
          "https://share-bite-server-dpt0g090w-im3az.vercel.app/availableFoods?foodStatus=available"
        )
        .then((data) => {
          return data.data;
        });
      return res;
    },
  });

  if (isPending) {
    return <Loading />;
  }

  console.log(donatedFoods);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 p-5 gap-y-10 my-5">
      <Helmet>
        <title>ShareBite | Available Foods</title>
      </Helmet>
      {donatedFoods.map((food) => (
        <AvailableFoodsCard key={food._id} food={food}></AvailableFoodsCard>
      ))}
    </div>
  );
};

export default AvailableFoods;
