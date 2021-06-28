import Text from "../../Useful/Text";
import { background_purple, white } from "../../../constants";
const first = 40;
const second = 200;
const third = 400;
const fourth = 600;
const fifth = 900;
const sixth = 1100;
const ReviewHeader = () => {
  return (
    <div
      style={{
        minWidth: "90%",
        height: 30,
        display: "flex",
        alignItems: "center",
        flexDirection: "horizontal",

        // justifyContent: "space-around",
      }}
    >
      <div style={{ minWidth: 50 }}>
        <Text
          color={background_purple}
          text={"Artist"}
          fontsize={15}
          bold="bold"
        />
      </div>
      <div style={{ marginLeft: 20, minWidth: 160 }}>
        <Text
          color={background_purple}
          text={"Submission"}
          fontsize={15}
          bold="bold"
        />
      </div>
      <div style={{ minWidth: 200 }}>
        <Text
          color={background_purple}
          text={"Status"}
          fontsize={15}
          bold="bold"
        />
      </div>
      {/* <div style={{ position: "absolute", left: fourth }}>
          <Text
            color={background_purple}
            text={"Reviewers"}
            fontsize={15}
            bold="bold"
          />
        </div> */}
      <div style={{ minWidth: 200 }}>
        <Text
          color={background_purple}
          text={"Submitted On"}
          fontsize={15}
          bold="bold"
        />
      </div>

      <div style={{ minWidth: 200 }}>
        <Text
          color={background_purple}
          text={"Your Feedback Quality"}
          fontsize={15}
          bold="bold"
        />
      </div>
    </div>
  );
};

export default ReviewHeader;
