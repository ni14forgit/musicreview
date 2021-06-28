import Text from "../../Useful/Text";
import { background_purple, white } from "../../../constants";
const FeedbackHeader = () => {
  return (
    <div
      style={{
        maxWidth: "60%",
        height: 30,
        display: "flex",
        alignItems: "center",
        flexDirection: "horizontal",
        marginTop: 20,
        // justifyContent: "space-around",
      }}
    >
      <div style={{ marginLeft: 20, minWidth: 120 }}>
        <Text
          color={background_purple}
          text={"Reviewers"}
          fontsize={15}
          bold="bold"
        />
      </div>
      <div style={{ marginLeft: 20, minWidth: 150 }}>
        <Text
          color={background_purple}
          text={"Submission"}
          fontsize={15}
          bold="bold"
        />
      </div>
      <div style={{ minWidth: 150 }}>
        <Text
          color={background_purple}
          text={"Status"}
          fontsize={15}
          bold="bold"
        />
      </div>
      <div style={{ minWidth: 150 }}>
        <Text
          color={background_purple}
          text={"Date"}
          fontsize={15}
          bold="bold"
        />
      </div>
      {/* <div style={{ position: "absolute", left: 900 }}>
        <Text
          color={background_purple}
          text={"Reviewers"}
          fontsize={15}
          bold="bold"
        />
      </div> */}
      {/* <div style={{ position: "absolute", left: 1100 }}>
        <Text
          color={background_purple}
          text={"Date"}
          fontsize={15}
          bold="bold"
        />
      </div> */}
    </div>
  );
};

export default FeedbackHeader;
