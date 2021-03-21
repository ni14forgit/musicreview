import { background_purple } from "../../constants";
import InvertedTextButton from "../Useful/InvertedTextButton";
import Text from "../Useful/Text";
import { useState, useEffect } from "react";
import FileUploader from "../../metafunctions/FileUploader";
import FakeBarUI from "../Small/FakeBarUI";
import ToggleSelectOption from "../Useful/ToggleSelectOption";

const listOfGenres = [
  "lo-fi",
  "lo-fi",
  "lo-fi",
  "lo-fi",
  "lo-fi",
  "lo-fi",
  "lo-fi",
  "lo-fi",
  "lo-fi",
  "lo-fi",
  "lo-fi",
  "lo-fi",
  "lo-fi",
];

const SubmitMusic = () => {
  var starterArray = new Array(listOfGenres.length);
  const chooseSong = () => {};
  const [file, setFile] = useState(null);
  const [selectedOptions, setSelectedOptions] = useState(
    starterArray.fill(false)
  );
  //   const [designSongHeight, setDesignSongHeight] = useState([]);

  useEffect(() => {
    console.log(file);
  }, [file]);

  const toggleAnOption = (ind) => {
    var copyOfOptions = [...selectedOptions];

    for (var i = 0; i < selectedOptions.length; i++) {
      if (ind == i) {
        copyOfOptions[i] = !copyOfOptions[i];
        break;
      }
    }

    setSelectedOptions(copyOfOptions);
  };

  useEffect(() => {
    console.log(selectedOptions);
  }, []);

  return (
    <div
      style={{
        backgroundColor: background_purple,
        width: "80%",
        // height: 400,
        borderRadius: 5,
        padding: 10,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          marginRight: 10,
          marginTop: 10,
          // border: "2px solid black",
        }}
      >
        {/* <InvertedTextButton text="upload" onClick={chooseSong} /> */}
        <FileUploader onFileSelect={(file) => setFile(file)} />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          flexDirection: "column",
          alignItems: "center",
          height: 300,
          // border: "2px solid black",
        }}
      >
        {file ? (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "left",
              // border: "2px solid black",
            }}
          >
            <div style={{ marginBottom: 20 }}>
              <Text text={file.name} size={12} color="white" />
            </div>
            <div>
              <FakeBarUI length={40} />
            </div>
          </div>
        ) : (
          <Text
            fontsize={30}
            color="white"
            bold="medium"
            text={"Drag & Drop Your Music!"}
          />
        )}
        {file ? (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "left",
            }}
          >
            <div style={{ marginBottom: 15 }}>
              <Text
                text="What genre(s) best capture your music (you can select multiple)? "
                size={12}
                color="white"
                bold="bold"
              />
            </div>
            <div style={{ display: "flex", flexDirection: "horizontal" }}>
              {listOfGenres.map((val, ind) => {
                return (
                  <div style={{ marginRight: 8 }}>
                    <ToggleSelectOption
                      text={val}
                      selected={selectedOptions[ind]}
                      onClick={() => toggleAnOption(ind)}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        ) : null}
      </div>

      {/* {file} */}
    </div>
  );
};

export default SubmitMusic;
