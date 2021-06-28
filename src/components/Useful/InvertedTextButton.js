import { purple, white } from "../../constants";
const InvertedTextButton = ({ text, onClick, fontWeight }) => {
  return (
    <button
      style={{
        background: white,
        maxHeight: 50,
        borderRadius: 5,
        alignSelf: "center",
        textAlign: "center",
        paddingRight: "10px",
        paddingLeft: "10px",
        paddingTop: "5px",
        paddingBottom: "5px",
        border: "0px solid black",
        color: purple,
        fontWeight: fontWeight,
        outline: 0,
      }}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default InvertedTextButton;
