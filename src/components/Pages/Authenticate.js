import Signup from "../Authentication/Signup";
import { useState } from "react";
import Login from "../Authentication/Login";

const Authenticate = () => {
  const [email, setEmail] = useState("");
  const [passwordOne, setPasswordOne] = useState("");
  const [passwordTwo, setPasswordTwo] = useState("");
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div>
      {isLogin ? (
        <Login
          setEmail={setEmail}
          email={email}
          passwordOne={passwordOne}
          setPasswordOne={setPasswordOne}
          switchSignUp={() => setIsLogin(false)}
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
        />
      )}
    </div>
  );
};

export default Authenticate;
