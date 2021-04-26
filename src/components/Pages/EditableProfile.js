import { useRef, useState, useEffect } from "react";
// import StaticProfileCommenter from "../Small/StaticProfileCommenter";
import { MdAddAPhoto } from "react-icons/md";
import {
  background_purple,
  light_purple,
  purple,
  white,
} from "../../constants";
import Text from "../Useful/Text";
import MiniPlayer from "../MiniPlayer";
import TextButton from "../Useful/TextButton";
import Eric from "../../Eric.wav";
import { FiEdit2 } from "react-icons/fi";
import Header from "../Navigation/Header";
import { AiFillCamera } from "react-icons/ai";
import { FaMinusCircle } from "react-icons/fa";
import musicianpic from "../../musicianpic.jpeg";
import { FiEdit3 } from "react-icons/fi";
import Stars from "../Small/Feedback/Stars";
import { GrSoundcloud, GrSpotify, GrInstagram } from "react-icons/gr";
import { FaPlusCircle } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import ProfileAddSong from "../PopUp/ProfileAddSong";
import ProfileEditMilestone from "../PopUp/ProfileEditMilestone";
import ProfileAddMilestone from "../PopUp/ProfileAddMilestone";
import ProfileEditSocialLink from "../PopUp/ProfileEditSocialLink";
import ProfileEditSingleLine from "../PopUp/ProfileEditSingleLine";
import ProfileAddSelectedOptions from "../PopUp/ProfileAddSelectedOptions";
import StaticProfileCommenter from "../Small/StaticProfileCommenter";
import FacebookFriends from "../Small/Social/FacebookFriends";

const Accomplishment = ({
  title,
  description,
  date,
  bar,
  openPopUp,
  deleteSelf,
}) => {
  return (
    <div style={{ width: "100%", paddingLeft: 12 }}>
      <div
        style={{
          width: "97%",
          borderRadius: 10,
          display: "flex",
          flexDirection: "horizontal",
          justifyContent: "space-between",
          alignItems: "flex-start",
          paddingTop: 12,
          paddingBottom: 12,
          // border: "2px solid black",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ marginBottom: 3 }}>
            <Text text={title} color={white} fontsize={16} bold={"bold"} />
          </div>
          <Text text={description} color={white} fontsize={14} />
        </div>
        <div
          style={{
            display: "flex",
            width: 100,
            flexDirection: "column",
            // border: "2px solid black",
          }}
        >
          <div style={{ marginBottom: 14 }}>
            <Text text={date} color={white} fontsize={14} />
          </div>
          <div style={{ display: "flex", flexDirection: "horizontal" }}>
            <FiEdit3 color={white} size={20} onClick={openPopUp} />
            <AiFillDelete color={"#C70000"} size={22} onClick={deleteSelf} />
          </div>
        </div>
      </div>
      {bar ? (
        <div
          style={{
            width: "90%",
            height: 2,
            backgroundColor: "white",
            marginTop: 3,
            marginBottom: 3,
          }}
        ></div>
      ) : null}
    </div>
  );
};

const ProfilePicEditable = ({
  size,
  photo,
  handleFileInput,
  changeProfilePic,
  setChangeProfilePic,
}) => {
  const [isHover, setIsHover] = useState(false);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "horizontal",
        alignContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: size,
          height: size,
          borderRadius: size / 2,
        }}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        {changeProfilePic || isHover ? (
          <CoolImageFileUploader
            handleFileInput={handleFileInput}
            size={size}
            photo={photo}
            setChangeProfilePic={setChangeProfilePic}
          />
        ) : (
          <img
            style={{
              width: size,
              height: size,
              borderRadius: size / 2,
              overflow: "hidden",
              opacity: 1,
              zIndex: 100,
            }}
            src={photo}
          ></img>
        )}
      </div>
    </div>
  );
};

const ImageFileUploader = ({ handleFileInput, ind }) => {
  const inputReference = useRef(null);

  const fileUploadAction = () => inputReference.current.click();

  return (
    <div style={{ position: "relative" }} className="file-uploader">
      <input
        hidden
        ref={inputReference}
        type="file"
        onChange={(e) => handleFileInput(e, ind)}
      />
      <div style={{ marginTop: 10 }}>
        <FiEdit2 color={background_purple} onClick={fileUploadAction} />
      </div>
    </div>
  );
};

