import { Link, NavLink } from "react-router-dom";
import UseAuth from "../hooks/UseAuth";
import toast from "react-hot-toast";
const Navbar = () => {
  const { user, logOut, loading } = UseAuth();

  const handleSignOut = async () => {

    const toastId = toast.loading("Logging out...");

    try {
      await logOut();
      toast.error("Logged out", { id: toastId });
    } catch (error) {
      console.log(error);
    }
  };

  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="availableFoods">Available foods</NavLink>
      </li>
      <li>
        <NavLink to="/aboutUs">About us</NavLink>
      </li>
    </>
  );

  return (
    <div className="bg-[#A6E2EC] ">
      <div className="navbar max-w-7xl mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 "
            >
              {navLinks}
              {user && (
                <>
                  <li>
                    <NavLink to="/addFoods">Add food</NavLink>
                  </li>

                  <li>
                    <NavLink to="/manageMyFoods">Manage My Foods</NavLink>
                  </li>

                  <li>
                    <NavLink to="/myFoodRequest">My Food Request</NavLink>
                  </li>
                </>
              )}
            </ul>
          </div>
          <Link to="/">
            <img
              className="h-16 btn btn-ghost"
              src="https://i.ibb.co/Ttrsqh8/cutlery-3170733-1.png"
              alt=""
            />
          </Link>
          <h2 className="text-3xl font-bold">Share<span className="text-[#F017B8]">Bite</span></h2>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-lg menu-horizontal px-1">{navLinks}</ul>
        </div>
        <div className="navbar-end">
          <div className=" hidden md:block">
            {user ? (
              <div className="dropdown dropdown-end ">
                <label tabIndex={0} className="w-10 m-1">
                  <div className="avatar">
                    <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                      <img
                        className="rounded-full w-10"
                        src={user.photoURL}
                        alt=""
                      />
                      
                    </div>
                    <button type="button" title="Toggle dropdown" className="p-3">
		<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
			<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
		</svg>
	</button>
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <NavLink to="/addFoods">Add food</NavLink>
                  </li>

                  <li>
                    <NavLink to="/manageMyFoods">Manage My Foods</NavLink>
                  </li>

                  <li>
                    <NavLink to="/myFoodRequest">My Food Request</NavLink>
                  </li>
                </ul>
              </div>
            ) : (
              // <div className="flex flex-wrap items-center justify-center gap-3">
              //   <div className="h-10 w-10">
              //     <img
              //       className="h-full w-full rounded-full object-cover object-center "
              //       src={user.photoURL}
              //       alt=""
              //     />
              //   </div>
              //   <div>
              //     <div className="text-sm font-medium ">{user.displayName}</div>
              //     <div className="text-xs ">{user.email}</div>
              //   </div>
              // </div>
              <div className="w-10 mr-2">
                <img
                  className="rounded-full"
                  src="https://i.ibb.co/8b7zG7B/user.png"
                  alt=""
                />
              </div>
            )}
          </div>

          <div className="mx-3">
            {user ? (
              <button onClick={handleSignOut} className="btn btn-secondary">
                Log out
              </button>
            ) : (
              <Link to="/login">
                <button className="btn btn-accent">Login</button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
