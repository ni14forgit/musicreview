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

const RemainingTextTile = ({ remaining, receivedBoolean, onClick }) => {
  const receivedSubtitle = "artists have completed or updated feedback!";
  const givenSubtitle = "artists are waiting on your reviews!";
  return (
    <div
      style={{
        width: 270,
        height: 290,
        padding: "12px 12px 12px 12px",
        border: `4px solid ${background_purple}`,
        borderRadius: 10,
        display: "flex",
        justifyContent: "space-around",
        flexDirection: "column",
        alignItems: "center",
      }}
      onClick={onClick}
    >
      <Text
        color={background_purple}
        text={remaining}
        fontsize={100}
        bold="bold"
      />
      <div>
        <Text
          color={background_purple}
          text={receivedBoolean ? receivedSubtitle : givenSubtitle}
          fontsize={24}
          bold={"bold"}
          textAlign={"center"}
        />
      </div>
    </div>
  );
};
const Home = ({ list_of_artist_ids }) => {
  const history = useHistory();
  return (
    <div>
      <Header />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 40,
        }}
      >
        <IconTextButton onClick={() => history.push("/submit")} />
        <div
          style={{
            // marginLeft: 40,
            marginTop: 80,
            display: "flex",
            flexDirection: "horizontal",
            justifyContent: "center",
          }}
        >
          <div style={{ marginRight: 15 }}>
            <RemainingTextTile
              receivedBoolean={true}
              remaining={"2"}
              onClick={() => history.push("/feedback")}
            />
          </div>
          <div style={{ marginLeft: 15 }}>
            <RemainingTextTile
              receivedBoolean={false}
              remaining={"1"}
              onClick={() => history.push("/musictoreview")}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

{
  /* <div
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
      </div> */
}
{
  /* <div style={{ marginLeft: 20, marginTop: 20 }}>
        <div style={{ marginBottom: 40 }}>
          <Text
            text="received feedback"
            color={background_purple}
            fontsize={22}
            bold={"bold"}
          />
          <div style={{ marginTop: 5 }}>
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
            text="given feedback"
            color={background_purple}
            fontsize={22}
            bold={"bold"}
          />
          <div style={{ marginTop: 5 }}>
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
        </div> */
}
{
  /* <div style={{ marginBottom: 20 }}>
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
        </div> */
}
{
  /* </div> */
}
