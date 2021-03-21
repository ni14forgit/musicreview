import { IoMdAddCircle } from "react-icons/io";
import { background_purple, white } from "../../constants";
import Text from "../Useful/Text";
const IconTextButton = ({ onClick }) => {
  return (
    <div
      onClick={onClick}
      style={{
        backgroundColor: background_purple,
        borderRadius: 5,
        width: 260,
        height: 60,
        display: "flex",
        flexDirection: "horizontal",
        alignItems: "center",
        justifyContent: "space-around",
        paddingRight: 8,
        paddingLeft: 8,
      }}
    >
      <IoMdAddCircle color={white} size={50} />
      <Text
        text="submit music for feedback"
        color={white}
        fontsize={15}
        bold={"bold"}
      />
    </div>
  );
};

export default IconTextButton;
