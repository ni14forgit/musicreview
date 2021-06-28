import Popup from "reactjs-popup";
import { background_purple, purple, white } from "../../constants";
import { useRef, useState, useEffect } from "react";
import InvertedTextButton from "../Useful/InvertedTextButton";
import { IoMdClose } from "react-icons/io";
import Text from "../Useful/Text";
import CommentBox from "../Small/CommentBox";
// import DatePicker from "react-datepicker";
import "react-day-picker/lib/style.css";
import DayPicker from "react-day-picker";
const ProfileAddMilestone = ({
  open,
  setPopUpOpen,
  setAccomplishments,
  addToDatabase,
}) => {
  const [title, setTitle] = useState("Milestone Title");
  const [description, setDescription] = useState("Description Title");
  const [date, setDate] = useState(null);

  const closeAndRestore = () => {
    // const accomplishmentsCopy = [...accomplishments];
    // accomplishmentsCopy[index] = staleAccomplishment;
    // setAccomplishments(accomplishmentsCopy);
    setPopUpOpen(false);
  };

  const closeAndSave = async () => {
    const waiter = await addToDatabase({
      date: date,
      description: description,
      title: title,
    });
    // console.log(waiter.id);
    setAccomplishments((prevList) => [
      { id: waiter.id, date: date, description: description, title: title },
      ...prevList,
    ]);
    setPopUpOpen(false);
  };

  //   const setDescriptionValue = (val) => {
  //     const accomplishmentsCopy = [...accomplishments];
  //     accomplishmentsCopy[index].description = val;
  //     setAccomplishments(accomplishmentsCopy);
  //   };

  //   const setTitleValue = (val) => {
  //     const accomplishmentsCopy = [...accomplishments];
  //     accomplishmentsCopy[index].title = val;
  //     setAccomplishments(accomplishmentsCopy);
  //   };

  const setDateValue = (val) => {
    setDate(val.toLocaleDateString());
  };

  const modifiers = {
    thursdays: { daysOfWeek: [0, 1, 2, 3, 4, 5, 6] },
    birthday: new Date(date),
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
    <Popup
      open={open}
      onClose={() => {
        setPopUpOpen(false);
      }}
    >
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
            flexDirection: "horizontal",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <div style={{ marginLeft: 15, marginTop: 10 }}>
            <IoMdClose color={white} size={23} onClick={closeAndRestore} />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: 450,
            width: 600,
            marginLeft: 10,
          }}
        >
          <div style={{ width: 500 }}>
            <div style={{ marginBottom: 8 }}>
              <Text
                text="Milestone Title"
                color={white}
                size={18}
                bold="bold"
              />
            </div>
            <CommentBox currentValue={title} setCurrentValue={setTitle} />
          </div>

          <div style={{ width: 500 }}>
            <div style={{ marginBottom: 8 }}>
              <Text
                text="Milestone Title"
                color={white}
                size={18}
                bold="bold"
              />
            </div>
            <CommentBox
              currentValue={description}
              setCurrentValue={setDescription}
            />
          </div>
          <DayPicker
            onDayClick={setDateValue}
            modifiers={modifiers}
            modifiersStyles={modifiersStyles}
          />
        </div>
        {date &&
        description != "Milestone Description" &&
        title != "Milestone Title" ? (
          <div
            style={{
              display: "flex",
              flexDirection: "horizontal",
              justifyContent: "flex-end",
            }}
          >
            <div style={{ marginRight: 15 }}>
              <InvertedTextButton text="Save" onClick={closeAndSave} />
            </div>
          </div>
        ) : null}
      </div>
    </Popup>
  );
};

export default ProfileAddMilestone;
