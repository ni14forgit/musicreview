import { useRef, useState, useEffect } from "react";
import StaticProfileCommenter from "../Small/StaticProfileCommenter";
import { MdAddAPhoto } from "react-icons/md";
import { background_purple, light_purple, white } from "../../constants";
import Text from "../Useful/Text";
import MiniPlayer from "../MiniPlayer";
import TextButton from "../Useful/TextButton";
import Eric from "../../Eric.wav";
import { FiEdit2 } from "react-icons/fi";
import Header from "../Navigation/Header";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
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
          width: "95%",
          borderRadius: 10,
          display: "flex",
          flexDirection: "horizontal",
          justifyContent: "space-between",
          alignItems: "flex-start",
          paddingTop: 12,
          paddingBottom: 12,
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ marginBottom: 3 }}>
            <Text text={title} color={white} fontsize={16} bold={"bold"} />
          </div>
          <Text text={description} color={white} fontsize={14} />
        </div>
        <div>
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

const defaultStyle = {
  backgroundColor: "transparent",
  width: "500px",
  height: "10px",
  outline: 0,
  border: "2px solid " + background_purple,
  color: background_purple,
  fontSize: 13,
  alignItems: "top",
  textAlign: "top",
  paddingTop: 2,
  paddingLeft: 2,
  paddingRight: 2,
  paddingBottom: 2,
  borderRadius: 5,
  resize: "none",
};
const InputBox = ({ setCurrentValue, currentValue }) => {
  const textareaRef = useRef(null);
  //   const [currentValue, setCurrentValue] = useState("");
  useEffect(() => {
    textareaRef.current.style.height = "0px";
    const scrollHeight = textareaRef.current.scrollHeight;
    textareaRef.current.style.height = scrollHeight + "px";
  }, [currentValue]);
  return (
    <div>
      <textarea
        ref={textareaRef}
        class="wideInput"
        style={defaultStyle}
        type="text"
        // value="hi dfjh df dfhj dfjh dfjhd fj djhfdj dfjhd fj dfhdf dfjdh fdjfhdf jdhf"
        // onChange={(event) => console.log("value changed!")}
        value={currentValue}
        onChange={(e) => {
          setCurrentValue(e.target.value);
          //to do something with value, maybe callback?
        }}
      />
    </div>
  );
};

const ImageFileUploader = ({ handleFileInput, ind }) => {
  const fileInput = useRef(null);
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

const GENRES = ["R&B", "R&B", "R&B", "R&B", "R&B"];

const EditableProfile = ({ nish }) => {
  var starterArrayGenres = new Array(GENRES.length);
  const [picture, setPicture] = useState(null);
  const [imageData, setImageData] = useState(nish);

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

  const imageHandleFileInput = (e) => {
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
          maxWidth: "40%",
          // alignSelf: "center",
          justifyContent: "space-between",
          alignItems: "flex-end",
          // border: "2px solid black",
          marginLeft: 40,

          // marginRight: 25,
        }}
      >
        {/* LEFT SIDE of HEADER */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div>
            <StaticProfileCommenter photo={musicianpic} size={120} />
            <div style={{ marginLeft: 120, marginTop: -25 }}>
              <ImageFileUploader handleFileInput={imageHandleFileInput} />
            </div>
          </div>
          <div
            style={{
              marginTop: 10,
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
              marginTop: 10,
              display: "flex",
              flexDirection: "horizontal",
            }}
          >
            <Text
              text={"Singer, Songwriter"}
              fontsize={17}
              color={light_purple}
              bold={"bold"}
            />
            <div style={{ marginLeft: 10 }}>
              <FiEdit3 color={background_purple} size={20} />
            </div>
          </div>
          <div
            style={{
              marginTop: 10,
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
          <div
            style={{
              marginTop: 15,
              display: "flex",
              flexDirection: "horizontal",
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
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "horizontal",
            alignItems: "center",
            marginBottom: -5,

            // marginRight: 40,
          }}
        >
          <div style={{ marginRight: 7 }}>
            <GrSoundcloud
              onClick={() => window.open("https://soundcloud.com/discover")}
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
      {/* MILESTONES */}

      <div style={{ marginLeft: 40, marginTop: 40 }}>
        <Text
          text={"Milestones"}
          fontsize={20}
          color={background_purple}
          bold={"bold"}
        />
        {/* Milestones Container */}
        <div
          style={{
            width: "80%",
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
                <div key={val} style={{ marginRight: 15, alignItems: "left" }}>
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
  );
};

export default EditableProfile;
