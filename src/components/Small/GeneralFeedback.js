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
        value={currentValue}
        onChange={(e) => {
          setCurrentValue({ altered: true, value: e.target.value });
        }}
      />
    </div>
  );
};

export default GeneralFeedback;
