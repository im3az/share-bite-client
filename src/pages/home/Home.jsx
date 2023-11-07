import Banner from "../../components/Banner";
import FeaturedFoods from "./FeaturedFoods";

const Home = () => {
  return (
    <div>
      <Banner />
      <div className=" mx-auto ">
        <h2 className="text-center font-bold text-4xl lg:text-5xl text-[#F017B8] my-20">
          Featured<span className="text-[#4BACBF]"> foods </span>
        </h2>
        <FeaturedFoods />
      </div>
    </div>
  );
};

export default Home;
