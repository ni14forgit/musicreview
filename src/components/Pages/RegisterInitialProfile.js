import { useState, useEffect } from "react";
import RegAddSingleLine from "../RegistrationComponents/RegAddSingleLine";
import RegAddSocialLink from "../RegistrationComponents/RegAddSocialLink";
import RegAddSelectedOptions from "../RegistrationComponents/RegAddSelectedOptions";
import RegAddProfilePicture from "../RegistrationComponents/RegAddProfilePicture";
import RegAddMilestone from "../RegistrationComponents/RegAddMilestone";
import TextButton from "../Useful/TextButton";
import RegAddSongs from "../RegistrationComponents/RegAddSongs";
import { useHistory } from "react-router-dom";
import { register } from "../../api/profiles/register";
import LoadingSpinner from "../Small/LoadingSpinner";
import {
  convertGenresListToDict,
  convertProfessionsListToDict,
  GENRES,
  PROFESSIONS,
  starterArrayGenres,
  starterArrayProfessions,
} from "../../metafunctions/genProfHelper";

const RegisterInitialProfile = () => {
  const history = useHistory();

  const [isAttemptingLogin, setIsAttemptingLogin] = useState(false);

  const registerUser = async () => {
    setIsAttemptingLogin(true);
    register(imageData.imgfile, songs, {
      email: history.location.state.email,
      password: history.location.state.password,
      name: name,
      genres: convertGenresListToDict(genres),
      professions: convertProfessionsListToDict(professions),
      spotify: socialLinks.spotify,
      soundcloud: socialLinks.soundcloud,
      instagram: socialLinks.instagram,
    }).then((resp) => {
      setIsAttemptingLogin(false);
      history.replace("/home");
      // move on to next page?
    });
  };

  const [step, setStep] = useState(0);
  const [nextButtonEnable, setNextButtonEnable] = useState(false);

  // PROFILE PICTURE
  const [imageData, setImageData] = useState({ imgdata: null, imgfile: null });

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
            title="Closest genre(s) to your music"
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
            picture={imageData.imgdata}
          />
        );
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
        // border: "2px solid black",
      }}
    >
      {isAttemptingLogin ? (
        <LoadingSpinner />
      ) : (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 20,
            width: "100vw",
          }}
        >
          {renderStep(step)}
          <div
            style={{
              marginTop: 20,
              display: "flex",
              flexDirection: "horizontal",
              justifyContent: "center",
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
                  text="Register Profile"
                  disabled={!nextButtonEnable}
                  // onClick={() => setStep(step + 1)}
                  onClick={registerUser}
                />
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RegisterInitialProfile;
