import nish from "./nish.jpg";
import Home from "./components/Pages/Home";
import EditableProfile from "./components/Pages/EditableProfile";
import Feedback from "./components/Pages/Feedback";
import YourSongReviewed from "./components/Pages/YourSongReviewed";
import OtherArtistsSong from "./components/Pages/OtherArtistsSong";
import { useHistory, Route, Switch } from "react-router-dom";
import { useEffect } from "react";
import MusicToReview from "./components/Pages/MusicToReview";
import Submit from "./components/Pages/Submit";
import VisitProfile from "./components/Pages/VisitProfile";
import Authenticate from "./components/Pages/Authenticate";
import RegisterInitialProfile from "./components/Pages/RegisterInitialProfile";

function App() {
  const history = useHistory();
  useEffect(() => {
    // history.replace("/home");
    // history.replace("/visitprofile");
    // history.replace("/authenticate");
    // history.replace("registerinitialprofile");
    // history.push("/profile");
    // history.push("/submit");
    history.push("/songfeedback");
  });

  //   <Route
  //   path="/article/:id"
  //   render={({ match }) => <Article match={match} />}
  // />
  // history.replace("article/" + id);
  return (
    <div>
      <Route
        path="/home"
        render={({ match }) => (
          <Home list_of_artist_ids={[nish, nish, nish, nish]} />
        )}
      />
      <Route path="/profile">
        <EditableProfile nish={nish} />
      </Route>
      <Route path="/visitprofile">
        <VisitProfile />
      </Route>
      <Route path="/feedback">
        <Feedback />
      </Route>
      <Route path="/musictoreview">
        <MusicToReview />
      </Route>
      <Route path="/authenticate">
        <Authenticate />
      </Route>
      <Route path="/registerinitialprofile">
        <RegisterInitialProfile />
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
