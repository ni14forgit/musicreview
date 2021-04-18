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
        width: "90%",
        height: 30,
        display: "flex",
        alignItems: "center",
        flexDirection: "horizontal",

        // justifyContent: "space-around",
      }}
    >
      <div style={{ position: "absolute", left: first }}>
        <Text
          color={background_purple}
          text={"Submission"}
          fontsize={15}
          bold="bold"
        />
      </div>
      <div style={{ position: "absolute", left: second }}>
        <Text
          color={background_purple}
          text={"Artist"}
          fontsize={15}
          bold="bold"
        />
      </div>
      <div style={{ position: "absolute", left: third }}>
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
      <div style={{ position: "absolute", left: fifth }}>
        <Text
          color={background_purple}
          text={"Do By"}
          fontsize={15}
          bold="bold"
        />
      </div>

      <div style={{ position: "absolute", left: sixth }}>
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
