import StaticProfileCommenter from "../Small/StaticProfileCommenter";
import musicianpic from "../../musicianpic.jpeg";
import Text from "../Useful/Text";
import { background_purple, light_purple } from "../../constants";
import { GrSoundcloud, GrSpotify, GrInstagram } from "react-icons/gr";
import Header from "../Navigation/Header";
import Stars from "../Small/Feedback/Stars";

const VisitProfile = () => {
  return (
    <div>
      <Header />
      {/* HEADER */}

      <div
        style={{
          display: "flex",
          flexDirection: "horizontal",
          maxWidth: "40%",
          // alignSelf: "center",
          justifyContent: "space-between",
          alignItems: "flex-end",
          // border: "2px solid black",
          marginLeft: 25,
          // marginRight: 25,
        }}
      >
        {/* LEFT SIDE of HEADER */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div>
            <StaticProfileCommenter photo={musicianpic} size={120} />
          </div>
          <div style={{ marginTop: 10 }}>
            <Text
              text={"Jessica Smith"}
              fontsize={20}
              color={background_purple}
              bold={"bold"}
            />
          </div>
          <div style={{ marginTop: 10 }}>
            <Text
              text={"Singer/Songwriter"}
              fontsize={17}
              color={light_purple}
              bold={"bold"}
            />
          </div>
          <div style={{ marginTop: 5 }}>
            <Text
              text={"R&B, Pop"}
              fontsize={17}
              color={light_purple}
              bold={"bold"}
            />
          </div>
          <div
            style={{
              marginTop: 15,
              display: "flex",
              flexDirection: "horizontal",
            }}
          >
            <Text
              text={"Feedback Rating:"}
              fontsize={17}
              color={light_purple}
              bold={"bold"}
            />
            <div style={{ marginLeft: 5 }}>
              <Stars feedback_quality={3} color={background_purple} />
            </div>
          </div>
        </div>
        {/* RIGHT SIDE of HEADER ICONS */}
        <div
          style={{
            display: "flex",
            flexDirection: "horizontal",
            alignItems: "center",
            marginBottom: -5,

            // marginRight: 40,
          }}
        >
          <div style={{ marginRight: 7 }}>
            <GrSoundcloud
              onClick={() => window.open("https://soundcloud.com/discover")}
              size={48}
              color={"#ff7700"}
            />
          </div>
          <div style={{ marginRight: 7 }}>
            <GrSpotify size={35} color={"#1DB954"} />
          </div>
          <div style={{ marginRight: 7 }}>
            <GrInstagram size={34} color={"#E1306C"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisitProfile;
