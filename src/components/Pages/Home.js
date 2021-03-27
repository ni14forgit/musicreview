import { background_purple } from "../../constants";
import Text from "../Useful/Text";
import Header from "../Navigation/Header";
import StaticProfileCommenter from "../Small/StaticProfileCommenter";
import IconTextButton from "../Small/IconTextButton";
import { useHistory } from "react-router-dom";
import FeedbackBar from "../Small/Bars/FeedbackBar";
import ToReviewBar from "../Small/Bars/ToReviewBar";
import ReviewHeader from "../Small/Bars/ReviewHeader";
import FeedbackHeader from "../Small/Bars/FeedbackHeader";
import ArtistCard from "../Small/Social/ArtistCard";
import musicianpic from "../../musicianpic.jpeg";
const Home = ({ list_of_artist_ids }) => {
  const history = useHistory();
  return (
    <div>
      <Header />
      <div
        style={{
          marginBottom: 25,
          alignItems: "center",
          display: "flex",
          flexDirection: "horizontal",
          justifyContent: "center",
          // width: "100%",
          // maxWidth: 280,
          // border: "2px solid black",
        }}
      >
        <IconTextButton onClick={() => history.push("/submit")} />
      </div>
      <div style={{ marginLeft: 20 }}>
        <div style={{ marginBottom: 40 }}>
          <Text
            text="Recent Feedback"
            color={background_purple}
            fontsize={24}
            bold={"bold"}
          />
          <div style={{ marginTop: 20 }}>
            <FeedbackHeader />
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
            <ReviewHeader />
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
            text="Artist Friends!"
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
                <div style={{ marginRight: 0 }}>
                  {/* <StaticProfileCommenter photo={val} size={28} /> */}
                  <ArtistCard
                    image={musicianpic}
                    name={"Jessie Smith"}
                    genre={"Future Bass, Lo-fi"}
                    profession={"Producer"}
                  />
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
