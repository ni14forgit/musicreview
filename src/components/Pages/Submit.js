import { useState } from "react";
import AddQuestions from "../Submission/AddQuestions";
import SubmitMusic from "../Submission/SubmitMusic";
import Header from "../Navigation/Header";
import TextButton from "../Useful/TextButton";
import ThankYou from "../Submission/ThankYou";

const GENRES = ["Lofi", "Lofi", "Lofi", "Lofi", "Lofi", "Lofi", "Lofi"];
const PROFESSIONS = ["Engineer", "Producer", "Lyricist", "Lyricist"];

const Submit = () => {
  const [step, setStep] = useState(1);
  const [song, setSong] = useState(null);
  const [nextButtonEnable, setNextButtonEnable] = useState(false);
  var starterArrayGenres = new Array(GENRES.length);
  const [genres, setGenres] = useState(starterArrayGenres.fill(false));

  // const [currentCommentValue, setCurrentCommentValue] = useState("");
  const [listOfComments, setListOfComments] = useState([]);
  const listOfGenres = ["lo-fi", "lo-fi", "lo-fi", "lo-fi"];
  var starterArray = new Array(listOfGenres.length);
  const [canMoveOn, setCanMoveOn] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState(
    starterArray.fill(false)
  );

  const nextStep = () => {
    setStep(step + 1);
  };

  const previousStep = () => {
    setStep(step - 1);
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
            selectedOptions={genres}
            setSelectedOptions={setGenres}
            constantCategories={PROFESSIONS}
            enableNextButton={setNextButtonEnable}
          />
        );
    }
  };

  return (
    <div>
      <Header />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 70,
        }}
      >
        {step < 2 ? (
          <div>
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
                    onClick={() => setStep(step + 1)}
                  />
                )}
              </div>
            </div>
          </div>
        ) : (
          <ThankYou />
        )}
      </div>
    </div>
  );
};

export default Submit;
