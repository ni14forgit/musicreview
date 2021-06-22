import StaticProfileCommenter from "../Small/StaticProfileCommenter";
import musicianpic from "../../musicianpic.jpeg";
import Text from "../Useful/Text";
import { background_purple, light_purple, white } from "../../constants";
import { GrSoundcloud, GrSpotify, GrInstagram } from "react-icons/gr";

import Header from "../Navigation/Header";
import Stars from "../Small/Feedback/Stars";
import MiniPlayer from "../MiniPlayer";
import Eric from "../../Eric.wav";
import FacebookFriends from "../Small/Social/FacebookFriends";
import nish from "../../nish.jpg";

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

const convertProfessionToText = (options) => {
  var professionstring = "";

  for (var i = 0; i < PROFESSIONS.length; i++) {
    if (options[i]) {
      professionstring += PROFESSIONS[i] + ", ";
    }
  }
  professionstring = professionstring.slice(0, -2);

  return professionstring;
};

const convertGenreToText = (options) => {
  var genrestring = "";

  for (var i = 0; i < GENRES.length; i++) {
    if (options[i]) {
      genrestring += GENRES[i] + ", ";
    }
  }
  genrestring = genrestring.slice(0, -2);

  return genrestring;
};

const GENRES = ["R&B", "R&B", "R&B", "R&B", "R&B"];
const PROFESSIONS = ["Singer", "Songwriter", "Audio Engineer", "Producer"];

const VisitProfile = ({ match }) => {
  // var id = match.params.id;

  //   if (id) {
  //     localStorage.setItem("id", id);
  //   } else {
  //     id = localStorage.getItem("id");
  //   }

  const name = "Nishant Iyengar";
  const professions = [false, false, true, true];
  const genres = [false, false, true, true];
  const accomplishments = [
    {
      date: "02-04-2021",
      title: "Accomplishment Title",
      description: "description",
    },
  ];
  const songs = [Eric];
  const photo = nish;
  const socialLinks = {
    spotify:
      "https://open.spotify.com/artist/0jNDKefhfSbLR9sFvcPLHo?si=QbDGF97jRB-J9O7f7qIoNQ",
    soundcloud: "https://soundcloud.com/james-music-24",
    instagram: "https://www.instagram.com/james__music/",
  };
  return (
    <div>
      <Header />
      <div
        style={{
          display: "flex",
          flexDirection: "horizontal",
          justifyContent: "space-between",
        }}
      >
        <div style={{ width: "60%" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "horizontal",
              justifyContent: "flex-start",
              alignItems: "flex-end",
              marginLeft: 40,
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "horizontal",
                justifyContent: "flex-start",
                width: 500,
                // border: "2px solid black",
                alignItems: "center",
                marginRight: 30,
              }}
            >
              <div style={{ marginRight: 20 }}>
                <StaticProfileCommenter photo={photo} size={150} />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div
                  style={{
                    marginTop: 5,
                    display: "flex",
                    flexDirection: "horizontal",
                  }}
                >
                  <Text
                    text={name}
                    fontsize={20}
                    color={background_purple}
                    bold={"bold"}
                  />
                </div>
                <div
                  style={{
                    marginTop: 5,
                    display: "flex",
                    flexDirection: "horizontal",
                  }}
                >
                  <Text
                    text={convertProfessionToText(professions)}
                    fontsize={17}
                    color={light_purple}
                    bold={"bold"}
                  />
                </div>
                <div
                  style={{
                    marginTop: 5,
                    display: "flex",
                    flexDirection: "horizontal",
                  }}
                >
                  <Text
                    text={convertGenreToText(genres)}
                    fontsize={17}
                    color={light_purple}
                    bold={"bold"}
                  />
                </div>
              </div>
            </div>

            <div>
              <div
                style={{
                  marginTop: 15,
                  display: "flex",
                  flexDirection: "horizontal",
                  marginBottom: 10,
                  // border: "2px solid green",
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

              <div
                style={{
                  display: "flex",
                  flexDirection: "horizontal",
                  alignItems: "center",
                  // border: "2px solid black",
                }}
              >
                {socialLinks.soundcloud ? (
                  <div style={{ marginRight: 7 }}>
                    <GrSoundcloud
                      onClick={() => window.open(socialLinks.soundcloud)}
                      size={48}
                      color={"#ff7700"}
                    />
                  </div>
                ) : null}
                {socialLinks.spotify ? (
                  <div style={{ marginRight: 7 }}>
                    <GrSpotify
                      size={35}
                      color={"#1DB954"}
                      onClick={() => window.open(socialLinks.spotify)}
                    />
                  </div>
                ) : null}
                {socialLinks.instagram ? (
                  <div style={{ marginRight: 7 }}>
                    <GrInstagram
                      size={34}
                      color={"#E1306C"}
                      onClick={() => window.open(socialLinks.instagram)}
                    />
                  </div>
                ) : null}
              </div>
            </div>
          </div>
          {/* MILESTONES */}

          <div style={{ marginLeft: 40, marginTop: 40, width: "90%" }}>
            <Text
              text={"Milestones"}
              fontsize={20}
              color={background_purple}
              bold={"bold"}
            />
            {/* Milestones Container */}
            <div
              style={{
                backgroundColor: background_purple,
                borderRadius: 5,
                marginTop: 20,
              }}
            >
              {accomplishments.map((val, ind) => {
                return (
                  <div>
                    <Accomplishment
                      title={val.title}
                      description={val.description}
                      date={val.date}
                      bar={ind < accomplishments.length - 1}
                    />
                  </div>
                );
              })}
            </div>
            <div
              style={{
                marginTop: 15,
                display: "flex",
                flexDirection: "horizontal",
                justifyContent: "flex-end",
                width: "80%",
              }}
            ></div>

            <div>
              <div style={{ marginTop: 30 }}>
                <Text
                  text={"Music I'm Proud Of!"}
                  fontsize={20}
                  color={background_purple}
                  bold={"bold"}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "horizontal",
                  marginTop: 15,
                  alignItems: "center",
                }}
              >
                {songs.map((val, ind) => {
                  return (
                    <div
                      key={val}
                      style={{ marginRight: 15, alignItems: "left" }}
                    >
                      <MiniPlayer song={val} />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        {/* FRIENDS */}
        <div
          style={{
            width: "27%",
            display: "flex",
            flexDirection: "column",
            // alignItems: "flex-start",
            // alignItems: "center",
            // border: "2px solid black",
            marginRight: 60,
            marginTop: 180,
          }}
        >
          <div style={{ marginBottom: 20 }}>
            <div
              style={{
                display: "flex",
                flexDirection: "horizontal",
                justifyContent: "space-between",
                alignItems: "center",
                width: "90%",
                // border: "2px solid black",
              }}
            >
              <Text
                text={"Friends"}
                fontsize={20}
                color={background_purple}
                bold="bold"
              />
              <div>
                <Text
                  text={"See all friends"}
                  fontsize={15}
                  color={"#2E8FEA"}
                  bold={"bold"}
                />
              </div>
            </div>
          </div>
          <FacebookFriends
            people={[
              photo,
              photo,
              photo,
              photo,
              photo,
              photo,
              photo,
              photo,
              photo,
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default VisitProfile;
