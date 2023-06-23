import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

import SignUp from "./pages/SignUp.jsx";
import LogIn from "./pages/LogIn.jsx";
import Home from "./pages/Home.jsx";
import Product from "./pages/Product.jsx";
import HomeLayout from "./components/HomeLayout.jsx";
import { loader as itemLoader } from "./pages/Product.jsx";
const App = () => {
  const login = localStorage.getItem("login");
  let main = "signup";
  if (login === "true") {
    main = "home";
  }
  if (login === "false") {
    main = "login";
  }
  const router = createBrowserRouter([
    {
      path: "",
      element: <Navigate to={main} />,
    },

    {
      path: "signup",
      element: <SignUp></SignUp>,
    },
    { path: "login", element: <LogIn></LogIn> },
    {
      path: "home",
      element: <HomeLayout />,
      children: [
        { index: true, element: <Home /> },
        { path: ":productID", element: <Product />, loader: itemLoader },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
