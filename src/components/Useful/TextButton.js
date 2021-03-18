import { purple, white } from "../../constants";
const TextButton = ({ text, onClick, fontWeight }) => {
  return (
    <button
      style={{
        background: purple,
        maxHeight: 50,
        borderRadius: 5,
        alignSelf: "center",
        textAlign: "center",
        paddingRight: "12px",
        paddingLeft: "12px",
        paddingTop: "6px",
        paddingBottom: "6px",
        border: "0px solid black",
        color: white,
        fontWeight: fontWeight,
        outline: 0,
      }}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default TextButton;
