import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { background_purple } from "../../constants";
import Text from "../Useful/Text";
const RateFeedback = ({ score, name }) => {
  return (
    <div>
      <Text
        text={"Rate " + name + "'s feedback"}
        color={background_purple}
        fontsize={13}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "horizontal",
          marginTop: 4,
          marginLeft: -2,
        }}
      >
        {[1, 2, 3, 4, 5].map((val, ind) => {
          if (score >= val) {
            return <AiFillStar size={18} color={background_purple} />;
          } else {
            return <AiOutlineStar size={18} color={background_purple} />;
          }
        })}
      </div>
    </div>
  );
};

export default RateFeedback;
