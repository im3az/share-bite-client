import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root.jsx";
import Home from "../pages/home/Home.jsx";
import ErrorPage from "../pages/error/ErrorPage.jsx";
import Login from "../pages/login/Login.jsx";
import Registration from "../pages/registration/Registration.jsx";
import AvailableFoods from "../pages/availableFoods/AvailableFoods.jsx";
import AddFoods from "../pages/addFoods/AddFoods.jsx";
import UpdateFoods from "../pages/updateFoods/UpdateFoods.jsx";
import PrivateRoute from "../providers/PrivateRoute.jsx";
import SingleFoodDetails from "../pages/availableSingleFoodDetail/SingleFoodDetails.jsx";
import ManageMyFoods from "../pages/manageMyAddedFoods.jsx/ManageMyFoods.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "availableFoods",
        element: <AvailableFoods />,
      },
      {
        path: "/availableFoods/:id",
        element: (
          <PrivateRoute>
            <SingleFoodDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "addFoods",
        element: (
          <PrivateRoute>
            <AddFoods />
          </PrivateRoute>
        ),
      },
      {
        path: "manageMyFoods",
        element: <ManageMyFoods />,
      },
      {
        path: "/updateFoods/:id",
        element: (
          <PrivateRoute>
            <UpdateFoods />
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/registration",
        element: <Registration />,
      },
    ],
  },
]);

export default router;
