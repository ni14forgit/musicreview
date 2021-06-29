import StaticProfileCommenter from "../Small/StaticProfileCommenter";
// import musicianpic from "../../musicianpic.jpeg";
import Text from "../Useful/Text";
import {
  background_purple,
  light_purple,
  purple,
  white,
} from "../../constants";
import { GrSoundcloud, GrSpotify, GrInstagram } from "react-icons/gr";

import Header from "../Navigation/Header";
import Stars from "../Small/Feedback/Stars";
import MiniPlayer from "../MiniPlayer";
// import FacebookFriends from "../Small/Social/FacebookFriends";
import nish from "../../nish.jpg";
import { useEffect, useState } from "react";
import { retrieve_other_profile } from "../../api/profiles/retrieve";
import {
  GENRES,
  PROFESSIONS,
  convertGenresDictToList,
  convertProfessionsDictToList,
  convertProfessionToText,
  convertGenreToText,
} from "../../metafunctions/genProfHelper";
import { useStore } from "../../store/store";

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

const VisitProfile = ({ match }) => {
  const [state, dispatch] = useStore();
  const [name, setName] = useState("");
  const [professions, setProfessions] = useState([]);
  const [genres, setGenres] = useState([]);
  const [accomplishments, setAccomplishments] = useState([]);
  const [songs, setSongs] = useState([]);
  const [photo, setPhoto] = useState("");
  const [socialLinks, setSocialLinks] = useState({
    spotify: "",
    soundcloud: "",
    instagram: "",
  });
  const [reviewerScore, setReviewerScore] = useState(0);
  const [pageLoading, setPageLoading] = useState(false);
  useEffect(async () => {
    // console.log("useeffect");
    // console.log(match.params.user_id);
    const result = await retrieve_other_profile(match.params.user_id);
    const profile = result.profile;
    // console.log(profile);
    setName(profile.name);
    setPhoto(profile.profile_photo);
    setSocialLinks({
      instagram: profile.instagram,
      soundcloud: profile.soundcloud,
      spotify: profile.spotify,
    });
    setSongs(profile.songs);
    // console.log(profile.accomplishments);
    setAccomplishments(profile.accomplishments);
    setGenres(convertGenresDictToList(profile.genres));
    setProfessions(convertProfessionsDictToList(profile.professions));
    setReviewerScore(profile.reviewer_score);
    setPageLoading(false);
  }, []);
  return (
    <div>
      <Header
        numunopenedfeedback={state.numunopenedfeedback}
        numfeedbacktogive={state.numtodoreview}
      />

      <div
        style={{
          display: "flex",
          flexDirection: "horizontal",
          justifyContent: "space-between",
        }}
      >
        <div style={{ width: "80%" }}>
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
                  // border: "2px solid black",
                }}
              >
                <Text
                  text={"Feedback Rating:"}
                  fontsize={17}
                  color={light_purple}
                  bold={"bold"}
                />
                <div style={{ marginLeft: 5 }}>
                  {reviewerScore > 0 ? (
                    <Stars
                      feedback_quality={reviewerScore}
                      color={background_purple}
                    />
                  ) : (
                    <Text
                      text="No Feedback Given Yet"
                      fontsize={17}
                      color={light_purple}
                      // bold={"bold"}
                    />
                  )}
                </div>
              </div>

              {!(
                socialLinks.instagram ||
                socialLinks.soundcloud ||
                socialLinks.spotify
              ) ? (
                <Text text="No social media available." color={purple} />
              ) : (
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
              )}
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
            {accomplishments && accomplishments.length > 0 ? (
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
            ) : (
              <div style={{ marginTop: 20 }}>
                <Text text="No milestones posted." color={purple} />
              </div>
            )}
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
                      <MiniPlayer song={val.url} title={val.title} />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        {/* FRIENDS */}
        {/* <div
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
        </div> */}
      </div>
    </div>
  );
};

export default VisitProfile;
