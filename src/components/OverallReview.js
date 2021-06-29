import { background_purple } from "../constants";
import Text from "./Useful/Text";
// import nish from "../nish.jpg";
import RateFeedback from "./Small/RateFeedback";
import { GrSoundcloud, GrSpotify, GrInstagram } from "react-icons/gr";
import MiniPlayer from "./MiniPlayer";
import {
  convertProfessionsDictToList,
  convertProfessionToText,
} from "../metafunctions/genProfHelper";
import { useState } from "react";

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

const GeneralFeedback = ({ review }) => {
  const [score, setScore] = useState(review.reviewTable.feedback_quality);
  // need to collect and set this value
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
          <ProfPic photo={review.reviewerProfile.profile_photo} />
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
              <Text
                text={review.reviewerProfile.name}
                color={background_purple}
                fontsize={16}
              />
              <Text
                text={convertProfessionToText(
                  convertProfessionsDictToList(
                    review.reviewerProfile.professions
                  )
                )}
                color={background_purple}
                fontsize={15}
              />
              <div
                style={{
                  display: "flex",
                  flexDirection: "horizontal",
                  marginTop: 5,
                }}
              >
                {review.reviewerProfile.soundcloud != "" ? (
                  <div style={{ marginRight: 8, marginBottom: 3 }}>
                    <GrSoundcloud
                      onClick={() =>
                        window.open(review.reviewerProfile.soundcloud)
                      }
                      size={37}
                      color={"#ff7700"}
                    />
                  </div>
                ) : null}

                {review.reviewerProfile.spotify != "" ? (
                  <div style={{ marginTop: 6, marginRight: 8 }}>
                    <GrSpotify
                      onClick={() =>
                        window.open(review.reviewerProfile.spotify)
                      }
                      size={26}
                      color={"#1DB954"}
                    />
                  </div>
                ) : null}

                {review.reviewerProfile.instagram != "" ? (
                  <div style={{ marginRight: 8, marginTop: 6 }}>
                    <GrInstagram
                      onClick={() =>
                        window.open(review.reviewerProfile.instagram)
                      }
                      size={26}
                      color={"#E1306C"}
                    />
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>
        {review.reviewTable.touched ? (
          <RateFeedback
            name={review.reviewerProfile.name}
            score={score}
            setScore={setScore}
            review_id={review.reviewTable.id}
          />
        ) : null}
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
            text={
              review.reviewTable.general_overview
                ? review.reviewTable.general_overview
                : "No overview written yet."
            }
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
          {review.reviewerSongs.map((val, ind) => {
            return (
              <div style={{ marginRight: 8 }}>
                <MiniPlayer song={val.url} title={val.title} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default GeneralFeedback;
