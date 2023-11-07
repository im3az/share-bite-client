import { useQuery } from "@tanstack/react-query";
import AvailableFoodsCard from "../../components/AvailableFoodsCard";

const AvailableFoods = () => {
  const { isPending, data: donatedFoods } = useQuery({
    queryKey: ["availableFoods"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/availableFoods");
      return res.json();
    },
  });

  if (isPending) {
    return <span className="loading loading-spinner loading-lg"></span>;
  }

  console.log(donatedFoods);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 p-5 gap-y-10 my-5">
      {donatedFoods.map((food) => (
        <AvailableFoodsCard key={food._id} food={food}></AvailableFoodsCard>
      ))}
    </div>
  );
};

export default AvailableFoods;
