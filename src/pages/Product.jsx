import Btn from "../components/Btn.jsx";
import { Grid, Typography, Rating } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "./Product.css";
import { useLoaderData } from "react-router-dom";
import { useDispatch } from "react-redux";
import { itemActions } from "../store/slices/ItemSlice.jsx";
import axios from "axios";

const Product = () => {
  window.scrollTo({ top: 0, left: 0 });
  const data = useLoaderData();
  const dispatch = useDispatch();

  const buyHandler = () => {
    dispatch(itemActions.addItem());
  };

  return (
    <>
      {data && (
        <div className="product">
          <Grid container spacing={2}>
            <Grid item xs={12} sm={5}>
              <div className="product-image">
                <img src={data.image} />
              </div>
            </Grid>
            <Grid item xs={12} sm={7}>
              <div className="product-info">
                <div className="product-text">
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 500,
                      marginTop: "2rem",
                      marginBottom: "2rem",
                    }}>
                    {data.title}
                  </Typography>
                  <Typography
                    variant="h5"
                    sx={{ fontWeight: 700, marginBottom: "2rem" }}>
                    ${data.price}
                  </Typography>
                  <Rating
                    name="half-rating-read"
                    defaultValue={data.rating.rate}
                    precision={0.5}
                    readOnly
                  />
                </div>
                <div className="product-buy">
                  <Btn name="Add to Cart" clickHandler={buyHandler}>
                    <ShoppingCartIcon
                      sx={{ marginRight: "10px" }}></ShoppingCartIcon>
                  </Btn>
                </div>
              </div>
            </Grid>
          </Grid>
          <Typography
            component="h2"
            variant="h4"
            sx={{
              marginBottom: "1rem",
              marginTop: "3rem",
              color: "#0c3e77",
            }}>
            Details
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: "4rem" }}>
            {data.description}
          </Typography>
        </div>
      )}
    </>
  );
};

export default Product;
export const loader = async ({ params }) => {
  const id = params.productID.slice(1);
  const response = await axios.get("https://fakestoreapi.com/products/" + id);
  return response.data;
};
