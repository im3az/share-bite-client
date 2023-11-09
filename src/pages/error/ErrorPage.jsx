import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import signUpAnimation from "../../assets/error.json";
import { Helmet } from "react-helmet-async";

const ErrorPage = () => {
  return (
    <div className="">
      <Helmet>
        <title>ShareBite | Error</title>
      </Helmet>
      <section className="relative py-40  mx-auto  z-10 bg-[#320C60]  min-h-screen ">
        <div className="  mx-auto ">
          <div className="flex items-center justify-center mx-auto ">
            <div className="  px-4">
              <div className="mx-auto max-w-[400px] text-center">
                <Lottie animationData={signUpAnimation} loop={true} />

                <Link
                  to="/"
                  className="inline-block px-8 py-3 text-base font-semibold text-center text-white transition border border-white rounded-lg hover:bg-white hover:text-primary"
                >
                  Go to Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default ErrorPage;
