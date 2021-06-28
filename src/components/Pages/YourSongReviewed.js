import Header from "../Navigation/Header";
import OverallReview from "../OverallReview";
import ReviewedSong from "../ReviewedSong";
import nish from "../../nish.jpg";
import { useEffect, useState } from "react";
import { retrieve_statictotalretrieve } from "../../api/users/reviews/retrieve";
import { retrieve_submission } from "../../api/users/submissions/retrieve";
import { seenupdate_review } from "../../api/users/reviews/count";
import LoadingSpinner from "../Small/LoadingSpinner";
import InstructionsUI from "../Small/InstructionsUI";
import { useStore } from "../../store/store";
import { canAccessSongFeedback } from "../../api/accounts/session";
import { useHistory } from "react-router";

const YourSongReviewed = ({ match }) => {
  const history = useHistory();
  const [state, dispatch] = useStore();
  const [loading, setLoading] = useState(true);
  const [reviews, setReviews] = useState([]);
  const [song, setSong] = useState(null);
  const [title, setTitle] = useState(null);
  const [questions, setQuestions] = useState([]);
  useEffect(async () => {
    setLoading(true);

    const canAccessSong = await canAccessSongFeedback(
      match.params.submission_id
    );
    if (canAccessSong.error) {
      history.replace(canAccessSong.to);
    }

    const res = await retrieve_statictotalretrieve(match.params.submission_id);
    const submissionResult = await retrieve_submission(
      match.params.submission_id
    );
    // console.log(submissionResult);
    setSong(submissionResult.song.url);
    setTitle(submissionResult.song.title);
    setQuestions(submissionResult.questions);

    setReviews(res.reviews);
    // console.log(res.reviews);
    // setReviews(tempreview);

    seenupdate_review(match.params.submission_id);

    setLoading(false);
  }, []);

  const removeQuestionKey = (questions) => {
    var arrayToReturn = [];
    for (var i = 0; i < questions.length; i++) {
      arrayToReturn.push(questions[i].question);
    }
    return arrayToReturn;
  };
  return loading ? (
    <div>
      <LoadingSpinner />
    </div>
  ) : (
    <div>
      <Header
        numunopenedfeedback={state.numunopenedfeedback}
        numfeedbacktogive={state.numtodoreview}
      />
      <div style={{ marginLeft: "50px" }}>
        <div style={{ marginBottom: 20 }}>
          <div style={{ maxWidth: "90%", marginBottom: 20 }}>
            <InstructionsUI
              title="Your Questions"
              blurb=""
              bullets={removeQuestionKey(questions)}
            />
          </div>
          <ReviewedSong title={title} song={song} reviews={reviews} />
        </div>
        {reviews.map((val, ind) => {
          return (
            <div style={{ marginBottom: 20 }}>
              <OverallReview review={val} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default YourSongReviewed;
