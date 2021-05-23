import {
  background_purple,
  light_purple,
  purple,
  white,
} from "../../constants";
import { useRef, useState, useEffect } from "react";
import InvertedTextButton from "../Useful/InvertedTextButton";
import FileUploader from "../../metafunctions/FileUploader";
import { IoMdClose } from "react-icons/io";
import Text from "../Useful/Text";
import StaticProfileCommenter from "../Small/StaticProfileCommenter";
import defaultProfile from "../../default.jpeg";

const RegAddProfilePicture = ({ enableNextButton, setPicture, picture }) => {
  const [fileInRange, setFileInRange] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (picture) {
      enableNextButton(true);
    } else {
      enableNextButton(true);
    }
  }, []);

  const addImageHandleFileInput = (e, ind) => {
    if (e.target.files[0]) {
      if (
        e.target.files[0].type.includes("png") ||
        e.target.files[0].type.includes("jpeg") ||
        e.target.files[0].type.includes("jpg")
      ) {
        setError(false);
        console.log(ind);
        const reader = new FileReader();
        reader.addEventListener("load", () => {
          setPicture({ imgdata: reader.result, imgfile: e.target.files[0] });
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
    console.log("drag music triggered");
    let files = [...e.dataTransfer.files];
    if (files && files.length > 0) {
      if (
        files[0].type.includes("jpeg") ||
        files[0].type.includes("jpg") ||
        files[0].type.includes("png")
      ) {
        setError(false);
        const reader = new FileReader();
        reader.addEventListener("load", () => {
          setPicture({ imgdata: reader.result, imgfile: files[0] });
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
    // e.dataTransfer.dropEffect = "copy";
    setFileInRange(true);
  };
  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    dragAddImageHandleFileInput(e);
  };

  return (
    <div
      style={{
        backgroundColor: fileInRange ? light_purple : background_purple,
        width: 600,
        height: 300,
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
          height: "260px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          //   border: "2px solid black",
        }}
      >
        {!loading ? (
          <div>
            {picture ? (
              <div style={{ marginBottom: 40 }}>
                <StaticProfileCommenter photo={picture} size={150} />
              </div>
            ) : (
              <div
                style={{
                  marginBottom: 40,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <StaticProfileCommenter photo={defaultProfile} size={150} />
                <div style={{ marginTop: 15 }}>
                  <Text
                    color={white}
                    text="drag or upload your profile picture!"
                    fontsize={18}
                    bold="bold"
                  />
                </div>
              </div>
            )}
            {/* {error ? (
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
            ) : null} */}
          </div>
        ) : (
          <Text color={white} text="loading..." fontsize={14} bold="bold" />
        )}
      </div>
    </div>
  );
};

export default RegAddProfilePicture;
