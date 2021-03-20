import { background_purple } from "../../constants";
import PlainTextButton from "../Useful/PlainTextButton";

const Header = () => {
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
          />
        </div>
        <div style={{ marginRight: 15 }}>
          <PlainTextButton
            color="white"
            text="Logout"
            fontsize={16}
            bold="bold"
          />
        </div>
      </div>
      <div
        style={{
          height: 50,
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
          />
        </div>
        <div style={{ marginRight: 25 }}>
          <PlainTextButton
            color={background_purple}
            text="Feedback"
            fontsize={16}
            bold="bold"
          />
        </div>
        <div style={{ marginRight: 25 }}>
          <PlainTextButton
            color={background_purple}
            text="Music To Review"
            fontsize={16}
            bold="bold"
            onClick={() => {
              console.log("hi");
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
