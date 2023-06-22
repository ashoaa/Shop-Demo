import Input from "./components/Input.jsx";
import Container from "./components/Container.jsx";
import Btn from "./components/Btn.jsx";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { formActions } from "./store/slices/FormSlice.jsx";

let idError, passwordError;
let id = "";
let password = "";

const LogIn = () => {
  const dispatch = useDispatch();
  const storeID = useSelector((state) => state.info.id);
  const storePassword = useSelector((state) => state.info.password);

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
      dispatch(formActions.logIn());
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
