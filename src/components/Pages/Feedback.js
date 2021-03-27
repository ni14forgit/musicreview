import Header from "../Navigation/Header";
import Text from "../Useful/Text";
import { background_purple, white } from "../../constants";
import FeedbackBar from "../Small/Bars/FeedbackBar";
import IconTextButton from "../Small/IconTextButton";
import { useHistory } from "react-router-dom";
import FeedbackHeader from "../Small/Bars/FeedbackHeader";

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
        <FeedbackHeader />

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
