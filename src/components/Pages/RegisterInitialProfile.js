import { useState } from "react";
import RegAddSingleLine from "../RegistrationComponents/RegAddSingleLine";
import RegAddSocialLink from "../RegistrationComponents/RegAddSocialLink";
import RegAddSelectedOptions from "../RegistrationComponents/RegAddSelectedOptions";
import RegAddProfilePicture from "../RegistrationComponents/RegAddProfilePicture";
import RegAddMilestone from "../RegistrationComponents/RegAddMilestone";
import TextButton from "../Useful/TextButton";
import RegAddSongs from "../RegistrationComponents/RegAddSongs";

const GENRES = ["R&B", "R&B", "R&B", "R&B", "R&B"];
const PROFESSIONS = ["Singer", "Songwriter", "Audio Engineer", "Producer"];
const RegisterInitialProfile = () => {
  var starterArrayGenres = new Array(GENRES.length);
  var starterArrayProfessions = new Array(PROFESSIONS.length);
  const [step, setStep] = useState(6);
  const [nextButtonEnable, setNextButtonEnable] = useState(false);

  // PROFILE PICTURE
  const [imageData, setImageData] = useState(null);

  // SOUNDCLOUD, SPOTIFY, INSTAGRAM
  const [socialLinks, setSocialLinks] = useState({
    spotify: "",
    soundcloud: "",
    instagram: "",
  });

  // NAME
  const [name, setName] = useState("");

  // GENRES
  const [genres, setGenres] = useState(starterArrayGenres.fill(false));

  // PROFESSIONS
  const [professions, setProfessions] = useState(
    starterArrayProfessions.fill(false)
  );

  // SONGS
  const [songs, setSongs] = useState([]);

  // ACCOMPLISHMENTS
  const [accomplishments, setAccomplishments] = useState([
    { title: "", description: "", date: "" },
  ]);

  // SWITCH COMPONENT

  const renderStep = (stepAlongPath) => {
    switch (stepAlongPath) {
      case 0:
        return (
          <RegAddSingleLine
            enableNextButton={setNextButtonEnable}
            text={name}
            setText={setName}
            title="Name"
            placeholder={"your artist name"}
          />
        );
      case 1:
        return (
          <RegAddSocialLink
            enableNextButton={setNextButtonEnable}
            links={socialLinks}
            setLinks={setSocialLinks}
          />
        );
      case 2:
        return (
          <RegAddSelectedOptions
            title="Genres"
            enableNextButton={setNextButtonEnable}
            selectedOptions={genres}
            setSelectedOptions={setGenres}
            constantCategories={GENRES}
          />
        );
      case 3:
        return (
          <RegAddSelectedOptions
            title="Professions"
            enableNextButton={setNextButtonEnable}
            selectedOptions={professions}
            setSelectedOptions={setProfessions}
            constantCategories={PROFESSIONS}
          />
        );
      case 4:
        return (
          <RegAddProfilePicture
            enableNextButton={setNextButtonEnable}
            setPicture={setImageData}
            picture={imageData}
          />
        );
      // case 5:
      //   return (
      //     <RegAddMilestone
      //       enableNextButton={setNextButtonEnable}
      //       setAccomplishments={setAccomplishments}
      //       accomplishments={accomplishments}
      //     />
      //   );
      case 5:
        return (
          <RegAddSongs
            songs={songs}
            setSongs={setSongs}
            enableNextButton={setNextButtonEnable}
          />
        );
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        border: "2px solid black",
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
          {step < 5 ? (
            <TextButton
              text="Next"
              disabled={!nextButtonEnable}
              onClick={() => setStep(step + 1)}
            />
          ) : (
            <TextButton
              text="Finish Profile"
              disabled={!nextButtonEnable}
              onClick={() => setStep(step + 1)}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default RegisterInitialProfile;
