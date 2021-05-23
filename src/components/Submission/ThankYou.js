import { background_purple } from "../../constants";
import Text from "../Useful/Text";
const ThankYou = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text
        text="Thank you for sending your music! We'll find someone to review it :)"
        color={background_purple}
      />
    </div>
  );
};

export default ThankYou;
