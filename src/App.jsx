import { useSelector } from "react-redux";
import SignUp from "./SignUp.jsx";
import LogIn from "./LogIn.jsx";
import Home from "./Home.jsx";
const App = () => {
  const finishSignUp = useSelector((state) => state.form.finishSignUp);
  const logout = useSelector((state) => state.form.logout);

  return (
    <>
      {!finishSignUp && <SignUp />}
      {finishSignUp && logout && <LogIn />}
      {!logout && <Home />}
    </>
  );
};

export default App;
