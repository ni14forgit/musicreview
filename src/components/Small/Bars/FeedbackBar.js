import Text from "../../Useful/Text";
import { background_purple, white } from "../../../constants";
import nish from "../../../nish.jpg";
import StaticProfileCommenter from "../../Small/StaticProfileCommenter";
import { useHistory } from "react-router-dom";

const BarToWebpage = ({
  reviewers,
  date,
  song_title,
  isDoneStatus,
  submissionId,
}) => {
  const textColor = isDoneStatus ? white : background_purple;
  const history = useHistory();
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "horizontal",
      }}
    >
      <div
        style={{
          minWidth: 120,
          zIndex: 5,
          marginLeft: 20,
          display: "flex",
          alignItems: "center",
          flexDirection: "horizontal",
        }}
      >
        {reviewers.map((val, ind) => {
          return (
            <div style={{ marginRight: -5 }}>
              <StaticProfileCommenter
                photo={val.photo}
                size={30}
                user_id={val.user_id}
              />
            </div>
          );
        })}
      </div>
      <div
        onClick={() => history.push("/songfeedback" + "/" + submissionId)}
        style={{
          width: "60%",
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
        <div style={{ minWidth: 150, marginLeft: 20 }}>
          <Text color={textColor} text={song_title} fontsize={15} bold="bold" />
        </div>
        <div style={{ minWidth: 150 }}>
          <Text
            color={textColor}
            text={isDoneStatus ? "COMPLETE" : "IN PROGRESS"}
            fontsize={15}
            bold="bold"
          />
        </div>
        {/* <div
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
      </div> */}
        <div style={{ minWidth: 200 }}>
          <Text color={textColor} text={date} fontsize={15} bold="bold" />
        </div>
      </div>
    </div>
  );
};

export default BarToWebpage;
