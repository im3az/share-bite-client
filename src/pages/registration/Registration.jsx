import { Link, useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import signUpAnimation from "../../assets/register.json";
import { useState } from "react";
import UseAuth from "../../hooks/UseAuth";
import { updateProfile } from "firebase/auth";
import toast from "react-hot-toast";

const Registration = () => {
  const [name, setName] = useState("");
  const [photo, setPhoto] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { createUser } = UseAuth();
  const [registerError, setRegisterError] = useState("");
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    setRegisterError("");

    if (password.length < 6) {
      setRegisterError("Password must have at least 6 characters or more");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setRegisterError("Password has no capital letter");
      return;
    } else if (!/[^a-zA-Z0-9]/.test(password)) {
      setRegisterError("Password has no special character.");
      return;
    }

    const toastId = toast.loading("Registering...");

    createUser(email, password)
      .then((result) => {
        const user = result.user;

        updateProfile(user, { displayName: name, photoURL: photo });
        console.log(user);

        if (user) {
          toast.success("Registered", { id: toastId });
          navigate("/");
        }
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.message, { id: toastId });
        // setRegisterError(error.message);
      });
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className=" w-1/3">
          <Lottie animationData={signUpAnimation} loop={true} />
        </div>

        <div className="mx-auto  w-full max-w-md p-8 space-y-3 rounded-xl bg-gray-50 text-gray-800">
          <h1 className="text-2xl font-bold text-center">Register Here</h1>
          <form onSubmit={handleRegister} className="space-y-6">
            <div className="space-y-1 text-sm">
              <label className="block text-gray-600">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Your name"
                required
                onBlur={(e) => setName(e.target.value)}
                className="w-full input input-bordered px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-sky-600"
              />
            </div>
            <div className="space-y-1 text-sm">
              <label className="block text-gray-600">Photo</label>
              <input
                type="text"
                name="photo"
                placeholder="Your Photo URL"
                required
                onBlur={(e) => setPhoto(e.target.value)}
                className="w-full input input-bordered px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-sky-600"
              />
            </div>
            <div className="space-y-1 text-sm">
              <label className="block text-gray-600">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Your email"
                required
                onBlur={(e) => setEmail(e.target.value)}
                className="w-full input input-bordered px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-sky-600"
              />
            </div>
            <div className="space-y-1 text-sm">
              <label className="block text-gray-600">Password</label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                required
                onBlur={(e) => setPassword(e.target.value)}
                className="w-full input input-bordered px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-sky-600"
              />
            </div>
            <button
              type="submit"
              className="block w-full p-3 text-center rounded-md text-gray-50 bg-sky-600 btn "
            >
              Register
            </button>
          </form>
          <div className="text-center font-semibold text-red-800">
            {registerError && <p>{registerError}</p>}
          </div>
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
