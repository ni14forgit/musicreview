import Header from "../Navigation/Header";
import OverallReview from "../OverallReview";
import ReviewedSong from "../ReviewedSong";
import nish from "../../nish.jpg";
const comments = [
  {
    comment: "yo what's good",
    timestamp: 40,
    uitimestamp: "0:40",
    photo: nish,
  },
];
const YourSongReviewed = () => {
  return (
    <div>
      <Header />
      <div style={{ marginLeft: "50px" }}>
        <div style={{ marginBottom: 20 }}>
          <ReviewedSong listOfComments={comments} />
        </div>
        <div style={{ marginBottom: 20 }}>
          <OverallReview
            name={"Nishant Iyengar"}
            profession={"Rapper, Lyricist"}
          />
        </div>
      </div>
    </div>
  );
};

export default YourSongReviewed;