const CoolImageFileUploader = ({
  handleFileInput,
  ind,
  size,
  photo,
  setChangeProfilePic,
}) => {
  const inputReference = useRef(null);

  const fileUploadAction = () => inputReference.current.click();

  const combinedFunc = () => {
    setChangeProfilePic(true);
    fileUploadAction();
  };

  return (
    <div style={{ position: "relative" }} className="file-uploader">
      <input
        hidden
        ref={inputReference}
        type="file"
        onChange={(e) => handleFileInput(e, ind)}
      />
      <div
        style={{
          width: size,
          height: size,
          borderRadius: size / 2,
          backgroundColor: purple,
          zIndex: "100",
          opacity: "0.8",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundSize: `${size}px ${size}px`,
          backgroundImage: `url(${photo})`,
        }}
        onClick={combinedFunc}
      >
        <div>
          <AiFillCamera
            color="white"
            size={40}
            // onClick={() => fileUploadAction()}
          />
        </div>
      </div>
    </div>
  );
};

const GENRES = ["R&B", "R&B", "R&B", "R&B", "R&B"];
const PROFESSIONS = ["Singer", "Songwriter", "Audio Engineer", "Producer"];

const EditableProfile = ({ nish }) => {
  var starterArrayGenres = new Array(GENRES.length);
  var starterArrayProfessions = new Array(PROFESSIONS.length);
  const [picture, setPicture] = useState(null);
  const [imageData, setImageData] = useState(nish);
  const [changeProfilePic, setChangeProfilePic] = useState(false);

  const [socialLinks, setSocialLinks] = useState({
    spotify: "",
    soundcloud: "",
    instagram: "",
  });

  const [name, setName] = useState("Jessica Smith");

  const [socialPopUpOpen, setSocialPopUpOpen] = useState(false);

  const [namePopUpOpen, setNamePopUpOpen] = useState(false);

  const [genres, setGenres] = useState(starterArrayGenres.fill(false));
  const [genrePopUpOpen, setGenrePopUpOpen] = useState(false);

  const [professions, setProfessions] = useState(
    starterArrayProfessions.fill(false)
  );
  const [professionsPopUpOpen, setProfessionsPopUpOpen] = useState(false);

  //   const [songSource, setSongSource] =
  const [songs, setSongs] = useState([Eric, Eric]);
  const [songPopUpOpen, setSongPopUpOpen] = useState(false);
  const [
    accomplishmentEditPopUpOpen,
    setAccomplishmentEditPopUpOpen,
  ] = useState(false);
  const [accomplishmentAddPopUpOpen, setAccomplishmentAddPopUpOpen] = useState(
    false
  );
  const [accomplishments, setAccomplishments] = useState([
    {
      title: "1000+ views on Spotify single",
      description:
        "Released ‘Roses’ last October and marketed it through insta, tiktok. It was previewed by @newsongstoday!",
      date: "1970-01-01",
    },
    {
      title: "1000+ views on Spotify single",
      description:
        "Released ‘Roses’ last October and marketed it through insta, tiktok. It was previewed by @newsongstoday!",
      date: "1970-01-01",
    },
    {
      title: "1000+ views on Spotify single",
      description:
        "Released ‘Roses’ last October and marketed it through insta, tiktok. It was previewed by @newsongstoday!",
      date: "1970-01-01",
    },
  ]);
  const [accomplishmentIndex, setAccomplishmentIndex] = useState(0);

  useEffect(() => {
    setChangeProfilePic(false);
  }, [imageData]);

  const deleteSong = (ind) => {
    setSongs(songs.filter((song, index) => index !== ind));
  };

  const convertGenreToText = (options) => {
    var genrestring = "";

    for (var i = 0; i < GENRES.length; i++) {
      if (options[i]) {
        genrestring += GENRES[i] + ", ";
      }
    }
    genrestring = genrestring.slice(0, -2);

    return genrestring;
  };

  const convertProfessionToText = (options) => {
    var professionstring = "";

    for (var i = 0; i < PROFESSIONS.length; i++) {
      if (options[i]) {
        professionstring += PROFESSIONS[i] + ", ";
      }
    }
    professionstring = professionstring.slice(0, -2);

    return professionstring;
  };

  const imageHandleFileInput = (e) => {
    console.log("trigged image func");
    if (e.target.files[0]) {
      if (
        e.target.files[0].type.includes("png") ||
        e.target.files[0].type.includes("jpg")
      ) {
        console.log("picture: ", e.target.files);
        setPicture(e.target.files[0]);
        const reader = new FileReader();
        reader.addEventListener("load", () => {
          setImageData(reader.result);
        });
        reader.readAsDataURL(e.target.files[0]);
      }
    }
  };

  const openSpecificMilestone = (ind) => {
    setAccomplishmentIndex(ind);
    setAccomplishmentEditPopUpOpen(true);
  };

  const deleteSelf = (ind) => {
    setAccomplishments(accomplishments.filter((item, index) => index != ind));
  };

  return (
    <div>
      <Header />
      <div
        style={{
          display: "flex",
          flexDirection: "horizontal",
          justifyContent: "space-between",
        }}
      >
        <div style={{ width: "60%" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "horizontal",
              // maxWidth: "40%",
              // alignSelf: "center",
              justifyContent: "flex-start",
              alignItems: "flex-end",
              // border: "4px solid green",
              marginLeft: 40,

              // marginRight: 25,
            }}
          >
            {/* LEFT SIDE of HEADER */}
            {/* <div style={{ display: "flex", flexDirection: "column" }}> */}
            <div
              style={{
                display: "flex",
                flexDirection: "horizontal",
                justifyContent: "flex-start",
                width: 500,
                // border: "2px solid black",
                alignItems: "center",
                marginRight: 30,
              }}
            >
              <div style={{ marginRight: 20 }}>
                <ProfilePicEditable
                  photo={imageData}
                  size={150}
                  handleFileInput={imageHandleFileInput}
                  changeProfilePic={changeProfilePic}
                  setChangeProfilePic={setChangeProfilePic}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  // border: "4px solid black",
                }}
              >
                <div
                  style={{
                    marginTop: 5,
                    display: "flex",
                    flexDirection: "horizontal",
                  }}
                >
                  <Text
                    text={name}
                    fontsize={20}
                    color={background_purple}
                    bold={"bold"}
                  />
                  <div style={{ marginLeft: 10 }}>
                    <FiEdit3
                      color={background_purple}
                      size={20}
                      onClick={() => setNamePopUpOpen(true)}
                    />
                  </div>
                  <ProfileEditSingleLine
                    title="Name"
                    open={namePopUpOpen}
                    setPopUpOpen={setNamePopUpOpen}
                    setText={setName}
                    text={name}
                  />
                </div>
                <div
                  style={{
                    marginTop: 5,
                    display: "flex",
                    flexDirection: "horizontal",
                  }}
                >
                  <Text
                    text={convertProfessionToText(professions)}
                    fontsize={17}
                    color={light_purple}
                    bold={"bold"}
                  />
                  <div style={{ marginLeft: 10 }}>
                    <FiEdit3
                      color={background_purple}
                      size={20}
                      onClick={() => setProfessionsPopUpOpen(true)}
                    />
                  </div>
                  <ProfileAddSelectedOptions
                    open={professionsPopUpOpen}
                    setPopUpOpen={setProfessionsPopUpOpen}
                    selectedOptions={professions}
                    setSelectedOptions={setProfessions}
                    title={"Strengths"}
                    constantCategories={PROFESSIONS}
                  />
                </div>
                <div
                  style={{
                    marginTop: 5,
                    display: "flex",
                    flexDirection: "horizontal",
                  }}
                >
                  <Text
                    text={convertGenreToText(genres)}
                    fontsize={17}
                    color={light_purple}
                    bold={"bold"}
                  />
                  <div style={{ marginLeft: 10 }}>
                    <FiEdit3
                      color={background_purple}
                      size={20}
                      onClick={() => setGenrePopUpOpen(true)}
                    />
                  </div>
                  <ProfileAddSelectedOptions
                    open={genrePopUpOpen}
                    setPopUpOpen={setGenrePopUpOpen}
                    selectedOptions={genres}
                    setSelectedOptions={setGenres}
                    title={"Genres"}
                    constantCategories={GENRES}
                  />
                </div>
              </div>
            </div>

            <div>
              <div
                style={{
                  marginTop: 15,
                  display: "flex",
                  flexDirection: "horizontal",
                  marginBottom: 10,
                }}
              >
                <Text
                  text={"Feedback Rating:"}
                  fontsize={17}
                  color={light_purple}
                  bold={"bold"}
                />
                <div style={{ marginLeft: 5 }}>
                  <Stars feedback_quality={3} color={background_purple} />
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "horizontal",
                  alignItems: "center",
                  // border: "2px solid black",
                }}
              >
                <div style={{ marginRight: 7 }}>
                  <GrSoundcloud
                    onClick={() =>
                      window.open("https://soundcloud.com/discover")
                    }
                    size={48}
                    color={"#ff7700"}
                  />
                </div>
                <div style={{ marginRight: 7 }}>
                  <GrSpotify size={35} color={"#1DB954"} />
                </div>
                <div style={{ marginRight: 7 }}>
                  <GrInstagram size={34} color={"#E1306C"} />
                </div>
                <div style={{ marginLeft: 10 }}>
                  <FiEdit3
                    color={background_purple}
                    size={23}
                    onClick={() => setSocialPopUpOpen(true)}
                  />
                </div>

                <ProfileEditSocialLink
                  open={socialPopUpOpen}
                  setPopUpOpen={setSocialPopUpOpen}
                  links={socialLinks}
                  setLinks={setSocialLinks}
                />
              </div>
            </div>
          </div>
          {/* MILESTONES */}

          <div style={{ marginLeft: 40, marginTop: 40, width: "90%" }}>
            <Text
              text={"Milestones"}
              fontsize={20}
              color={background_purple}
              bold={"bold"}
            />
            {/* Milestones Container */}
            <div
              style={{
                backgroundColor: background_purple,
                borderRadius: 5,
                marginTop: 20,
              }}
            >
              {accomplishments.map((val, ind) => {
                return (
                  <div>
                    <Accomplishment
                      title={val.title}
                      description={val.description}
                      date={val.date}
                      bar={ind < accomplishments.length - 1}
                      openPopUp={() => openSpecificMilestone(ind)}
                      deleteSelf={() => deleteSelf(ind)}
                    />
                  </div>
                );
              })}
              <ProfileEditMilestone
                open={accomplishmentEditPopUpOpen}
                setAccomplishments={setAccomplishments}
                index={accomplishmentIndex}
                accomplishments={accomplishments}
                setPopUpOpen={setAccomplishmentEditPopUpOpen}
              />
            </div>
            <div
              style={{
                marginTop: 15,
                display: "flex",
                flexDirection: "horizontal",
                justifyContent: "flex-end",
                width: "80%",
              }}
            >
              {accomplishments.length < 5 ? (
                <FaPlusCircle
                  color={light_purple}
                  size={30}
                  onClick={() => setAccomplishmentAddPopUpOpen(true)}
                />
              ) : null}
            </div>
            <ProfileAddMilestone
              open={accomplishmentAddPopUpOpen}
              setAccomplishments={setAccomplishments}
              setPopUpOpen={setAccomplishmentAddPopUpOpen}
            />
            <div>
              <div style={{ marginTop: 30 }}>
                <Text
                  text={"Music I'm Proud Of!"}
                  fontsize={20}
                  color={background_purple}
                  bold={"bold"}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "horizontal",
                  marginTop: 15,
                  alignItems: "center",
                }}
              >
                {songs.map((val, ind) => {
                  return (
                    <div
                      key={val}
                      style={{ marginRight: 15, alignItems: "left" }}
                    >
                      <MiniPlayer song={val} />
                      <div style={{ marginLeft: 10, marginTop: 10 }}>
                        <FaMinusCircle
                          color={light_purple}
                          size={19}
                          onClick={() => deleteSong(ind)}
                        />
                      </div>
                    </div>
                  );
                })}
                {songs.length < 3 ? (
                  <div style={{ marginLeft: 20, marginBottom: 30 }}>
                    <FaPlusCircle
                      color={light_purple}
                      size={50}
                      onClick={() => setSongPopUpOpen(true)}
                    />
                    <ProfileAddSong
                      open={songPopUpOpen}
                      setSongs={setSongs}
                      setPopUpOpen={setSongPopUpOpen}
                    />
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>
        {/* FRIENDS */}
        <div
          style={{
            width: "27%",
            display: "flex",
            flexDirection: "column",
            // alignItems: "flex-start",
            // alignItems: "center",
            // border: "2px solid black",
            marginRight: 60,
            marginTop: 180,
          }}
        >
          <div style={{ marginBottom: 20 }}>
            <div
              style={{
                display: "flex",
                flexDirection: "horizontal",
                justifyContent: "space-between",
                alignItems: "center",
                width: "90%",
                // border: "2px solid black",
              }}
            >
              <Text
                text={"Friends"}
                fontsize={20}
                color={background_purple}
                bold={"bold"}
              />
              <div>
                <Text
                  text={"See all friends"}
                  fontsize={15}
                  color={"#2E8FEA"}
                  bold={"bold"}
                />
              </div>
            </div>
          </div>
          <FacebookFriends
            people={[nish, nish, nish, nish, nish, nish, nish, nish]}
          />
        </div>
      </div>
    </div>
  );
};

export default EditableProfile;
