import Header from "../Navigation/Header";
import Text from "../Useful/Text";
import { background_purple, white } from "../../constants";
import ToReviewBar from "../Small/Bars/ToReviewBar";
import ReviewHeader from "../Small/Bars/ReviewHeader";
import { useEffect, useState } from "react";
import { musictoreview_menu } from "../../api/users/menu";

const MusicToReview = () => {
  const [musicsToReview, setMusicsToReview] = useState([]);
  useEffect(async () => {
    const results = await musictoreview_menu();
    // console.log(results);
    setMusicsToReview(results.musictoreview);
  }, []);

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
        <ReviewHeader />
        {musicsToReview.map((val, ind) => {
          return (
            <div style={{ marginBottom: 4 }}>
              <ToReviewBar
                date={val.date}
                song_title={val.title}
                submitter={val.submitter}
                review_id={val.review_id}
                isDoneStatus={ind > 1}
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
