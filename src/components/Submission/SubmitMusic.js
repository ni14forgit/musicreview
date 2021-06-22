import { background_purple, light_purple, white } from "../../constants";
import InvertedTextButton from "../Useful/InvertedTextButton";
import Text from "../Useful/Text";
import { useState, useEffect } from "react";
import FileUploader from "../../metafunctions/FileUploader";
import FakeBarUI from "../Small/FakeBarUI";
import ToggleSelectOption from "../Useful/ToggleSelectOption";
import { IoMdClose } from "react-icons/io";
import { DummySongToSend } from "../classes/Classes";

const SubmitMusic = ({
  song,
  setSong,
  enableNextButton,
  selectedOptions,
  setSelectedOptions,
  constantCategories,
}) => {
  const [fileInRange, setFileInRange] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const isNothingSelected = (options) => {
    for (var i = 0; i < options.length; i++) {
      if (options[i]) {
        return false;
      }
    }
    return true;
  };

  useEffect(() => {
    if (song && !isNothingSelected(selectedOptions)) {
      enableNextButton(true);
    } else {
      enableNextButton(false);
    }
  }, [song, selectedOptions]);

  const deleteSong = () => {
    setSong(null);
  };

  const addImageHandleFileInput = (e, ind) => {
    if (e.target.files[0]) {
      if (
        e.target.files[0].type.includes("wav") ||
        e.target.files[0].type.includes("mp3") ||
        e.target.files[0].type.includes("ogg")
      ) {
        console.log(e.target.files[0]);
        setError(false);
        console.log(ind);
        // const reader = new FileReader();
        // reader.addEventListener("load", () => {
        //   setSong(new DummySongToSend(e.target.files[0]));

        //   setLoading(false);
        //   enableNextButton(true);
        //   setFileInRange(false);
        // });
        // reader.readAsDataURL(e.target.files[0]);
        // setLoading(true);
        setSong(new DummySongToSend(e.target.files[0]));
        setFileInRange(false);
      } else {
        console.log("error triggeered");
        setError(true);
      }
    }
    return false;
  };

  const dragAddImageHandleFileInput = (e) => {
    console.log("drag music triggered");
    let files = [...e.dataTransfer.files];
    if (files && files.length > 0) {
      if (files[0].type.includes("wav") || files[0].type.includes("mp3")) {
        setError(false);
        // const reader = new FileReader();
        // reader.addEventListener("load", () => {
        //   setSong({ song: reader.result, name: files[0].name });
        //   setLoading(false);
        //   enableNextButton(true);
        //   setFileInRange(false);
        // });
        // reader.readAsDataURL(files[0]);
        // // setPopUpOpen(false);
        // setLoading(true);

        setSong(new DummySongToSend(files[0]));
        setFileInRange(false);
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
    setFileInRange(true);
  };
  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setFileInRange(false);
  };
  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setFileInRange(true);
  };
  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();

    dragAddImageHandleFileInput(e);
  };

  const toggleOption = (ind) => {
    const copyOfSelectedOptions = [...selectedOptions];
    copyOfSelectedOptions[ind] = !copyOfSelectedOptions[ind];
    setSelectedOptions(copyOfSelectedOptions);
    if (isNothingSelected(selectedOptions)) {
      enableNextButton(false);
    } else {
      enableNextButton(true);
    }
  };

  return (
    <div
      style={{
        backgroundColor: fileInRange ? light_purple : background_purple,
        width: 600,
        height: 260 + (song ? 75 : 0),
        borderRadius: 10,
      }}
    >
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

      <div
        className={"drag-drop-zone"}
        onDrop={(e) => handleDrop(e)}
        onDragOver={(e) => handleDragOver(e)}
        onDragEnter={(e) => handleDragEnter(e)}
        onDragLeave={(e) => handleDragLeave(e)}
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          //   border: "2px solid black",
        }}
      >
        {song ? (
          <div>
            {!loading ? (
              <div>
                <div>
                  <div style={{ marginBottom: 25, marginTop: -40 }}>
                    <div
                      style={{
                        marginBottom: 5,
                        display: "flex",
                        flexDirection: "horizontal",
                        justifyContent: "space-between",
                        width: 270,
                        // border: "2px solid black",
                      }}
                    >
                      <div style={{ width: "80%" }}>
                        <Text text={song.title} size={12} color="white" />
                      </div>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "horizontal",
                          justifyContent: "flex-end",
                        }}
                      >
                        <IoMdClose
                          size={19}
                          color={white}
                          onClick={deleteSong}
                        />
                      </div>
                    </div>
                    <div>
                      <FakeBarUI length={30} scale={0.75} />
                    </div>
                  </div>
                </div>
                <div style={{ marginBottom: 15 }}>
                  <Text
                    text="What genre(s) best capture your music (you can select multiple)? "
                    size={12}
                    color="white"
                    bold="bold"
                  />
                </div>
                <div style={{ display: "flex", flexDirection: "horizontal" }}>
                  {constantCategories.map((val, ind) => {
                    return (
                      <div style={{ marginRight: 8 }}>
                        <ToggleSelectOption
                          text={val}
                          selected={selectedOptions[ind]}
                          onClick={() => toggleOption(ind)}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            ) : (
              <Text color={white} text="loading..." fontsize={14} bold="bold" />
            )}
          </div>
        ) : (
          <div style={{ marginTop: -80 }}>
            <Text
              color={white}
              text="drag/upload a song or clip that you're proud of!"
              fontsize={18}
              bold="bold"
            />
          </div>
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
    </div>
  );
};

export default SubmitMusic;
