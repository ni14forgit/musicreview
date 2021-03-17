// import { purple, white } from "../../constants";
const Text = ({ text, color, fontsize, bold = "normal" }) => {
  return (
    <p style={{ fontSize: fontsize, color: color, fontWeight: bold }}>{text}</p>
  );
};

export default Text;
