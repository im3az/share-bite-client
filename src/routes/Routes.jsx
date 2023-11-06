import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root.jsx";
import Home from "../pages/home/Home.jsx";
import ErrorPage from "../pages/error/ErrorPage.jsx";
import Login from "../pages/login/Login.jsx";
import Registration from "../pages/registration/Registration.jsx";

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
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/registration",
    element: <Registration />,
  },
]);

export default router;
