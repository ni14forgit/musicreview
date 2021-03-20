import { background_purple } from "../constants";
import Text from "./Useful/Text";
import nish from "../nish.jpg";
import RateFeedback from "./Small/RateFeedback";
import { GrSoundcloud, GrSpotify } from "react-icons/gr";
import MiniPlayer from "./MiniPlayer";
import Eric from "../Eric.wav";

const ProfPic = ({ photo }) => {
  const size = 75;
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "horizontal",
        alignContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: size,
          height: size,
          borderRadius: size / 2,
          opacity: 1,
          zIndex: 100,
          marginRight: 5,
          //   marginTop: calculated_margin,
        }}
      >
        <img
          style={{
            width: size,
            height: size,
            borderRadius: size / 2,
            opacity: 1,
            zIndex: 100,
          }}
          src={photo}
        ></img>
      </div>
    </div>
  );
};

const GeneralFeedback = ({ name, profession }) => {
  return (
    <div
      style={{
        border: "2px solid " + background_purple,
        borderRadius: 5,
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 15,
        paddingBottom: 10,
        width: "800px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "horizontal",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", flexDirection: "horizontal" }}>
          <ProfPic photo={nish} />
          <div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                // alignItems: "center",
                marginTop: 5,
                position: "relative",
                // top: 40,
                marginLeft: 10,
                // alignItems: "center",
                // border: "2px solid black",
              }}
            >
              <Text text={name} color={background_purple} fontsize={16} />
              <Text text={profession} color={background_purple} fontsize={15} />
              <div
                style={{
                  display: "flex",
                  flexDirection: "horizontal",
                  marginTop: 5,
                }}
              >
                <div>
                  <GrSoundcloud
                    onClick={() =>
                      window.open("https://soundcloud.com/discover")
                    }
                    size={35}
                    color={"#ff7700"}
                  />
                </div>
                <div style={{ marginTop: 5, marginLeft: 8 }}>
                  <GrSpotify size={25} color={"#1DB954"} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <RateFeedback name={"Nishant"} score={3} />
      </div>
      <div style={{ marginTop: 20 }}>
        <Text
          text={"My general feedback is.."}
          color={background_purple}
          fontsize={18}
          bold="bold"
        />
        <div style={{ marginTop: 10 }}>
          <Text
            text={"feedback"}
            color={background_purple}
            fontsize={14}
            // bold="bold"
          />
        </div>
      </div>
      <div style={{ marginTop: 20 }}>
        <Text
          text={"Some of my work"}
          color={background_purple}
          fontsize={16}
          bold="bold"
        />
        <div
          style={{
            marginTop: 20,
            display: "flex",
            flexDirection: "horizontal",
          }}
        >
          {[1, 2, 3].map((val, ind) => {
            return (
              <div style={{ marginRight: 8 }}>
                <MiniPlayer song={Eric} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default GeneralFeedback;
