import Header from "../Navigation/Header";
import Text from "../Useful/Text";
import { background_purple, white } from "../../constants";
import ToReviewBar from "../Small/Bars/ToReviewBar";

const first = 40;
const second = 200;
const third = 400;
const fourth = 600;
const fifth = 900;
const sixth = 1100;

const MusicToReview = () => {
  return (
    <div>
      <Header />
      <div style={{ marginLeft: 20 }}>
        <Text
          text="Music To Review"
          color={background_purple}
          fontsize={24}
          bold={"bold"}
        />
        {/* <div style={{ marginBottom: 10, marginTop: 15 }}>
          <Text
            text="March"
            color={background_purple}
            fontsize={24}
            bold={"bold"}
          />
        </div> */}
        <div
          style={{
            width: "90%",
            height: 30,
            display: "flex",
            alignItems: "center",
            flexDirection: "horizontal",
            marginTop: 20,
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
          <div style={{ position: "absolute", left: fourth }}>
            <Text
              color={background_purple}
              text={"Reviewers"}
              fontsize={15}
              bold="bold"
            />
          </div>
          <div style={{ position: "absolute", left: fifth }}>
            <Text
              color={background_purple}
              text={"Do by"}
              fontsize={15}
              bold="bold"
            />
          </div>

          <div style={{ position: "absolute", left: sixth }}>
            <Text
              color={background_purple}
              text={"Feedback Quality"}
              fontsize={15}
              bold="bold"
            />
          </div>
        </div>

        {[1, 2, 3, 4, 5, 6].map((val, ind) => {
          return (
            <div style={{ marginBottom: 4 }}>
              <ToReviewBar
                reviewers={1}
                date="09/16/1999"
                song_title="firsttake.mp4"
                isDoneStatus={ind > 1}
                feedback_quality={3}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MusicToReview;
