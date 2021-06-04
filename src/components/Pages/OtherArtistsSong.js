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
const OtherArtistsSong = ({ submission_id, review_id }) => {
  const [listOfComments, setListOfComments] = useState([]);
  const [generalOverview, setGeneralOverview] = useState({
    altered: false,
    value: "",
  });
  const [song, setSong] = useState(null);
  const [title, setTitle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [questions, setQuestions] = useState([]);
  const [deletedComments, setDeletedComments] = useState([]);
  // const [addedComments, setAddedComments] = useState([]);

  // deletedComments, overview, addedComments;
  const saveAndSubmit = async () => {
    // submit_review(1, [1], { altered: true, value: "test1" }, [
    //   { timestamp: 100, comment: "test3" },
    // ])
    submit_review(
      review_id,
      deletedComments,
      generalOverview
      // addedComments
    ).then((res) => {
      console.log(res);
    });
    // submit_review(review_id, deletedComments, generalOverview, addedComments);
  };

  useEffect(async () => {
    const submissionResult = await retrieve_submission(1);
    // console.log(result);
    console.log(submissionResult.song.url);
    setSong(submissionResult.song.url);
    setTitle(submissionResult.song.title);
    setQuestions(submissionResult.questions);

    const reviewResult = await retrieve_review();

    for (var i = 0; i < reviewResult.comments.length; i++) {
      reviewResult.comments[i].saved = true;
      reviewResult.comments[i].uitimestamp = convertTime(
        reviewResult.comments[i].timestamp
      );
      // reviewResult.comments[i].uitimestamp = nish;
    }

    setLoading(false);
    // setGeneralFeedback(result.generalfeedback);
    // setListOfComments(listOfComments)
  }, []);

  const removeQuestionKey = (questions) => {
    var arrayToReturn = [];
    for (var i = 0; i < questions.length; i++) {
      arrayToReturn.push(questions[i].question);
    }
    return arrayToReturn;
  };

  return loading ? (
    <LoadingSpinner />
  ) : (
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
          <Player
            title={title}
            song={song}
            deletedComments={deletedComments}
            setDeletedComments={setDeletedComments}
            listOfComments={[]}
            setListOfComments={setListOfComments}
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
