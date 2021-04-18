import { background_purple } from "../../constants";
import ModifiableTextBox from "../Useful/ModifiableTextBox";
import Text from "../Useful/Text";
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
  const signupAfterChecking = () => {
    if (email && passwordOne && passwordTwo) {
      if (passwordOne == passwordTwo) {
        signupAction();
      }
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
        border: "2px solid black",
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
        />
      </div>
      <div style={{ marginTop: 20 }}>
        <ModifiableTextBox
          setCurrentValue={setPasswordTwo}
          currentValue={passwordTwo}
          fontSize={16}
          placeholder="enter password again"
        />
      </div>
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
