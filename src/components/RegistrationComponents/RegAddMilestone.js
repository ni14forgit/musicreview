import Popup from "reactjs-popup";
import { background_purple, purple, white } from "../../constants";
import Text from "../Useful/Text";
import CommentBox from "../Small/CommentBox";
import { useEffect } from "react";
import "react-day-picker/lib/style.css";
import DayPicker from "react-day-picker";
import ModifiableTextBox from "../Useful/ModifiableTextBox";
const RegAddMilestone = ({
  enableNextButton,
  accomplishments,
  setAccomplishments,
}) => {
  useEffect(() => {
    if (
      accomplishments[0].title &&
      accomplishments[0].description &&
      accomplishments[0].date
    ) {
      enableNextButton(true);
    } else {
      enableNextButton(false);
    }
  }, []);

  const checkAndEnableDisableTitle = (val) => {
    if (val && accomplishments[0].description && accomplishments[0].date) {
      enableNextButton(true);
    } else {
      enableNextButton(false);
    }
  };
  const checkAndEnableDisableDescription = (val) => {
    if (accomplishments[0].title && val && accomplishments[0].date) {
      enableNextButton(true);
    } else {
      enableNextButton(false);
    }
  };
  const checkAndEnableDisableDate = (val) => {
    if (
      accomplishments[0].title &&
      accomplishments[0].description &&
      val.toLocaleDateString()
    ) {
      enableNextButton(true);
    } else {
      enableNextButton(false);
    }
  };

  const setTitle = (val) => {
    const copyOfAccomplishments = [...accomplishments];
    copyOfAccomplishments[0].title = val;
    setAccomplishments(copyOfAccomplishments);
    checkAndEnableDisableTitle(val);
  };

  const setDescription = (val) => {
    const copyOfAccomplishments = [...accomplishments];
    copyOfAccomplishments[0].description = val;
    setAccomplishments(copyOfAccomplishments);
    checkAndEnableDisableDescription(val);
  };

  const setDateValue = (val) => {
    const copyOfAccomplishments = [...accomplishments];
    copyOfAccomplishments[0].date = val.toLocaleDateString();
    setAccomplishments(copyOfAccomplishments);
    checkAndEnableDisableDate(val);
  };

  const modifiers = {
    thursdays: { daysOfWeek: [0, 1, 2, 3, 4, 5, 6] },
    birthday: new Date(accomplishments[0].date),
  };
  const modifiersStyles = {
    birthday: {
      color: "black",
      backgroundColor: "#ffc107",
    },
    thursdays: {
      color: "white",

      // backgroundColor: "#fffdee",
    },
  };

  return (
    <div
      style={{
        backgroundColor: purple,
        width: 600,
        height: 550,
        borderRadius: 10,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          // height: 450,
          // width: 600,
          marginLeft: 100,
          border: "2px solid black",
        }}
      >
        <div style={{ marginBottom: 15 }}>
          <Text
            color={white}
            fontsize={18}
            text={"Meaningful moment for you in music"}
            bold="bold"
          />
        </div>

        <div style={{ marginBottom: 15 }}>
          <ModifiableTextBox
            currentValue={accomplishments[0].title}
            setCurrentValue={setTitle}
            fontSize={13}
            placeholder="milestone title"
          />
        </div>

        <div style={{ marginBottom: 15, width: 360 }}>
          <CommentBox
            currentValue={accomplishments[0].description}
            setCurrentValue={setDescription}
            maxLength="205"
            placeholder="description"
          />
        </div>
        <DayPicker
          onDayClick={setDateValue}
          modifiers={modifiers}
          modifiersStyles={modifiersStyles}
        />
      </div>
    </div>
  );
};

export default RegAddMilestone;
