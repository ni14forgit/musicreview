import Header from "../Navigation/Header";
import Text from "../Useful/Text";
import { background_purple, white } from "../../constants";
import FeedbackBar from "../Small/Bars/FeedbackBar";
import IconTextButton from "../Small/IconTextButton";
import { useHistory } from "react-router-dom";

const Feedback = () => {
  const history = useHistory();
  return (
    <div>
      <Header />
      <div style={{ marginLeft: 20 }}>
        <div style={{ marginBottom: 25 }}>
          <IconTextButton onClick={() => history.push("/submit")} />
        </div>
        <Text
          text="Feedback on Your Songs"
          color={background_purple}
          fontsize={24}
          bold={"bold"}
        />
        <div style={{ marginBottom: 10, marginTop: 15 }}>
          <Text
            text="March"
            color={background_purple}
            fontsize={24}
            bold={"bold"}
          />
        </div>
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
          <div style={{ position: "absolute", left: 40 }}>
            <Text
              color={background_purple}
              text={"Submission"}
              fontsize={15}
              bold="bold"
            />
          </div>
          <div style={{ position: "absolute", left: 300 }}>
            <Text
              color={background_purple}
              text={"Status"}
              fontsize={15}
              bold="bold"
            />
          </div>
          <div style={{ position: "absolute", left: 900 }}>
            <Text
              color={background_purple}
              text={"Reviewers"}
              fontsize={15}
              bold="bold"
            />
          </div>
          <div style={{ position: "absolute", left: 1100 }}>
            <Text
              color={background_purple}
              text={"Date"}
              fontsize={15}
              bold="bold"
            />
          </div>
        </div>

        {[1, 2, 3, 4, 5, 6].map((val, ind) => {
          return (
            <div style={{ marginBottom: 4 }}>
              <FeedbackBar
                reviewers={1}
                date="09/16/1999"
                song_title="firsttake.mp4"
                isDoneStatus={ind > 1}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Feedback;
