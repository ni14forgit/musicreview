import { useEffect, useState, useRef } from "react";
import { background_purple } from "../../constants";
import ModifiableTextBox from "../Useful/ModifiableTextBox";
import Text from "../Useful/Text";
import { useHistory } from "react-router";

// import CommentBox from "../Small/CommentBox";

const AuthenticateButton = ({ backgroundColor, textColor, text, onClick }) => {
  return (
    <button
      style={{
        width: 266,
        height: 32,
        backgroundColor: backgroundColor,
        border: "none",
        borderRadius: 5,
        fontWeight: "bold",
        color: textColor,
        fontSize: 16,
      }}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

const Login = ({
  email,
  setEmail,
  passwordOne,
  switchSignUp,
  setPasswordOne,
  loginAction,
}) => {
  const history = useHistory();
  const [incorrectPassword, setIncorrectPassword] = useState(false);
  const [accountNonexistent, setAccountNonexistent] = useState(false);
  // email is not valid

  // useEffect(() => {
  //   console.log("changed");
  //   console.log(incorrectPassword);
  // }, [incorrectPassword]);

  const loginAfterChecking = () => {
    if (email && passwordOne) {
      // setIsAttemptingLogin(true);
      loginAction({ email: email, password: passwordOne }).then((resp) => {
        // setIsAttemptingLogin(false);
        // console.log(resp);
        if (!resp.success) {
          // console.log("not successful");
          // console.log(resp.errors.incorrectPasswordError);
          setAccountNonexistent(resp.errors.acountDoesNotExistError);
          setIncorrectPassword(resp.errors.incorrectPasswordError);
        } else {
          history.replace("/home");
        }
      });
    } else {
      // console.log("not correct?");
    }
  };
  return (
    <div
      style={{
        backgroundColor: background_purple,
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        height: 400,
        padding: 20,
        borderRadius: 5,
        width: "80%",
        // border: "2px solid black",
      }}
    >
      <div style={{ marginTop: 40 }}>
        <ModifiableTextBox
          setCurrentValue={setEmail}
          currentValue={email}
          fontSize={16}
          placeholder="email"
        />
      </div>
      <div style={{ marginTop: 20 }}>
        <ModifiableTextBox
          setCurrentValue={setPasswordOne}
          currentValue={passwordOne}
          fontSize={16}
          placeholder="password"
          isPassword={true}
        />
      </div>

      {accountNonexistent ? (
        <div
          style={{
            marginTop: 10,
            marginBottom: 10,
          }}
        >
          <Text text={"This account hasn't been created!"} color="red" />
        </div>
      ) : null}

      {incorrectPassword ? (
        <div
          style={{
            marginTop: 10,
            marginBottom: 10,
          }}
        >
          <Text text={"Incorrect password!"} color="red" />
        </div>
      ) : null}
      <div style={{ marginTop: 20 }}>
        <AuthenticateButton
          backgroundColor="#5988FF"
          textColor="white"
          text={"Login"}
          onClick={loginAfterChecking}
        />
      </div>

      <div style={{ marginTop: 20 }}>
        <Text text="Don't have an account?" color="white" />
      </div>

      <div
        style={{
          marginTop: 20,
          height: 2,
          width: 330,
          backgroundColor: "white",
          opacity: 0.8,
        }}
      ></div>

      <div style={{ marginTop: 20 }}>
        <AuthenticateButton
          backgroundColor="white"
          textColor={background_purple}
          text="Sign Up"
          onClick={switchSignUp}
        />
      </div>
    </div>
  );
};

export default Login;
