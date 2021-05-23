import { useRef, useState, useEffect } from "react";
import "./ModifiableTextBox.css";

const ModifiableTextBox = ({
  setCurrentValue,
  currentValue,
  fontSize,
  placeholder,
  expands,
  style,
}) => {
  const defaultStyle = {
    backgroundColor: "transparent",
    width: 250,
    // height: "100%",
    outline: 0,
    border: "2px solid white",
    color: "white",
    fontSize: fontSize,
    alignItems: "bottom",
    fontWeight: "bold",

    // textAlign: "center",
    paddingTop: 6,
    paddingLeft: 6,
    paddingRight: 2,
    paddingBottom: 6,
    borderRadius: 5,
    resize: "none",
    ...style,
  };

  const textareaRef = useRef(null);
  //   const [currentValue, setCurrentValue] = useState("");
  useEffect(() => {
    if (expands) {
      textareaRef.current.style.height = "0px";
      const scrollHeight = textareaRef.current.scrollHeight;
      textareaRef.current.style.height = scrollHeight + "px";
    }
  }, [currentValue]);
  return (
    <div
      style={{
        width: "100%",
        // height: "30px",
      }}
    >
      <input
        ref={textareaRef}
        class="wideInput"
        style={defaultStyle}
        type="text"
        rows="3"
        placeholder={placeholder}
        className="Authenticate"
        // value="hi dfjh df dfhj dfjh dfjhd fj djhfdj dfjhd fj dfhdf dfjdh fdjfhdf jdhf"
        // onChange={(event) => console.log("value changed!")}
        value={currentValue}
        onChange={(e) => {
          setCurrentValue(e.target.value);
        }}
      />
    </div>
  );
};

export default ModifiableTextBox;
