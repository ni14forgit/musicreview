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
// import OtherArtistsSong from "./components/Pages/MusicToReview";
import { useHistory, Route, Switch } from "react-router-dom";
import { useEffect } from "react";
import MusicToReview from "./components/Pages/MusicToReview";
import Submit from "./components/Pages/Submit";

const comments = [
  {
    comment: "yo what's good",
    timestamp: 40,
    uitimestamp: "0:40",
    photo: nish,
  },
];
function App() {
  const history = useHistory();
  useEffect(() => {
    // history.replace("/home");
    history.replace("/submit");
  });
  return (
    <div>
      <Route
        path="/home"
        render={({ match }) => (
          <Home list_of_artist_ids={[nish, nish, nish, nish]} />
        )}
      />
      <Route path="/profile">
        <Profile nish={nish} />
      </Route>
      <Route path="/feedback">
        <Feedback />
      </Route>
      <Route path="/musictoreview">
        <MusicToReview />
      </Route>
      <Switch>
        <Route path="/songtoreview">
          <OtherArtistsSong />
        </Route>
        <Route path="/songfeedback">
          <YourSongReviewed />
        </Route>
      </Switch>
      <Route path="/submit">
        <Submit />
      </Route>
    </div>
  );
}

export default App;
