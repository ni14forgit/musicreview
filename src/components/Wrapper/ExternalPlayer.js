import Player from "../Player";
import { background_purple } from "../../constants";
const ExternalPlayer = () => {
  return (
    <div
      style={{
        backgroundColor: background_purple,
        opacity: 0.75,
        borderRadius: 5,
        witdh: 500,
        height: 300,
      }}
    >
      <Player />
    </div>
  );
};

export default ExternalPlayer;
