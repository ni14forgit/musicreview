import { background_purple } from "../../constants";
import InvertedTextButton from "../Useful/InvertedTextButton";
import Text from "../Useful/Text";
import { useState, useEffect } from "react";
import FileUploader from "../../metafunctions/FileUploader";
import FakeBarUI from "../Small/FakeBarUI";
import ToggleSelectOption from "../Useful/ToggleSelectOption";
import CommentBox from "../Small/CommentBox";
import CommentsList from "../Small/ReviewCommentsList";
import QuestionsCommentsList from "../Small/QuestionsCommentsList";
import TextButton from "../Useful/TextButton";

const AddQuestions = () => {
  const [currentCommentValue, setCurrentCommentValue] = useState("");
  const [listOfComments, setListOfComments] = useState([]);
  const listOfGenres = ["lo-fi", "lo-fi", "lo-fi", "lo-fi"];
  var starterArray = new Array(listOfGenres.length);
  const [canMoveOn, setCanMoveOn] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState(
    starterArray.fill(false)
  );

  useEffect(() => {
    if (!listOfComments) {
      setCanMoveOn(false);
      return;
    }
    for (var i = 0; i < selectedOptions.length; i++) {
      if (selectedOptions[i]) {
        setCanMoveOn(true);
        return;
      }
    }
    setCanMoveOn(false);
  }, [selectedOptions, listOfComments]);

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

  const deleteComment = (ind) => {
    setListOfComments(listOfComments.filter((comment, index) => index !== ind));
  };

  const submitComment = () => {
    if (currentCommentValue == "") {
      return;
    }

    var updatedArray = [
      ...listOfComments,
      {
        comment: currentCommentValue,
        // timestamp: timeOfSong,
        // uitimestamp: convertTime(timeOfSong),
        // photo: nish,
      },
    ];

    setListOfComments(updatedArray);
    setCurrentCommentValue("");
  };

  return (
    <div style={{ width: "80%" }}>
      <div
        style={{
          backgroundColor: background_purple,

          height: 400,
          borderRadius: 5,
          // padding: 1,
          // position: "relative",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",

            // maxWidth: 500,
            // width: 500,
            border: "2px solid black",
          }}
        >
          <div style={{ marginLeft: 10, marginTop: 10 }}>
            <Text
              text="lyrics, production quality, base melody, vibe - feel free to add timestamps (ex: @1:01)"
              bold="bold"
              color="white"
            />
            <div style={{ display: "flex", flexDirection: "horizontal" }}>
              <CommentBox
                currentValue={currentCommentValue}
                setCurrentValue={setCurrentCommentValue}
              />
              <TextButton text="comment" onClick={submitComment} />
            </div>
            <div style={{ border: "0px solid black" }}>
              <QuestionsCommentsList
                comments={listOfComments}
                deleteComment={deleteComment}
              />
            </div>
          </div>
          <div style={{ marginTop: 10, marginRight: 0, width: 300 }}>
            <Text
              text="Who do you want reviewing your music?"
              color="white"
              bold="bold"
            />
            <div
              style={{
                display: "flex",
                flexDirection: "horizontal",
                flexWrap: "wrap",
              }}
            >
              {["Engineer", "Producer", "Lyricist", "Lyricist"].map(
                (val, ind) => {
                  return (
                    <div style={{ marginRight: 8, marginBottom: 12 }}>
                      <ToggleSelectOption
                        text={val}
                        selected={selectedOptions[ind]}
                        onClick={() => toggleAnOption(ind)}
                      />
                    </div>
                  );
                }
              )}
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "100px",
          }}
        >
          <div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "left",
              }}
            ></div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            marginRight: 10,
            marginTop: 10,
          }}
        ></div>
      </div>
      {canMoveOn ? (
        <div
          style={{
            display: "flex",
            // flexDirection: "column",
            marginTop: 10,
            // border: "2px solid black",
            justifyContent: "space-around",
          }}
        >
          <TextButton text="Back" fontWeight="bold" />
          <TextButton text="Next" fontWeight="bold" />
        </div>
      ) : null}
    </div>
  );
};

export default AddQuestions;
