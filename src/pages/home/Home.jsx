import { useContext } from "react";
import Banner from "../../components/Banner";
import FeaturedFoods from "./FeaturedFoods";
import { AuthContext } from "../../providers/AuthProvider";
import Loading from "../../components/Loading";
import News from "../../components/News";
import { Helmet } from "react-helmet-async";
import CallToAction from "../../components/CalltoAction";

const Home = () => {
  const { loading, user } = useContext(AuthContext);
  // console.log(user);
  if (loading) {
    return <Loading />;
  }
  return (
    <div>
      <Helmet>
        <title>ShareBite | Home</title>
      </Helmet>
      <Banner />
      <div className=" mx-auto ">
        <h2 className="text-center font-bold text-4xl lg:text-5xl text-[#F017B8] my-20">
          Featured<span className="text-[#4BACBF]"> foods </span>
        </h2>
        <FeaturedFoods />
      </div>
      <News />
      <CallToAction />
    </div>
  );
};

export default Home;
