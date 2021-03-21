import { background_purple } from "../../constants";
import Text from "../Useful/Text";
import Header from "../Navigation/Header";
import StaticProfileCommenter from "../Small/StaticProfileCommenter";
import IconTextButton from "../Small/IconTextButton";
import { useHistory } from "react-router-dom";
import FeedbackBar from "../Small/Bars/FeedbackBar";
import ToReviewBar from "../Small/Bars/ToReviewBar";
const Home = ({ list_of_artist_ids }) => {
  const history = useHistory();
  return (
    <div>
      <Header />
      <div style={{ marginLeft: 20 }}>
        <div style={{ marginBottom: 25 }}>
          <IconTextButton onClick={() => history.push("/submit")} />
        </div>
        <div style={{ marginBottom: 40 }}>
          <Text
            text="Recent Feedback"
            color={background_purple}
            fontsize={24}
            bold={"bold"}
          />
          <div style={{ marginTop: 20 }}>
            {[1, 2].map((val, ind) => {
              return (
                <div style={{ marginBottom: 4 }}>
                  <FeedbackBar
                    reviewers={1}
                    date="09/16/1999"
                    song_title="firsttake.mp4"
                    isDoneStatus={ind > 0}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div style={{ marginBottom: 40 }}>
          <Text
            text="Songs to Review"
            color={background_purple}
            fontsize={24}
            bold={"bold"}
          />
          <div style={{ marginTop: 20 }}>
            {[1, 2].map((val, ind) => {
              return (
                <div style={{ marginBottom: 4 }}>
                  <ToReviewBar
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
        <div style={{ marginBottom: 20 }}>
          <Text
            text="Artists you've met!"
            color={background_purple}
            fontsize={24}
            bold={"bold"}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "horizontal",
              marginTop: 13,
            }}
          >
            {list_of_artist_ids.map((val, ind) => {
              return (
                <div style={{ marginRight: 6 }}>
                  <StaticProfileCommenter photo={val} size={28} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
