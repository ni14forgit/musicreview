import Signup from "../Authentication/Signup";
import { useState } from "react";
import Login from "../Authentication/Login";
import { useHistory } from "react-router-dom";
import { login } from "../../api/accounts/login";
import { checkExistence } from "../../api/accounts/checkexistence";
import LoadingSpinner from "../Small/LoadingSpinner";

const Authenticate = () => {
  const [email, setEmail] = useState("");
  const [passwordOne, setPasswordOne] = useState("");
  const [passwordTwo, setPasswordTwo] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  // const [isAttemptingLogin, setIsAttemptingLogin] = useState(false);
  const history = useHistory();

  // const loginWrapper = () => {

  // }

  // const switchToSignUp = () => {
  //   setIsLogin(false)
  // }

  return (
    <div>
      {isLogin ? (
        <Login
          setEmail={setEmail}
          email={email}
          passwordOne={passwordOne}
          setPasswordOne={setPasswordOne}
          switchSignUp={() => setIsLogin(false)}
          // setIsAttemptingLogin={setIsAttemptingLogin}
          // loginAction={() => history.push("home")}
          loginAction={login}
          // loginAction={() => setIsAttemptingLogin(true)}
        />
      ) : (
        <Signup
          setEmail={setEmail}
          email={email}
          passwordOne={passwordOne}
          setPasswordOne={setPasswordOne}
          passwordTwo={passwordTwo}
          setPasswordTwo={setPasswordTwo}
          switchLogin={() => setIsLogin(true)}
          // setIsAttemptingLogin={setIsAttemptingLogin}
          // signupAction={() => history.push("registerinitialprofile")}
          signupAction={checkExistence}
        />
      )}
    </div>
  );
};

export default Authenticate;
