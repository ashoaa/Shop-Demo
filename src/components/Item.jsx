import { Typography, Grid, Paper } from "@mui/material";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { itemActions } from "../store/slices/ItemSlice.jsx";
import { dataActions } from "../store/slices/DataSlice.jsx";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import "./Item.css";
import { useNavigate } from "react-router-dom";

let categories = [];

const Item = () => {
  const data = useSelector((state) => state.data.data);

  const navigate = useNavigate();
  const dipatch = useDispatch();
  const getItems = async () => {
    const response = await axios.get("https://fakestoreapi.com/products");
    dipatch(dataActions.setData(response.data));
  };

  useEffect(() => {
    getItems();
  }, [data]);

  if (data.length > 0) {
    categories = data
      .map((item) => item.category)
      .filter((category, index, arr) => arr.indexOf(category) === index);
  }

  const removeItemHandler = () => {
    dipatch(itemActions.removeItem());
  };

  const addItemHandler = () => {
    dipatch(itemActions.addItem());
  };

  return (
    <>
      <div className="products">
        {categories.map((category, index) => (
          <>
            <div key={index}>
              <Typography
                component="h2"
                variant="h4"
                sx={{
                  marginBottom: "2rem",
                  marginTop: "7rem",
                  color: "#0c3e77",
                }}>
                {category[0].toUpperCase() + category.slice(1)}
              </Typography>

              <Grid container spacing={5}>
                {data
                  .filter((item) => item.category === category)
                  .map((product) => (
                    <>
                      <Grid
                        item
                        xs={6}
                        md={4}
                        lg={3}
                        sx={{
                          marginBottom: "2rem",
                        }}>
                        <Paper elevation={5}>
                          <div className="item-image">
                            <img
                              src={product.image}
                              onClick={() => {
                                console.log(product.id);
                                navigate("p" + product.id);
                              }}
                            />
                          </div>
                          <Typography
                            sx={{
                              fontSize: "13px",
                              marginTop: "1rem",
                              height: "50px",
                              paddingLeft: "0.5rem",
                              paddingRight: "0.5rem",
                            }}>
                            {product.title.length < 60
                              ? product.title
                              : product.title.slice(0, 60) + "..."}
                          </Typography>
                          <div className="item-pay">
                            <Typography
                              sx={{
                                paddingLeft: "0.5rem",
                                fontWeight: "700",
                              }}>
                              ${product.price}
                            </Typography>
                            <div className="item-buy">
                              <RemoveIcon
                                onClick={removeItemHandler}
                                sx={{
                                  "&:hover": { cursor: "pointer" },
                                }}></RemoveIcon>
                              <AddIcon
                                onClick={addItemHandler}
                                sx={{
                                  "&:hover": { cursor: "pointer" },
                                }}></AddIcon>
                            </div>
                          </div>
                        </Paper>
                      </Grid>
                    </>
                  ))}
              </Grid>
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default Item;
