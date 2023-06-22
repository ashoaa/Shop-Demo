import { useSelector } from "react-redux";
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
const App = () => {
  const router = createBrowserRouter([
    {
      path: "",
      element: <Navigate to="signup" />,
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
        { path: "", element: <Home /> },
        { path: ":productID", element: <Product /> },
      ],
    },
  ]);

  const finishSignUp = useSelector((state) => state.form.finishSignUp);
  const logout = useSelector((state) => state.form.logout);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
