import Item from "../components/Item.jsx";
import axios from "axios";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const data = useLoaderData();

  return (
    <>
      <Item data={data} />
    </>
  );
};

export default Home;
export const loader = async () => {
  const response = await axios.get("https://fakestoreapi.com/products/");
  return response.data;
};
