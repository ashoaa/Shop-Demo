/* eslint-disable react/prop-types */
import "./Container.css";
import { Typography } from "@mui/material";
const Container = (props) => {
  return (
    <>
      <div className="center">
        <div className="input-container">
          <Typography
            component="h2"
            variant="h4"
            align="center"
            sx={{ color: "#1565c0" }}>
            {props.title}
          </Typography>
          {props.children}
        </div>
      </div>
    </>
  );
};

export default Container;
