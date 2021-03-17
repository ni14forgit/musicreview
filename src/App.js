import Player from "./components/Player";
import ExternalPlayer from "./components/Wrapper/ExternalPlayer";
import SubmitMusic from "./components/SubmitMusic";
function App() {
  return (
    <div style={{ marginLeft: 10, marginTop: 10 }}>
      {/* <ExternalPlayer /> */}
      <Player />
      <div style={{ marginTop: 30, marginBottom: 30 }}>
        <SubmitMusic />
      </div>
    </div>
  );
}

export default App;
