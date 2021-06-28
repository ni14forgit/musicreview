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
import Test from "./test";
import MainScreen from "./components/Pages/MainScreen";
import { isLoggedIn } from "./api/accounts/session";

function App() {
  const history = useHistory();
  useEffect(() => {
    // history.replace("/home");
    // history.replace("/visitprofile/15");
    // history.replace("/mainscreen");
    // history.replace("/authenticate");
    // history.replace("registerinitialprofile");
    // history.push("/profile");
    // history.push("/submit");
    // history.push("/songfeedback");

    isLoggedIn().then((res) => {
      if (!res.loggedIn) {
        history.replace("/mainscreen");
      }
    });
  }, []);

  //   <Route
  //   path="/article/:id"
  //   render={({ match }) => <Article match={match} />}
  // />
  // history.replace("article/" + id);
  return (
    <div>
      <Switch>
        <Route
          path="/home"
          render={({ match }) => (
            <Home list_of_artist_ids={[nish, nish, nish, nish]} />
          )}
        />
        <Route path="/profile">
          <EditableProfile nish={nish} />
        </Route>
        <Route
          path="/visitprofile/:user_id/"
          render={({ match }) => <VisitProfile match={match} />}
        />
        <Route exact path="/feedback">
          <Feedback />
        </Route>
        <Route exact path="/musictoreview">
          <MusicToReview />
        </Route>
        <Route exact path="/authenticate">
          <Authenticate />
        </Route>
        <Route path="/registerinitialprofile">
          <RegisterInitialProfile />
        </Route>
        <Route
          path="/songtoreview/:submission_id/:review_id"
          render={({ match }) => <OtherArtistsSong match={match} />}
        />
        <Route
          path="/songfeedback/:submission_id"
          render={({ match }) => <YourSongReviewed match={match} />}
        />
        <Route path="/submit">
          <Submit />
        </Route>
        <Route path="/mainscreen">
          <MainScreen />
        </Route>
        <Route path="*">
          <MainScreen />
        </Route>
      </Switch>
    </div>
    // <Test />
  );
}

export default App;
