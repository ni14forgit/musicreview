import { useRef, useState, useEffect } from "react";

const defaultStyle = {
  backgroundColor: "transparent",
  width: "100%",
  height: "100%",
  outline: 0,
  border: "2px solid white",
  color: "white",
  fontSize: 13,
  alignItems: "top",
  textAlign: "top",
  paddingTop: 2,
  paddingLeft: 2,
  paddingRight: 2,
  paddingBottom: 2,
  borderRadius: 5,
  resize: "none",
};
const CommentBox = ({ setCurrentValue, currentValue }) => {
  const textareaRef = useRef(null);
  //   const [currentValue, setCurrentValue] = useState("");
  useEffect(() => {
    textareaRef.current.style.height = "0px";
    const scrollHeight = textareaRef.current.scrollHeight;
    textareaRef.current.style.height = scrollHeight + "px";
  }, [currentValue]);
  return (
    <div
      style={{
        width: "100%",
        // height: "30px",
      }}
    >
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

export default CommentBox;
