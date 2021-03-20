import { useRef, useState, useEffect } from "react";
import { background_purple } from "../../constants";

const defaultStyle = {
  backgroundColor: "transparent",
  // minWidth: "600px",
  minHeight: "150px",
  width: "100%",
  outline: 0,
  border: "2px solid " + background_purple,
  color: background_purple,
  fontSize: 13,
  alignItems: "top",
  textAlign: "top",
  paddingTop: 6,
  paddingLeft: 6,
  paddingRight: 6,
  paddingBottom: 6,
  borderRadius: 5,
  resize: "none",
};
const GeneralFeedback = ({ setCurrentValue, currentValue }) => {
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

export default GeneralFeedback;
