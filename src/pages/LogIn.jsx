import Input from "../components/Input.jsx";
import Container from "../components/Container.jsx";
import Btn from "../components/Btn.jsx";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

let idError, passwordError;
let id = "";
let password = "";

const LogIn = () => {
  const navigate = useNavigate();

  const storeID = localStorage.getItem("id");
  const storePassword = localStorage.getItem("password");

  const [idValid, setIDValid] = useState("true");
  const [passwordValid, setPasswordValid] = useState("true");

  const saveID = (inputID) => {
    id = inputID;
  };
  const savePassword = (inputPassword) => {
    password = inputPassword;
  };

  const loginHandler = () => {
    if (id !== storeID || password !== storePassword) {
      idError = "Incorrect ID or Password!!";
      passwordError = "Incorrect ID or Password!!";
      setIDValid(false);
      setPasswordValid(false);
    } else {
      localStorage.setItem("login", true);
      navigate("/home");
    }
  };
  return (
    <>
      <Container title="Log In">
        <Input
          type="text"
          label="Id"
          onChange={saveID}
          isValid={idValid}
          errortext={idError}
        />
        <Input
          type="password"
          label="Password"
          onChange={savePassword}
          isValid={passwordValid}
          errortext={passwordError}
        />
        <Btn name="Login" clickHandler={loginHandler} />
      </Container>
      ;
    </>
  );
};
export default LogIn;
