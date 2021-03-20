import Header from "../Navigation/Header";
import Player from "../Player";
import GeneralFeedback from "../Small/GeneralFeedback";
import { useState } from "react";
import TextButton from "../Useful/TextButton";
const OtherArtistsSong = () => {
  const [generalFeedback, setGeneralFeedback] = useState(
    "your feedback... (constructive criticism is encouraged but please be supportive, refer to musician’s guiding questions)"
  );
  return (
    <div>
      <Header />
      <div style={{ marginLeft: "50px" }}>
        <div style={{ marginBottom: 20, width: "90%" }}>
          <Player />
        </div>
        <div style={{ marginBottom: 20, width: "90%" }}>
          <GeneralFeedback
            currentValue={generalFeedback}
            setCurrentValue={setGeneralFeedback}
          />
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "horizontal",
          justifyContent: "flex-end",
          width: "90%",
        }}
      >
        <div style={{ marginRight: 8 }}>
          <TextButton text={"Save"} />
        </div>
        <div>
          <TextButton text={"Save & Submit"} />
        </div>
      </div>
    </div>
  );
};

export default OtherArtistsSong;
