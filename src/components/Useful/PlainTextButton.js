import { purple, white } from "../../constants";
const PlainTextButton = ({ text, onClick, bold, color, fontsize }) => {
  return (
    <button
      style={{
        // background: purple,
        backgroundColor: "transparent",
        maxHeight: 50,
        borderRadius: 5,
        alignSelf: "center",
        textAlign: "center",
        paddingRight: "12px",
        paddingLeft: "12px",
        paddingTop: "6px",
        paddingBottom: "6px",
        border: "0px solid black",
        color: color,
        fontWeight: bold,
        outline: 0,
        fontSize: fontsize,
        textDecoration: "underline",
      }}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default PlainTextButton;
