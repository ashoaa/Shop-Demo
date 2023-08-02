import Item from "../components/Item.jsx";
import axios from "axios";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const categories = useLoaderData();

  return (
    <>
      <Item categories={categories} />
    </>
  );
};

export default Home;
export const loader = async () => {
  const response = await axios.get(
    "https://fakestoreapi.com/products/categories"
  );
  return response.data;
};
