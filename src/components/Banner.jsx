import Lottie from "lottie-react";
import bannerAnimation from "../assets/banner.json";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="bg-[#4BACBF]">
      <section className=" text-gray-800 max-w-7xl mx-auto">
        <div className="container flex flex-col-reverse l justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
          <div className="flex flex-col justify-center  text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left ">
            <h1 className="text-5xl font-bold text-white">
              Rescuing good food to help people and planet.
            </h1>
            <p className="mt-6 mb-8 text-2xl text-white">
              Support our work by donating today.
            </p>
            <div >
              <Link
                className="btn btn-primary text-gray-50"
              >
                Donate
              </Link>
              
            </div>
          </div>
          <div className="flex items-center justify-center p-6 mt-8  lg:mt-0 h-72 md:h-96 lg:h-96 xl:h-112 2xl:h-128">
            <Lottie
              className="h-min md:h-96 lg:h-min"
              animationData={bannerAnimation}
              loop={true}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
