import {
  background_purple,
  purple,
  white,
  light_purple,
} from "../../constants";
import { useRef, useState, useEffect } from "react";
import InvertedTextButton from "../Useful/InvertedTextButton";
import FileUploader from "../../metafunctions/FileUploader";
import { IoMdClose } from "react-icons/io";
import Text from "../Useful/Text";
import FakeBarUI from "../Small/FakeBarUI";
import PlainTextButton from "../Useful/PlainTextButton";

const RegAddSongs = ({ enableNextButton, setSongs, songs }) => {
  const [fileInRange, setFileInRange] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const deleteSong = (index) => {
    const copyOfSongs = songs.filter((val, ind) => index != ind);
    setSongs(copyOfSongs);
  };

  useEffect(() => {
    if (songs.length > 0) {
      enableNextButton(true);
    } else {
      enableNextButton(false);
    }
  }, [songs]);

  const addImageHandleFileInput = (e, ind) => {
    if (e.target.files[0]) {
      if (
        // e.target.files[0].type.includes("wav") ||
        // e.target.files[0].type.includes("mp3")
        e.target.files[0].type.includes("ogg")
      ) {
        // console.log(e.target.files[0]);
        setError(false);
        // console.log(ind);
        const reader = new FileReader();
        reader.addEventListener("load", () => {
          setSongs((prevSongs) => [
            ...prevSongs,
            { songdata: reader.result, songfile: e.target.files[0] },
          ]);

          setLoading(false);
          enableNextButton(true);
          setFileInRange(false);
        });
        reader.readAsDataURL(e.target.files[0]);
        setLoading(true);
      } else {
        setError(true);
      }
    }
    return false;
  };

  const dragAddImageHandleFileInput = (e) => {
    // console.log("drag music triggered");
    let files = [...e.dataTransfer.files];
    if (files && files.length > 0) {
      // if (files[0].type.includes("wav") || files[0].type.includes("mp3")) {
      if (files[0].type.includes("ogg")) {
        setError(false);
        const reader = new FileReader();
        reader.addEventListener("load", () => {
          setSongs((prevSongs) => [
            ...prevSongs,
            { songdata: reader.result, songfile: files[0] },
          ]);
          setLoading(false);
          enableNextButton(true);
          setFileInRange(false);
        });
        reader.readAsDataURL(files[0]);
        // setPopUpOpen(false);
        setLoading(true);
      } else {
        setError(true);
      }
    }
    return false;
  };

  const handleDragEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();
    e.dataTransfer.dropEffect = "copy";
    if (songs.length < 3) {
      setFileInRange(true);
    }
  };
  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setFileInRange(false);
  };
  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (songs.length < 3) {
      setFileInRange(true);
    }
  };
  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (songs.length < 3) {
      dragAddImageHandleFileInput(e);
    }
  };

  return (
    <div
      style={{
        backgroundColor: fileInRange ? light_purple : background_purple,
        width: 600,
        height: 360 + songs.length * 75,
        borderRadius: 10,
      }}
    >
      {songs.length < 3 ? (
        <div
          style={{
            display: "flex",
            flexDirection: "horizontal",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <div style={{ marginRight: 15, marginTop: 5 }}>
            <FileUploader
              Button={InvertedTextButton}
              onFileSelect={addImageHandleFileInput}
              color={background_purple}
              ind={0}
            />
          </div>
        </div>
      ) : null}

      <div
        className={"drag-drop-zone"}
        onDrop={(e) => handleDrop(e)}
        onDragOver={(e) => handleDragOver(e)}
        onDragEnter={(e) => handleDragEnter(e)}
        onDragLeave={(e) => handleDragLeave(e)}
        style={{
          width: "100%",
          height: "80%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          //   border: "2px solid black",
        }}
      >
        {!loading ? (
          <div>
            {songs.length > 0 ? (
              <div style={{ marginBottom: 40 }}>
                {songs.map((val, ind) => {
                  return (
                    <div style={{ marginBottom: 25 }}>
                      <div
                        style={{
                          marginBottom: 5,
                          display: "flex",
                          flexDirection: "horizontal",

                          justifyContent: "space-between",
                        }}
                      >
                        <div style={{ width: "80%" }}>
                          <Text
                            text={val.songfile.name}
                            size={12}
                            color="white"
                          />
                        </div>
                        <div
                          style={{
                            width: "20%",
                            display: "flex",
                            flexDirection: "horizontal",
                            justifyContent: "flex-end",
                          }}
                        >
                          <IoMdClose
                            size={19}
                            color={white}
                            onClick={() => deleteSong(ind)}
                          />
                        </div>
                      </div>
                      <div>
                        <FakeBarUI length={30} scale={0.75} />
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <Text
                color={white}
                text="drag/upload up to 3 songs or clips you're proud of!"
                fontsize={18}
                bold="bold"
              />
            )}
            {error ? (
              <div
                style={{
                  backgroundColor: "gray",
                  width: 200,
                  height: 50,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 10,
                  marginTop: 20,
                }}
              >
                <Text
                  color={white}
                  text="File must be .wav or mp3"
                  fontsize={14}
                  bold="bold"
                />
              </div>
            ) : null}
          </div>
        ) : (
          <Text color={white} text="loading..." fontsize={14} bold="bold" />
        )}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: 15,
          flexDirection: "column",
          alignItems: "center",
          marginTop: -90,
        }}
      >
        <div style={{ marginBottom: 0 }}>
          <PlainTextButton
            text={"What is an .ogg file?"}
            color={white}
            fontsize={15}
            onClick={() =>
              window.open(
                "https://artists.spotify.com/help/article/audio-file-formats"
              )
            }
          />
        </div>
        <div style={{ marginBottom: 0 }}>
          <PlainTextButton
            text={"Using Convertio to convert to an .ogg file."}
            color={white}
            fontsize={15}
            onClick={() => window.open("https://convertio.co/wav-ogg/")}
          />
        </div>
        <div style={{ marginBottom: 0 }}>
          <PlainTextButton
            text={"Convertio is safe to use (see GDPR section)."}
            color={white}
            fontsize={15}
            onClick={() =>
              window.open(
                "https://convertio.co/privacy/#:~:text=Convertio%20does%20not%20extract%20or,nor%20sharing%20or%20copying%20it.&text=As%20a%20data%20processor%2C%20Convertio,the%20whole%20file%20conversion%20process."
              )
            }
          />
        </div>
      </div>
    </div>
  );
};

export default RegAddSongs;
