import StaticProfileCommenter from "../Small/StaticProfileCommenter";
import musicianpic from "../../musicianpic.jpeg";
import Text from "../Useful/Text";
import { background_purple, light_purple, white } from "../../constants";
import { GrSoundcloud, GrSpotify, GrInstagram } from "react-icons/gr";

import Header from "../Navigation/Header";
import Stars from "../Small/Feedback/Stars";
import MiniPlayer from "../MiniPlayer";
import Eric from "../../Eric.wav";

const Accomplishment = ({ title, description, date, bar }) => {
  return (
    <div style={{ width: "100%", paddingLeft: 12 }}>
      <div
        style={{
          width: "95%",
          borderRadius: 10,
          // backgroundColor: "transparent",
          display: "flex",
          flexDirection: "horizontal",
          justifyContent: "space-between",
          alignItems: "flex-start",
          paddingTop: 12,
          paddingBottom: 12,
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ marginBottom: 3 }}>
            <Text text={title} color={white} fontsize={16} bold={"bold"} />
          </div>
          <Text text={description} color={white} fontsize={14} />
        </div>

        <Text text={date} color={white} fontsize={14} />
      </div>
      {bar ? (
        <div
          style={{
            width: "90%",
            height: 2,
            backgroundColor: "white",
            marginTop: 3,
            marginBottom: 3,
          }}
        ></div>
      ) : null}
    </div>
  );
};

const VisitProfile = () => {
  return (
    <div style={{ marginBottom: 30 }}>
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
          marginLeft: 40,

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
              text={"Singer, Songwriter"}
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

      {/* MILESTONES */}

      <div style={{ marginLeft: 40, marginTop: 40 }}>
        <Text
          text={"Milestones"}
          fontsize={20}
          color={background_purple}
          bold={"bold"}
        />
        {/* Milestones Container */}
        <div
          style={{
            width: "80%",
            backgroundColor: background_purple,
            borderRadius: 5,
            marginTop: 20,
          }}
        >
          {[1, 2, 3].map((val, ind) => {
            return (
              <Accomplishment
                title={"1000+ views on Spotify single"}
                description="Released ‘Roses’ last October and marketed it through insta, tiktok. It was previewed by @newsongstoday!"
                date="Jan 12th, 2021"
                bar={ind < 2}
              />
            );
          })}
        </div>
        <div style={{ marginTop: 40 }}>
          <div style={{ marginBottom: 20 }}>
            <Text
              text={"Work I'm Proud Of!"}
              fontsize={20}
              color={background_purple}
              bold={"bold"}
            />
          </div>
          <div style={{ display: "flex", flexDirection: "horizontal" }}>
            {[Eric, Eric, Eric].map((val, ind) => {
              return (
                <div key={val} style={{ marginRight: 15 }}>
                  <MiniPlayer song={val} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisitProfile;
