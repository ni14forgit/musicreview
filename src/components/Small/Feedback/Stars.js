import { AiFillStar, AiOutlineStar } from "react-icons/ai";
const Stars = ({ color, feedback_quality }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "horizontal",
        marginLeft: -2,
      }}
    >
      {[1, 2, 3, 4, 5].map((val, ind) => {
        if (feedback_quality >= val) {
          return <AiFillStar size={20} color={color} />;
        } else {
          return <AiOutlineStar size={20} color={color} />;
        }
      })}
    </div>
  );
};

export default Stars;
