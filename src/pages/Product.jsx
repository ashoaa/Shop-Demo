import Btn from "../components/Btn.jsx";
import { Grid, Typography, Rating } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "./Product.css";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const Product = () => {
  const data = useSelector((state) => state.data.data);
  const params = useParams();
  const id = parseInt(params.productID.slice(1)) - 1;
  console.log(id);
  return (
    <>
      <div className="product">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={5}>
            <div className="product-image">
              <img src={data[id].image} />
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
                  {data[id].title}
                </Typography>
                <Typography
                  variant="h5"
                  sx={{ fontWeight: 700, marginBottom: "2rem" }}>
                  ${data[id].price}
                </Typography>
                <Rating
                  name="half-rating-read"
                  defaultValue={data[id].rating.rate}
                  precision={0.5}
                  readOnly
                />
              </div>
              <div className="product-buy">
                <Btn name="Add to Cart" clickHandler={() => {}}>
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
            marginBottom: "2rem",
            marginTop: "2rem",
            color: "#0c3e77",
          }}>
          Details
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: "2rem" }}>
          {data[id].description}
        </Typography>
      </div>
    </>
  );
};

export default Product;
