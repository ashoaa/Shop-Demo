/* eslint-disable react/prop-types */
import { TextField, Typography } from "@mui/material";
import "./Input.css";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

import { useState } from "react";
import {
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
} from "@mui/material";

const Input = (props) => {
  const { type, label, onChange, isValid, errortext } = props;
  const inputHandler = (event) => {
    onChange(event.target.value.trim());
  };

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <div className="input-item">
        <FormControl sx={{ width: "26ch" }} variant="outlined">
          {type !== "password" && (
            <TextField
              type={type}
              label={label}
              variant="outlined"
              onChange={inputHandler}
            />
          )}
          {type === "password" && (
            <>
              <InputLabel htmlFor="outlined-adornment-password">
                {label}
              </InputLabel>
              <OutlinedInput
                onChange={inputHandler}
                id="outlined-adornment-password"
                type={showPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end">
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label={label}
              />
            </>
          )}

          {!isValid && (
            <Typography
              component="h2"
              paddingLeft={1}
              variant="body2"
              sx={{ color: "red" }}>
              {errortext}
            </Typography>
          )}
        </FormControl>
      </div>
    </>
  );
};
export default Input;
