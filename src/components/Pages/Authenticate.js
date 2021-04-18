import Signup from "../Authentication/Signup";
import { useState } from "react";
import Login from "../Authentication/Login";
import { useHistory } from "react-router-dom";

const Authenticate = () => {
  const [email, setEmail] = useState("");
  const [passwordOne, setPasswordOne] = useState("");
  const [passwordTwo, setPasswordTwo] = useState("");
  const [isLogin, setIsLogin] = useState(true);

  const history = useHistory();

  return (
    <div>
      {isLogin ? (
        <Login
          setEmail={setEmail}
          email={email}
          passwordOne={passwordOne}
          setPasswordOne={setPasswordOne}
          switchSignUp={() => setIsLogin(false)}
          loginAction={() => history.push("home")}
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
          signupAction={() => history.push("registerinitialprofile")}
        />
      )}
    </div>
  );
};

export default Authenticate;
