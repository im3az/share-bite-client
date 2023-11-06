import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import signUpAnimation from "../../assets/register.json";

const Registration = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className=" w-1/3">
          <Lottie animationData={signUpAnimation} loop={true} />
        </div>

        <div className="mx-auto  w-full max-w-md p-8 space-y-3 rounded-xl bg-gray-50 text-gray-800">
          <h1 className="text-2xl font-bold text-center">Register Here</h1>
          <form className="space-y-6">
            <div className="space-y-1 text-sm">
              <label className="block text-gray-600">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Your name"
                className="w-full input input-bordered px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-sky-600"
              />
            </div>
            <div className="space-y-1 text-sm">
              <label className="block text-gray-600">Photo</label>
              <input
                type="text"
                name="photo"
                placeholder="Your Photo URL"
                className="w-full input input-bordered px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-sky-600"
              />
            </div>
            <div className="space-y-1 text-sm">
              <label className="block text-gray-600">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Your email"
                className="w-full input input-bordered px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-sky-600"
              />
            </div>
            <div className="space-y-1 text-sm">
              <label className="block text-gray-600">Password</label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="w-full input input-bordered px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-sky-600"
              />
            </div>
            <button className="block w-full p-3 text-center rounded-md text-gray-50 bg-sky-600 btn ">
              Register
            </button>
          </form>
          <p className="px-6 text-sm text-center text-gray-600">
            Already have an account yet?
            <Link
              to="/login"
              className="ml-1  font-medium underline text-gray-800 hover:text-sky-600"
            >
              Log in
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default Registration;
