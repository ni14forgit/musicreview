// import { purple, white } from "../../constants";
const Text = ({
  text,
  color,
  fontsize,
  bold = "normal",
  onClick,
  textAlign = "left",
}) => {
  return (
    <div
      onClick={onClick}
      style={{
        fontSize: fontsize,
        color: color,
        fontWeight: bold,
        textAlign: textAlign,
      }}
    >
      {text}
    </div>
  );
};

export default Text;
