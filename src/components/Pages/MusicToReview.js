import Header from "../Navigation/Header";
import Text from "../Useful/Text";
import { background_purple, white } from "../../constants";
import ToReviewBar from "../Small/Bars/ToReviewBar";
import ReviewHeader from "../Small/Bars/ReviewHeader";
import { useEffect, useState } from "react";
import { musictoreview_menu } from "../../api/users/menu";
import { useStore } from "../../store/store";
import { sortByDate } from "../../metafunctions/date";

const MusicToReview = () => {
  const [musicsToReview, setMusicsToReview] = useState([]);
  const [state, dispatch] = useStore();
  useEffect(async () => {
    const results = await musictoreview_menu();
    // console.log(results);
    const musicsTemp = results.musictoreview;
    musicsTemp.sort((a, b) => sortByDate(a.date, b.date));
    setMusicsToReview(musicsTemp);
  }, []);

  return (
    <div>
      <Header
        numunopenedfeedback={state.numunopenedfeedback}
        numfeedbacktogive={state.numtodoreview}
      />
      <div style={{ marginLeft: 20 }}>
        <Text
          text="Music To Review"
          color={background_purple}
          fontsize={24}
          bold={"bold"}
        />
        <ReviewHeader />
        {musicsToReview.map((val, ind) => {
          return (
            <div style={{ marginBottom: 4 }}>
              <ToReviewBar
                date={val.date}
                song_title={val.title}
                submitter={val.submitter}
                review_id={val.review_id}
                isDoneStatus={val.touched}
                feedback_quality={val.feedback_quality}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MusicToReview;
