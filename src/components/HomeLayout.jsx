import Banner from "./Banner.jsx";
import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <>
      <Banner />
      <Outlet />
    </>
  );
};

export default HomeLayout;
