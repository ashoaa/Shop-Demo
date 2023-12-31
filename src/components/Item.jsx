/* eslint-disable react/prop-types */
import { Typography, Grid, Paper, CircularProgress } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { itemActions } from "../store/slices/ItemSlice.jsx";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import "./Item.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const Item = ({ categories }) => {
  const [data, setData] = useState([]);
  const getProducts = async () => {
    const response = await axios.get("https://fakestoreapi.com/products/");
    setTimeout(() => {
      setData(response.data);
    }, 500);
  };
  useEffect(() => {
    getProducts();
  }, []);

  const count = useSelector((state) => state.item.count);
  localStorage.setItem("count", count);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const removeItemHandler = () => {
    dispatch(itemActions.removeItem());
  };

  const addItemHandler = () => {
    dispatch(itemActions.addItem());
  };

  return (
    <>
      <div className="products">
        {categories.map((category, index) => (
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
              {data.length > 0 ? (
                data
                  .filter((item) => item.category === category)
                  .map((product) => (
                    <Grid
                      key={product.id}
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
                  ))
              ) : (
                <>
                  <CircularProgress
                    sx={{ margin: "2rem auto 0 auto", color: "#0c3e77" }}
                  />
                </>
              )}
            </Grid>
          </div>
        ))}
      </div>
    </>
  );
};

export default Item;
