import { useState } from "react";
import AddQuestions from "../Submission/AddQuestions";
import SubmitMusic from "../Submission/SubmitMusic";
import Header from "../Navigation/Header";
import TextButton from "../Useful/TextButton";
import ThankYou from "../Submission/ThankYou";
import {
  GENRES,
  PROFESSIONS,
  starterArrayGenres,
  starterArrayProfessions,
  convertGenresListToDict,
  convertProfessionsListToDict,
} from "../../metafunctions/genProfHelper";
import { submit_music } from "../../api/users/submissions/submit";
import LoadingSpinner from "../Small/LoadingSpinner";
import { match } from "../../api/users/match";
import { useStore } from "../../store/store";
import { send_email_onsubmission } from "../../api/users/email";

const Submit = () => {
  const [state, dispatch] = useStore();
  const [step, setStep] = useState(0);
  const [song, setSong] = useState(null);
  const [nextButtonEnable, setNextButtonEnable] = useState(false);
  const [genres, setGenres] = useState(starterArrayGenres.fill(false));
  const [professions, setProfessions] = useState(
    starterArrayProfessions.fill(false)
  );
  // const [currentCommentValue, setCurrentCommentValue] = useState("");
  const [listOfComments, setListOfComments] = useState([]);
  const [isSubmitLoading, setIsSubmitLoading] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  const submitSongFunc = async () => {
    setIsSubmitLoading(true);
    var today = new Date();
    var dd = String(today.getDate());
    var mm = String(today.getMonth() + 1); //January is 0!
    var yyyy = today.getFullYear();
    today = mm + "/" + dd + "/" + yyyy;

    // song, questions, genres, preferredProfessions

    const convertedGenresDict = convertGenresListToDict(genres);
    const convertedProfessionsDict = convertProfessionsListToDict(professions);
    // console.log("submission called");
    submit_music(
      song,
      listOfComments,
      convertedGenresDict,
      convertedProfessionsDict,
      today
    ).then((res) => {
      if (res.success) {
        match(
          res.submissionId,
          convertedGenresDict,
          convertedProfessionsDict
        ).then((matchRes) => {
          if (matchRes.success) {
            // console.log("upload successful!");
            setIsSubmitLoading(false);
            setIsCompleted(true);
            // console.log(matchRes);

            send_email_onsubmission(
              matchRes.reviews,
              matchRes.submissionId,
              matchRes.submitterName,
              matchRes.submitterEmail
            );

            // send email
          } else {
            // console.log("something wrong happened");
          }
        });
      } else {
        // console.log("something wronog happened");
      }
    });
  };

  const fakeSubmit = () => {
    setIsSubmitLoading(true);
    const afterTimer = () => {
      setIsSubmitLoading(false);
      setIsCompleted(true);
    };
    setTimeout(afterTimer, 2000);
  };

  const renderStep = (stepAlongPath) => {
    switch (stepAlongPath) {
      case 0:
        return (
          <SubmitMusic
            song={song}
            setSong={setSong}
            enableNextButton={setNextButtonEnable}
            selectedOptions={genres}
            setSelectedOptions={setGenres}
            constantCategories={GENRES}
          />
        );
      case 1:
        return (
          <AddQuestions
            listOfComments={listOfComments}
            setListOfComments={setListOfComments}
            selectedOptions={professions}
            setSelectedOptions={setProfessions}
            constantCategories={PROFESSIONS}
            enableNextButton={setNextButtonEnable}
          />
        );
    }
  };

  return (
    <div>
      <Header
        numunopenedfeedback={state.numunopenedfeedback}
        numfeedbacktogive={state.numtodoreview}
      />
      {!(isCompleted || isSubmitLoading) ? (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 70,
          }}
        >
          {renderStep(step)}
          <div
            style={{
              display: "flex",
              flexDirection: "horizontal",
              justifyContent: "center",
              marginTop: 20,
              width: "100vw",
            }}
          >
            <div style={{ marginRight: 30 }}>
              {step != 0 ? (
                <TextButton
                  text="Back"
                  disabled={false}
                  onClick={() => setStep(step - 1)}
                />
              ) : null}
            </div>
            <div style={{ marginLeft: 30 }}>
              {step < 1 ? (
                <TextButton
                  text="Next"
                  disabled={!nextButtonEnable}
                  onClick={() => setStep(step + 1)}
                />
              ) : (
                <TextButton
                  text="Complete Submission"
                  disabled={!nextButtonEnable}
                  onClick={submitSongFunc}
                  // onClick={fakeSubmit}
                />
              )}
            </div>
          </div>
        </div>
      ) : isCompleted ? (
        <ThankYou />
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "horizontal",
          }}
        >
          <LoadingSpinner />
        </div>
      )}
    </div>
  );
};

export default Submit;
