import { background_purple, white } from "../../constants";
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
import { FaCommentAlt } from "react-icons/fa";
import ModifiableTextBox from "../Useful/ModifiableTextBox";

const AddQuestions = ({
  listOfComments,
  setListOfComments,
  selectedOptions,
  setSelectedOptions,
  constantCategories,
  enableNextButton,
}) => {
  const [currentCommentValue, setCurrentCommentValue] = useState("");
  useEffect(() => {
    if (listOfComments.length == 0) {
      enableNextButton(false);
      return;
    }
    for (var i = 0; i < selectedOptions.length; i++) {
      if (selectedOptions[i]) {
        enableNextButton(true);
        return;
      }
    }
    enableNextButton(false);
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
    if (!currentCommentValue) {
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
    <div
      style={{
        backgroundColor: background_purple,
        height: 400,
        borderRadius: 5,
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "horizontal",
      }}
    >
      <div style={{ marginLeft: 10, marginTop: 10, minWidth: "60%" }}>
        <Text
          text="add questions about your music you want answered"
          bold="bold"
          color="white"
          fontsize={15}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "horizontal",
            alignItems: "center",
            marginTop: 15,
          }}
        >
          <div style={{ width: "90%" }}>
            <ModifiableTextBox
              currentValue={currentCommentValue}
              setCurrentValue={setCurrentCommentValue}
              placeholder="lyrics, production quality, base melody, vibe - feel free to add timestamps (ex: @1:01)"
              expands={true}
              style={{ width: 550, fontWeight: "semi-bold" }}
            />
          </div>
          <div style={{ marginLeft: 30 }}>
            <FaCommentAlt color={white} size={21} onClick={submitComment} />
          </div>
        </div>
        <div style={{ border: "0px solid black" }}>
          <QuestionsCommentsList
            comments={listOfComments}
            deleteComment={deleteComment}
          />
        </div>
      </div>
      <div style={{ marginTop: 10, marginRight: 0, width: "30%" }}>
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
            marginTop: 15,
          }}
        >
          {constantCategories.map((val, ind) => {
            return (
              <div style={{ marginRight: 8, marginBottom: 12 }}>
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
    </div>
  );
};

export default AddQuestions;
