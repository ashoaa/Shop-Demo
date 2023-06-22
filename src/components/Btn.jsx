/* eslint-disable react/prop-types */
import { Button } from "@mui/material";
import "./Btn.css";
const Btn = (props) => {
  const clickHandler = () => {
    props.clickHandler();
  };
  return (
    <div className="input-button">
      <Button
        variant="contained"
        size="large"
        sx={{ width: "80%", maxWidth: "300px" }}
        onClick={clickHandler}>
        {props.children}
        {props.name}
      </Button>
    </div>
  );
};

export default Btn;
