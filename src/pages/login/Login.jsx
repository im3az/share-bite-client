import { Link, useLocation, useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import loginAnimation from "../../assets/Animation - 1699239622853.json";
import UseAuth from "../../hooks/UseAuth";
import { useState } from "react";
import toast from "react-hot-toast";

const Login = () => {
  const { loading, login } = UseAuth();
  const [loginError, setLoginError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    setLoginError("");

    const toastId = toast.loading("Logging in...");

    login(email, password)
      .then((result) => {
        console.log(result.user);

        if (result.user) {
          toast.success("Logged in", { id: toastId });
          navigate(location?.state ? location.state : "/");
        }
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.message, { id: toastId });
        // setLoginError(error.message);
      });
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className=" w-1/3">
          <Lottie animationData={loginAnimation} loop={true} />
        </div>

        <div className="mx-auto  w-full max-w-md p-8 space-y-3 rounded-xl bg-gray-50 text-gray-800">
          <h1 className="text-2xl font-bold text-center">Login</h1>
          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-1 text-sm">
              <label className="block text-gray-600">Email</label>
              <input
                type="email"
                required
                onBlur={(e) => setEmail(e.target.value)}
                name="email"
                placeholder="Your email"
                className="w-full input input-bordered px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-sky-600"
              />
            </div>
            <div className="space-y-1 text-sm">
              <label className="block text-gray-600">Password</label>
              <input
                type="password"
                required
                onBlur={(e) => setPassword(e.target.value)}
                name="password"
                placeholder="Password"
                className="w-full input input-bordered px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-sky-600"
              />
            </div>
            <button
              type="submit"
              className="block w-full p-3 text-center rounded-md text-gray-50 bg-sky-600 btn "
            >
              Log in
            </button>
          </form>

          <div className="text-center font-semibold text-red-800">
            {loginError && <p>{loginError}</p>}
          </div>

          <div className="flex items-center pt-4 space-x-1">
            <div className="flex-1 h-px sm:w-16 bg-gray-300"></div>
            <p className="px-3 text-sm text-gray-600">
              Login with social accounts
            </p>
            <div className="flex-1 h-px sm:w-16 bg-gray-300"></div>
          </div>
          <div className="flex justify-center space-x-4">
            <button
              aria-label="Log in with Google"
              className="p-3 btn btn-ghost rounded-lg"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                className="w-5 h-5 fill-current"
              >
                <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
              </svg>
            </button>
          </div>
          <p className="text-xs text-center sm:px-6 text-gray-600">
            Don&apos;t have an account?
            <Link
              to="/registration"
              className="ml-1  font-medium underline text-gray-800 hover:text-sky-600"
            >
              Register here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
