import Text from "../../Useful/Text";
import { background_purple, white } from "../../../constants";
import nish from "../../../nish.jpg";
import StaticProfileCommenter from "../../Small/StaticProfileCommenter";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { useHistory } from "react-router-dom";

const first = 40;
const second = 200;
const third = 400;
const fourth = 600;
const fifth = 900;
const sixth = 1100;

const BarToWebpage = ({
  date,
  song_title,
  isDoneStatus,
  feedback_quality,
  submitter,
  review_id,
}) => {
  const textColor = isDoneStatus ? white : background_purple;
  const history = useHistory();
  return (
    <div
      onClick={() =>
        history.push("/songtoreview" + "/" + submitter.id + "/" + review_id)
      }
      style={{
        width: "90%",
        height: 40,
        borderRadius: 5,
        backgroundColor: isDoneStatus ? background_purple : "transparent",
        border: "2px solid " + background_purple,
        display: "flex",
        alignItems: "center",
        flexDirection: "horizontal",
        // justifyContent: "space-around",
      }}
    >
      <div style={{ position: "absolute", left: first }}>
        <Text color={textColor} text={song_title} fontsize={15} bold="bold" />
      </div>

      <div style={{ position: "absolute", left: second }}>
        <StaticProfileCommenter photo={submitter.photo} size={30} />
      </div>
      <div style={{ position: "absolute", left: third }}>
        <Text
          color={textColor}
          text={isDoneStatus ? "COMPLETE" : "TO DO"}
          fontsize={15}
          bold="bold"
        />
      </div>

      <div style={{ position: "absolute", left: fifth }}>
        <Text color={textColor} text={date} fontsize={15} bold="bold" />
      </div>
      <div style={{ position: "absolute", left: sixth }}>
        <div
          style={{
            display: "flex",
            flexDirection: "horizontal",
            marginLeft: -2,
          }}
        >
          {[1, 2, 3, 4, 5].map((val, ind) => {
            if (feedback_quality >= val) {
              return <AiFillStar size={18} color={background_purple} />;
            } else {
              return <AiOutlineStar size={18} color={background_purple} />;
            }
          })}
        </div>
        {/* <Text
          color={textColor}
          text={"no score assigned"}
          fontsize={15}
          bold="bold"
        /> */}
      </div>
    </div>
  );
};

export default BarToWebpage;
