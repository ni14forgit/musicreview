import Text from "../../Useful/Text";
import { background_purple, white } from "../../../constants";
import nish from "../../../nish.jpg";
import StaticProfileCommenter from "../../Small/StaticProfileCommenter";
import { useHistory } from "react-router-dom";

const BarToWebpage = ({ reviewers, date, song_title, isDoneStatus }) => {
  const textColor = isDoneStatus ? white : background_purple;
  const history = useHistory();
  return (
    <div
      onClick={() => history.push("/songfeedback")}
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
      <div style={{ position: "absolute", left: 40 }}>
        <Text color={textColor} text={song_title} fontsize={15} bold="bold" />
      </div>
      <div style={{ position: "absolute", left: 300 }}>
        <Text
          color={textColor}
          text={isDoneStatus ? "COMPLETE" : "IN PROGRESS"}
          fontsize={15}
          bold="bold"
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "horizontal",
          justifyContent: "center",
          position: "absolute",
          left: 900,

          //   maxWidth: 40,
        }}
      >
        {reviewers.map((val, ind) => {
          return (
            <div style={{ marginRight: -10 }}>
              <StaticProfileCommenter photo={val.photo} size={30} />
            </div>
          );
        })}
      </div>
      <div style={{ position: "absolute", left: 1100 }}>
        <Text color={textColor} text={date} fontsize={15} bold="bold" />
      </div>
    </div>
  );
};

export default BarToWebpage;
