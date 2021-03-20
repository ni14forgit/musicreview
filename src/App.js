import Player from "./components/Player";
import ExternalPlayer from "./components/Wrapper/ExternalPlayer";
import SubmitMusic from "./components/Submission/SubmitMusic";
import AddQuestions from "./components/Submission/AddQuestions";
import InstructionsUI from "./components/Small/InstructionsUI";
import ReviewedSong from "./components/ReviewedSong";
import nish from "./nish.jpg";
import OverallReview from "./components/OverallReview";
import GeneralFeedback from "./components/Small/GeneralFeedback";
import Home from "./components/Pages/Home";
import Profile from "./components/Pages/Profile";
import Feedback from "./components/Pages/Feedback";
import YourSongReviewed from "./components/Pages/YourSongReviewed";
import OtherArtistsSong from "./components/Pages/OtherArtistsSong";

const comments = [
  {
    comment: "yo what's good",
    timestamp: 40,
    uitimestamp: "0:40",
    photo: nish,
  },
];
function App() {
  return (
    // <div style={{ marginLeft: 10, marginTop: 10 }}>
    //   {/* <ExternalPlayer /> */}
    //   {/* <Player /> */}
    //   <div style={{ marginTop: 30, marginBottom: 30 }}>
    //     {/* <SubmitMusic /> */}
    //     {/* <InstructionsUI title="HIHIH" blurb="HIHIH" bullets={["hi", "lol"]} /> */}
    //     {/* <AddQuestions /> */}
    //     {/* <ReviewedSong listOfComments={comments} /> */}
    //     {/* <OverallReview
    //       name={"Nishant Iyengar"}
    //       profession={"Rapper, Lyricist"}
    //     /> */}
    //     {/* <GeneralFeedback /> */}
    //   </div>
    // </div>
    // <Home list_of_artist_ids={[nish, nish, nish, nish, nish]} />
    // <Profile nish={nish} />
    // <Feedback />
    // <YourSongReviewed />
    <OtherArtistsSong />
  );
}

export default App;
