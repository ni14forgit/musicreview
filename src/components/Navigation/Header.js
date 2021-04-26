import { background_purple, white } from "../../constants";
import PlainTextButton from "../Useful/PlainTextButton";
import { useHistory } from "react-router-dom";
import Text from "../Useful/Text";

const TextButton = ({ text, onClick, bold, color, fontsize, num }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "horizontal",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <button
        style={{
          // background: purple,
          backgroundColor: "transparent",
          maxHeight: 50,
          borderRadius: 5,
          alignSelf: "center",
          textAlign: "center",
          paddingRight: "12px",
          paddingLeft: "12px",
          paddingTop: "6px",
          paddingBottom: "6px",
          border: "0px solid black",
          color: color,
          fontWeight: bold,
          outline: 0,
          fontSize: fontsize,
        }}
        onClick={onClick}
      >
        {text}
      </button>
      <div
        style={{
          width: 22,
          height: 22,
          borderRadius: 11,
          backgroundColor: background_purple,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          marginLeft: -11,
          marginTop: -20,
        }}
      >
        <Text text={num} color={white} fontsize={13} bold={"bold"} />
      </div>
    </div>
  );
};

const Header = ({}) => {
  const history = useHistory();
  return (
    <div>
      <div
        style={{
          height: 80,
          width: "100%",
          backgroundColor: background_purple,
          display: "flex",
          flexDirection: "horizontal",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div style={{ marginLeft: 15 }}>
          <PlainTextButton
            color="white"
            text="noname"
            fontsize={30}
            bold="bold"
            onClick={() => history.push("/home")}
          />
        </div>
        <div style={{ marginRight: 15 }}>
          <PlainTextButton
            color="white"
            text="Logout"
            fontsize={16}
            bold="bold"
            onClick={() => history.push("/home")}
          />
        </div>
      </div>
      <div
        style={{
          height: 60,
          width: "100%",
          // backgroundColor: background_purple,
          display: "flex",
          flexDirection: "horizontal",
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        <div style={{ marginRight: 25 }}>
          <PlainTextButton
            color={background_purple}
            text="Profile"
            fontsize={16}
            bold="bold"
            onClick={() => history.push("/profile")}
          />
        </div>
        <div style={{ marginRight: 25 }}>
          <TextButton
            color={background_purple}
            text="Feedback Received"
            fontsize={16}
            bold="bold"
            onClick={() => history.push("/feedback")}
            num={2}
          />
        </div>
        <div style={{ marginRight: 25 }}>
          <TextButton
            color={background_purple}
            text="Feedback To Give"
            fontsize={16}
            bold="bold"
            onClick={() => history.push("/musictoreview")}
            num={1}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
