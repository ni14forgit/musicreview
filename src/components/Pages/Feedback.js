import Header from "../Navigation/Header";
import Text from "../Useful/Text";
import { background_purple, white } from "../../constants";
import nish from "../../nish.jpg";
import StaticProfileCommenter from "../Small/StaticProfileCommenter";

const BarToWebpage = ({ reviewers, date, song_title, isDoneStatus }) => {
  const textColor = isDoneStatus ? white : background_purple;
  return (
    <div
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
        {[nish, nish, nish].map((val, ind) => {
          return (
            <div style={{ marginRight: -10 }}>
              <StaticProfileCommenter photo={val} size={30} />
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

const Feedback = () => {
  return (
    <div>
      <Header />
      <div style={{ marginLeft: 20 }}>
        <Text
          text="Feedback on Your Songs"
          color={background_purple}
          fontsize={24}
          bold={"bold"}
        />
        <div style={{ marginBottom: 10, marginTop: 15 }}>
          <Text
            text="March"
            color={background_purple}
            fontsize={24}
            bold={"bold"}
          />
        </div>
        <div
          style={{
            width: "90%",
            height: 30,
            display: "flex",
            alignItems: "center",
            flexDirection: "horizontal",
            // justifyContent: "space-around",
          }}
        >
          <div style={{ position: "absolute", left: 40 }}>
            <Text
              color={background_purple}
              text={"Submission"}
              fontsize={15}
              bold="bold"
            />
          </div>
          <div style={{ position: "absolute", left: 300 }}>
            <Text
              color={background_purple}
              text={"Status"}
              fontsize={15}
              bold="bold"
            />
          </div>
          <div style={{ position: "absolute", left: 900 }}>
            <Text
              color={background_purple}
              text={"Reviewers"}
              fontsize={15}
              bold="bold"
            />
          </div>
          <div style={{ position: "absolute", left: 1100 }}>
            <Text
              color={background_purple}
              text={"Date"}
              fontsize={15}
              bold="bold"
            />
          </div>
        </div>

        {[1, 2, 3, 4, 5, 6].map((val, ind) => {
          return (
            <div style={{ marginBottom: 4 }}>
              <BarToWebpage
                reviewers={1}
                date="09/16/1999"
                song_title="firsttake.mp4"
                isDoneStatus={ind > 1}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Feedback;
