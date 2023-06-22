import {
  Typography,
  MenuItem,
  MenuList,
  Button,
  ClickAwayListener,
  Paper,
  Popper,
  IconButton,
  Grow,
  Container,
  Badge,
} from "@mui/material";
import "./Banner.css";
import { useState, useRef, useEffect } from "react";
import HomeIcon from "@mui/icons-material/Home";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useSelector, useDispatch } from "react-redux";
import { formActions } from "../store/slices/FormSlice.jsx";
import { useNavigate } from "react-router-dom";
const Banner = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const ID = useSelector((state) => state.info.id);
  const count = useSelector((state) => state.item.count);

  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);

  const homeClickHandler = () => {
    navigate("/home");
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  const handleLogOut = () => {
    navigate("../login");
    dispatch(formActions.logout());
  };

  const prevOpen = useRef(open);
  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <>
      <header>
        <div className="banner">
          <div className="banner-info">
            <IconButton onClick={homeClickHandler} sx={{ color: "#ffffff" }}>
              <HomeIcon sx={{ fontSize: "2rem" }} />
            </IconButton>

            <Typography
              sx={{
                paddingTop: "4px",
                marginLeft: "2rem",
                fontSize: "1.5rem",
              }}>
              Hi {ID} !!
            </Typography>
          </div>
          <div className="banner-control">
            <IconButton
              ref={anchorRef}
              id="composition-button"
              aria-controls={open ? "composition-menu" : undefined}
              aria-expanded={open ? "true" : undefined}
              aria-haspopup="true"
              onClick={handleToggle}
              sx={{
                padding: "0",
                margin: "0",
                justifyContent: "end",
              }}>
              <AccountCircleIcon sx={{ fontSize: "2rem", color: "white" }} />
              <Badge
                badgeContent={count}
                color="error"
                sx={{ right: "2px", top: "-13px" }}></Badge>
            </IconButton>

            <Popper
              open={open}
              anchorEl={anchorRef.current}
              role={undefined}
              placement="bottom-start"
              transition
              disablePortal>
              {({ TransitionProps, placement }) => (
                <Grow
                  {...TransitionProps}
                  style={{
                    transformOrigin:
                      placement === "bottom-start" ? "left top" : "left bottom",
                  }}>
                  <Paper sx={{ width: "150px" }} elevation={5}>
                    <ClickAwayListener onClickAway={handleClose}>
                      <MenuList
                        sx={{ color: "#0b3564" }}
                        autoFocusItem={open}
                        id="composition-menu"
                        aria-labelledby="composition-button">
                        <Container>
                          <MenuItem
                            onClick={handleClose}
                            sx={{ fontWeight: "600" }}>
                            My Orders
                            <Badge
                              badgeContent={count}
                              color="error"
                              sx={{
                                marginTop: "-20px",
                                marginLeft: "5px",
                              }}></Badge>
                          </MenuItem>
                          <MenuItem
                            onClick={handleLogOut}
                            sx={{ fontWeight: "600" }}>
                            Logout
                          </MenuItem>
                        </Container>
                      </MenuList>
                    </ClickAwayListener>
                  </Paper>
                </Grow>
              )}
            </Popper>
          </div>

          <div></div>
        </div>
      </header>
    </>
  );
};

export default Banner;
