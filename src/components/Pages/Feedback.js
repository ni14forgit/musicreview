import Header from "../Navigation/Header";
import Text from "../Useful/Text";
import { background_purple, white } from "../../constants";
import FeedbackBar from "../Small/Bars/FeedbackBar";
import IconTextButton from "../Small/IconTextButton";
import { useHistory } from "react-router-dom";
import FeedbackHeader from "../Small/Bars/FeedbackHeader";
import { useEffect, useState } from "react";
import { feedback_menu } from "../../api/users/menu";

const Feedback = () => {
  const history = useHistory();
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(async () => {
    const results = await feedback_menu();
    setFeedbacks(results.feedbacks);
  }, []);
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

        {feedbacks.map((val, ind) => {
          return (
            <div style={{ marginBottom: 4 }}>
              <FeedbackBar
                reviewers={val.reviewers}
                date={val.date}
                song_title={val.title}
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
