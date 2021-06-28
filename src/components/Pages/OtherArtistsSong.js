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
import { useStore } from "../../store/store";
import { useHistory } from "react-router";
import { canAccessSongToReview } from "../../api/accounts/session";
import Text from "../Useful/Text";
import { background_purple, purple } from "../../constants";
import { send_email_onreviewupdate } from "../../api/users/email";
const OtherArtistsSong = ({ match }) => {
  const history = useHistory();
  const [state, dispatch] = useStore();
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
  const [photo, setPhoto] = useState("");
  const [reviewerName, setReviewerName] = useState("");
  const [submitterEmail, setSubmitterEmail] = useState("");
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
      reviewResult.comments[i].photo = reviewResult.reviewer_own_photo;
    }

    setComments(reviewResult.comments);
    setGeneralOverview({ altered: false, value: reviewResult.generalOverview });
    setPhoto(reviewResult.reviewer_own_photo);
    setReviewerName(reviewResult.reviewer_own_name);

    // console.log(reviewResult);
  };

  const retrieveSubmissionAndSet = async (submissionId) => {
    const submissionResult = await retrieve_submission(submissionId);
    // console.log(submissionResult);
    setSong(submissionResult.song.url);
    setTitle(submissionResult.song.title);
    setQuestions(submissionResult.questions);
    setSubmitterEmail(submissionResult.submitterEmail);
  };

  const saveAndSubmit = async () => {
    // submit_review(1, [1], { altered: true, value: "test1" }, [
    //   { timestamp: 100, comment: "test3" },
    // ])
    // console.log(review_id);
    // console.log(deletedComments);
    // console.log();
    submit_review(
      review_id,
      deletedComments,
      generalOverview,
      comments
      // addedComments
    ).then(async (res) => {
      // console.log(res);
      setLoading(true);
      await retrieveReviewAndSet(review_id);
      setLoading(false);
      send_email_onreviewupdate(reviewerName, submitterEmail);
    });
    // submit_review(review_id, deletedComments, generalOverview, addedComments);
  };

  useEffect(async () => {
    setSubmission_id(match.params.submission_id);
    setReview_id(match.params.review_id);

    const accessReview = await canAccessSongToReview(
      match.params.submission_id,
      match.params.review_id
    );
    if (accessReview.error) {
      history.replace(accessReview.to);
    }

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
      <Header
        numunopenedfeedback={state.numunopenedfeedback}
        numfeedbacktogive={state.numtodoreview}
      />
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
            {song ? (
              <Player
                title={title}
                song={song}
                deletedComments={deletedComments}
                setDeletedComments={setDeletedComments}
                comments={comments}
                setComments={setComments}
                photo={photo}
              />
            ) : null}
          </div>
        </div>
        <div style={{ marginBottom: 10 }}>
          <Text
            text="General Review"
            color={background_purple}
            fontsize={25}
            bold={"bold"}
          />
        </div>
        <div style={{ marginBottom: 10 }}>
          <Text
            text="what are your general thoughts on the submission? try to be as detailed as possible on your advice!"
            color={background_purple}
            fontsize={15}
            // bold={"bold"}
          />
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
