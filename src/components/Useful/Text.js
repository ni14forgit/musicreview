// import { purple, white } from "../../constants";
const Text = ({ text, color, fontsize, bold = "normal", onClick }) => {
  return (
    <div
      onClick={onClick}
      style={{ fontSize: fontsize, color: color, fontWeight: bold }}
    >
      {text}
    </div>
  );
};

export default Text;
