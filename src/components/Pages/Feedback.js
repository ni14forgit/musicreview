import Header from "../Navigation/Header";
import Text from "../Useful/Text";
import { background_purple, white } from "../../constants";
import FeedbackBar from "../Small/Bars/FeedbackBar";
import IconTextButton from "../Small/IconTextButton";
import { useHistory } from "react-router-dom";
import FeedbackHeader from "../Small/Bars/FeedbackHeader";
import { useEffect, useState } from "react";
import { feedback_menu } from "../../api/users/menu";
import { useStore } from "../../store/store";
import { sortByDate } from "../../metafunctions/date";

const Feedback = () => {
  const history = useHistory();
  const [feedbacks, setFeedbacks] = useState([]);

  const [state, dispatch] = useStore();

  useEffect(async () => {
    const results = await feedback_menu();
    var tempFeedbacks = results.feedbacks;
    tempFeedbacks.sort((a, b) => sortByDate(a.date, b.date));
    setFeedbacks(results.feedbacks);
  }, []);
  return (
    <div>
      <Header
        numunopenedfeedback={state.numunopenedfeedback}
        numfeedbacktogive={state.numtodoreview}
      />
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
        {/* <div style={{ marginBottom: 10, marginTop: 15 }}>
          <Text
            text="March"
            color={background_purple}
            fontsize={24}
            bold={"bold"}
          />
        </div> */}
        <FeedbackHeader />

        {feedbacks.map((val, ind) => {
          var isDoneStatus = true;
          for (var i = 0; i < val.reviewers.length; i++) {
            if (!val.reviewers[i].touched) {
              isDoneStatus = false;
            }
          }

          return (
            <div style={{ marginBottom: 4 }}>
              <FeedbackBar
                reviewers={val.reviewers}
                date={val.date}
                submissionId={val.submission_id}
                song_title={val.title}
                isDoneStatus={isDoneStatus}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Feedback;
