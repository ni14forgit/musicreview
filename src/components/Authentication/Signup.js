import { useState } from "react";
import { background_purple, white } from "../../constants";
import ModifiableTextBox from "../Useful/ModifiableTextBox";
import Text from "../Useful/Text";
import { useHistory } from "react-router-dom";
import {
  checkValidEmail,
  checkPasswordsMatch,
  checkValidPassword,
} from "./authFunctionHelper";

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

// "#5988FF",

const Signup = ({
  email,
  setEmail,
  passwordOne,
  passwordTwo,
  setPasswordOne,
  setPasswordTwo,
  switchLogin,
  signupAction,
}) => {
  const history = useHistory();

  const [invalidPassword, setInvalidPassword] = useState(false);
  const [accountAlreadyExists, setAccountAlreadyExists] = useState(false);
  const [emailNotValid, setEmailNotValid] = useState(false);
  const [passwordsDontMatch, setPasswordsDontMatch] = useState(false);

  const signupAfterChecking = async () => {
    var everyThingWorks = true;

    // if (!email || !passwordOne || !passwordTwo) {

    //   console.log("please fill out all fields");
    //   everyThingWorks = false;

    // }

    if (checkValidEmail) {
      setEmailNotValid(false);
    }
    if (checkPasswordsMatch(passwordOne, passwordTwo)) {
      setPasswordsDontMatch(false);
    }
    if (checkValidPassword(passwordOne)) {
      setInvalidPassword(false);
    }
    // if (checkValidEmail) {
    //   setEmailNotValid(false);
    // }

    if (email && passwordOne && passwordTwo) {
      if (checkValidEmail(email)) {
        // setEmailNotValid(false);
        if (checkPasswordsMatch(passwordOne, passwordTwo)) {
          // setPasswordsDontMatch(false);
          if (checkValidPassword(passwordOne)) {
            // setInvalidPassword(false);
            const userDoesExist = await signupAction({
              email: email,
              password: passwordOne,
            });
            if (!userDoesExist) {
              setAccountAlreadyExists(false);
              // console.log("user does not exist yay!");
              history.push({
                pathname: "/registerinitialprofile",
                state: { email: email, password: passwordOne },
              });
            } else {
              // console.log("user already exists nay");
              setAccountAlreadyExists(true);
            }
          } else {
            // console.log("password isn't valid");
            setInvalidPassword(true);
          }
        } else {
          // console.log("passwords do not match");
          setPasswordsDontMatch(true);
        }
      } else {
        // console.log("email is not valid");
        setEmailNotValid(true);
      }
    } else {
      // console.log("please fill out all fields");
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
        width: "80%",
        padding: 20,
        borderRadius: 5,
        // border: "2px solid black",
      }}
    >
      <div style={{ marginTop: 20 }}>
        <Text
          text={
            "Please remember your password and enter email correctly, we haven't built password retrieval yet."
          }
          color={white}
          fontsize={14}
          bold={"bold"}
        />
      </div>
      <div style={{ marginTop: 20 }}>
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
          isPassword={true}
          placeholder="password"
        />
      </div>
      <div style={{ marginTop: 20 }}>
        <ModifiableTextBox
          setCurrentValue={setPasswordTwo}
          currentValue={passwordTwo}
          fontSize={16}
          isPassword={true}
          placeholder="enter password again"
        />
      </div>

      {accountAlreadyExists ? (
        <div
          style={{
            marginTop: 10,
            marginBottom: 10,
          }}
        >
          <Text
            text={"An account with this email already exists!"}
            color="red"
          />
        </div>
      ) : null}

      {invalidPassword ? (
        <div
          style={{
            marginTop: 10,
            marginBottom: 10,
          }}
        >
          <Text
            text={"Password needs to be at least 8 characters!"}
            color="red"
          />
        </div>
      ) : null}

      {emailNotValid ? (
        <div
          style={{
            marginTop: 10,
            marginBottom: 10,
          }}
        >
          <Text text={"Email isn't valid."} color="red" />
        </div>
      ) : null}

      {passwordsDontMatch ? (
        <div
          style={{
            marginTop: 10,
            marginBottom: 10,
          }}
        >
          <Text text={"Passwords don't match"} color="red" />
        </div>
      ) : null}

      <div style={{ marginTop: 20 }}>
        <AuthenticateButton
          backgroundColor="#5988FF"
          textColor="white"
          text={"Sign Up"}
          onClick={signupAfterChecking}
        />
      </div>

      <div style={{ marginTop: 20 }}>
        <Text text="Already have an account?" color="white" />
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
          text="Login"
          onClick={switchLogin}
        />
      </div>
    </div>
  );
};

export default Signup;
