import Popup from "reactjs-popup";
import { background_purple, purple, white } from "../../constants";
import { useRef, useState, useEffect } from "react";
import InvertedTextButton from "../Useful/InvertedTextButton";
import FileUploader from "../../metafunctions/FileUploader";
import { IoMdClose } from "react-icons/io";
import Text from "../Useful/Text";
import { edit_addsong } from "../../api/profiles/edits";

const ProfileAddSong = ({ open, setSongs, setPopUpOpen }) => {
  const [fileInRange, setFileInRange] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setError(false);
    setFileInRange(false);
    setLoading(false);
  }, [open]);

  const addSongHandleFileInput = async (e, ind) => {
    console.log("music triggered");
    if (e.target.files[0]) {
      if (
        e.target.files[0].type.includes("wav") ||
        e.target.files[0].type.includes("mp3")
      ) {
        setError(false);
        console.log(ind);
        const reader = new FileReader();
        reader.addEventListener("load", async () => {
          // setSongs((prevState) => [...prevState, reader.result]);

          // DELETE SONGDATA in waiter call, never used
          const waiter = await edit_addsong({
            songdata: reader.result,
            songfile: e.target.files[0],
          });
          setSongs((prevState) => [
            ...prevState,
            {
              id: waiter.id,
              url: reader.result,
              title: e.target.files[0].name,
            },
          ]);
          setLoading(false);
          setPopUpOpen(false);
        });
        reader.readAsDataURL(e.target.files[0]);
        setLoading(true);
      } else {
        setError(true);
      }
    }
    return false;
  };

  const dragAddSongHandleFileInput = async (e) => {
    console.log("drag music triggered");
    let files = [...e.dataTransfer.files];
    if (files && files.length > 0) {
      if (files[0].type.includes("wav") || files[0].type.includes("mp3")) {
        setError(false);
        const reader = new FileReader();
        reader.addEventListener("load", async () => {
          // setSongs((prevState) => [...prevState, reader.result]);
          const waiter = await edit_addsong({
            songdata: reader.result,
            songfile: files[0],
          });
          setSongs((prevState) => [
            ...prevState,
            { id: waiter.id, url: reader.result, title: files[0].name },
          ]);

          setLoading(false);
          setPopUpOpen(false);
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
    dragAddSongHandleFileInput(e);
  };

  return (
    <Popup open={open} closeOnDocumentClick onClose={() => setPopUpOpen(false)}>
      {/* <div className="modal" styl> */}
      <div
        style={{
          backgroundColor: fileInRange ? background_purple : purple,
          width: 600,
          height: 400,
          borderRadius: 10,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "horizontal",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div style={{ marginLeft: 15, marginTop: 5 }}>
            {!loading ? (
              <IoMdClose
                color={white}
                size={23}
                onClick={() => setPopUpOpen(false)}
              />
            ) : null}
          </div>

          <div style={{ marginRight: 15, marginTop: 5 }}>
            <FileUploader
              Button={InvertedTextButton}
              onFileSelect={addSongHandleFileInput}
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
            height: "350px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {!loading ? (
            <div>
              <Text
                color={white}
                text="Drag Files To Upload!"
                fontsize={22}
                bold="bold"
              />
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
      </div>
    </Popup>
  );
};

export default ProfileAddSong;
