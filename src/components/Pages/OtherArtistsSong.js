import Header from "../Navigation/Header";
import Player from "../Player";
import GeneralFeedback from "../Small/GeneralFeedback";
import { useState, useEffect } from "react";
import TextButton from "../Useful/TextButton";
import { retrieve_submission } from "../../api/users/submissions/retrieve";
import LoadingSpinner from "../Small/LoadingSpinner";
import InstructionsUI from "../Small/InstructionsUI";
import { submit_review } from "../../api/users/reviews/submit";
import { retrieve_review } from "../../api/users/reviews/retrieve";
import { convertTime } from "../../metafunctions/timestamp";
import nish from "../../nish.jpg";
const OtherArtistsSong = ({ match }) => {
  const [comments, setComments] = useState([]);
  const [generalOverview, setGeneralOverview] = useState({
    altered: false,
    value: "",
  });
  const [song, setSong] = useState(null);
  const [title, setTitle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [questions, setQuestions] = useState([]);
  const [deletedComments, setDeletedComments] = useState([]);
  const [submission_id, setSubmission_id] = useState(null);
  const [review_id, setReview_id] = useState(null);
  // const [addedComments, setAddedComments] = useState([]);
  // let submission_id;
  // let review_id;

  // deletedComments, overview, addedComments;

  const retrieveReviewAndSet = async (reviewId) => {
    // const reviewResult = await retrieve_review(review_id);
    const reviewResult = await retrieve_review(reviewId);

    for (var i = 0; i < reviewResult.comments.length; i++) {
      reviewResult.comments[i].saved = true;
      reviewResult.comments[i].uitimestamp = convertTime(
        reviewResult.comments[i].timestamp
      );
    }

    setComments(reviewResult.comments);
    setGeneralOverview({ altered: false, value: reviewResult.generalOverview });

    console.log(reviewResult);
  };

  const retrieveSubmissionAndSet = async (submissionId) => {
    const submissionResult = await retrieve_submission(submissionId);

    setSong(submissionResult.song.url);
    setTitle(submissionResult.song.title);
    setQuestions(submissionResult.questions);
  };

  const saveAndSubmit = async () => {
    // submit_review(1, [1], { altered: true, value: "test1" }, [
    //   { timestamp: 100, comment: "test3" },
    // ])
    console.log(review_id);
    console.log(deletedComments);
    console.log();
    submit_review(
      review_id,
      deletedComments,
      generalOverview,
      comments
      // addedComments
    ).then(async (res) => {
      console.log(res);
      setLoading(true);
      await retrieveReviewAndSet(review_id);
      setLoading(false);
    });
    // submit_review(review_id, deletedComments, generalOverview, addedComments);
  };

  useEffect(async () => {
    setSubmission_id(match.params.submission_id);
    setReview_id(match.params.review_id);

    await retrieveSubmissionAndSet(match.params.submission_id);
    await retrieveReviewAndSet(match.params.review_id);

    setLoading(false);
  }, []);

  const removeQuestionKey = (questions) => {
    var arrayToReturn = [];
    for (var i = 0; i < questions.length; i++) {
      arrayToReturn.push(questions[i].question);
    }
    return arrayToReturn;
  };

  return (
    <div>
      <Header />
      <div style={{ marginLeft: "50px" }}>
        <div style={{ marginBottom: 20, width: "90%" }}>
          <div style={{ marginBottom: 20 }}>
            <InstructionsUI
              title="Artist Questions"
              blurb="Let these guide your feedback"
              bullets={removeQuestionKey(questions)}
            />
          </div>
          <div style={{ display: loading ? "none" : null }}>
            <Player
              title={title}
              song={song}
              deletedComments={deletedComments}
              setDeletedComments={setDeletedComments}
              comments={comments}
              setComments={setComments}
            />
          </div>
        </div>
        <div style={{ marginBottom: 20, width: "90%" }}>
          <GeneralFeedback
            currentValue={generalOverview.value}
            setCurrentValue={setGeneralOverview}
          />
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "horizontal",
          justifyContent: "flex-end",
          width: "90%",
        }}
      >
        {/* <div style={{ marginRight: 8 }}>
          <TextButton text={"Save"} />
        </div> */}
        <div>
          <TextButton text={"Save & Submit"} onClick={saveAndSubmit} />
        </div>
      </div>
    </div>
  );
};

export default OtherArtistsSong;
