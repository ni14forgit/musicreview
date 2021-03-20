import { useRef, useState, useEffect } from "react";
import StaticProfileCommenter from "../Small/StaticProfileCommenter";
import { MdAddAPhoto } from "react-icons/md";
import { background_purple } from "../../constants";
import Text from "../Useful/Text";
import MiniPlayer from "../MiniPlayer";
import TextButton from "../Useful/TextButton";
import Eric from "../../Eric.wav";
import { FiEdit2 } from "react-icons/fi";
import Header from "../Navigation/Header";

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

const FileUploader = ({ handleFileInput, Button, ind }) => {
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
        <Button
          color={background_purple}
          size={20}
          onClick={fileUploadAction}
        />
      </div>
    </div>
  );
};

const Profile = ({ nish }) => {
  const [picture, setPicture] = useState(null);
  const [imageData, setImageData] = useState(nish);
  const [soundcloudProfile, setSoundcloudProfile] = useState(
    "add soundloud profile"
  );
  //   const [songSource, setSongSource] =
  const [songs, setSongs] = useState([Eric, Eric]);
  const [spotifyProfile, setSpotifyProfile] = useState("add spotify profile");
  const deleteSong = (ind) => {
    setSongs(songs.filter((song, index) => index !== ind));
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

  //   useEffect(() => {
  //     console.log(songs);
  //   }, [songs]);

  const changeSongHandleFileInput = (e, ind) => {
    if (e.target.files[0]) {
      if (
        e.target.files[0].type.includes("wav") ||
        e.target.files[0].type.includes("mp4")
      ) {
        console.log(ind);
        const reader = new FileReader();
        reader.addEventListener("load", () => {
          setSongs(
            songs.map(function (item, index) {
              return ind == index ? reader.result : item;
            })
          );
        });
        reader.readAsDataURL(e.target.files[0]);
      }
    }
  };

  return (
    <div>
      <Header />
      <div
        style={{
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          marginTop: 25,
        }}
      >
        <div style={{ marginBottom: 25 }}>
          <StaticProfileCommenter photo={imageData} size={120} />
        </div>
        <div style={{ marginBottom: 25 }}>
          <FileUploader
            handleFileInput={imageHandleFileInput}
            Button={MdAddAPhoto}
          />
        </div>
        <div style={{ marginBottom: 25 }}>
          <InputBox
            setCurrentValue={setSoundcloudProfile}
            currentValue={soundcloudProfile}
          />
        </div>
        <div style={{ marginBottom: 25 }}>
          <InputBox
            setCurrentValue={setSpotifyProfile}
            currentValue={spotifyProfile}
          />
        </div>
        <div style={{ marginBottom: 25 }}>
          <Text
            text={"songs that best represent you!"}
            color={background_purple}
            fontsize={20}
          />
        </div>
        <div style={{ display: "flex", flexDirection: "horizontal" }}>
          {songs.map((val, ind) => {
            return (
              <div key={val} style={{ marginRight: 15 }}>
                <MiniPlayer song={val} />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "horizontal",
                    alignItems: "center",
                    justifyContent: "space-around",
                    marginTop: 10,
                  }}
                >
                  <TextButton text="Delete" onClick={() => deleteSong(ind)} />
                  <FileUploader
                    handleFileInput={changeSongHandleFileInput}
                    Button={FiEdit2}
                    ind={ind}
                  />
                </div>
              </div>
            );
          })}
        </div>
        <div style={{ marginTop: 50 }}>
          <TextButton text="Save" />
        </div>
      </div>
    </div>
  );
};

export default Profile;
