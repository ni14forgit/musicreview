import { useEffect, useState, useRef } from "react";
import axios from "axios";
import BarUI from "./Small/BarUI";
import { numberOfBars, background_purple, white } from "../constants";
import James from "../James.wav";
import Eric from "../Eric.wav";
import useInterval from "../metafunctions/useInterval";
import nish from "../nish.jpg";
import ProfileCommenter from "./Small/ProfileCommenter";
import TextButton from "./Useful/TextButton";
import CommentBox from "./Small/CommentBox";
import StaticCommentsList from "./Small/StaticCommentsList";
import skrollTop from "skrolltop";
import ToggleCommenter from "./Small/ToggleCommenter";
// code adapted from https://apiko.com/blog/how-to-work-with-sound-java-script/
// const comments = [{ timestamp: 40, photo: nish }]

const getAudioContext = () => {
  AudioContext = window.AudioContext || window.webkitAudioContext;
  const audioContent = new AudioContext();
  return audioContent;
};

function ReviewedSong({ listOfComments }) {
  let audioContext;
  //   let durationOfSong = 10;
  const [bufferSource, setBufferSource] = useState(null);
  const [playerSource, setPlayerSource] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [timeOfSong, setTimeOfSong] = useState(0);
  const [designSongHeight, setDesignSongHeight] = useState([]);
  const [valOfBar, setValOfBar] = useState(2);
  const [commentsAfterFiltering, setCommentsAfterFiltering] = useState(
    listOfComments
  );
  const [loading, setLoading] = useState(true);
  const [commentersSelected, setCommentersSelected] = useState([true, true]);
  //   const [currentCommentValue, setCurrentCommentValue] = useState("");
  //   const [listOfComments, setListOfComments] = useState([]);

  // const uncleanComments = [{ timestamp: 40, id: 1, photo: nish }];

  async function getSong() {
    const myurl =
      // "https://file-examples-com.github.io/uploads/2017/11/file_example_MP3_700KB.mp3";
      Eric;
    const response = await axios.get(myurl, {
      responseType: "arraybuffer",
    });

    // create audio context
    audioContext = getAudioContext();
    // create audioBuffer (decode audio file)
    const audioBuffer = await audioContext.decodeAudioData(response.data);
    // setDurationOfSong(Math.floor(audioBuffer.duration));
    setValOfBar(Math.floor(audioBuffer.duration) / numberOfBars);
    console.log(Math.floor(audioBuffer.duration) / numberOfBars);

    setBufferSource(audioBuffer);
    console.log("review set source!");
  }

  const convertTime = (seconds) => {
    let secondsString;
    if (seconds % 60 < 10) {
      secondsString = "0" + (seconds % 60);
    } else {
      secondsString = seconds % 60;
    }
    return Math.floor(seconds / 60) + ":" + secondsString;
  };

  const onEnded = () => {
    console.log("ended");
    // setIsPlaying(false);
  };

  const playSong = () => {
    if (!bufferSource) {
      return;
    }

    audioContext = getAudioContext();
    const source = audioContext.createBufferSource();
    source.buffer = bufferSource;

    source.connect(audioContext.destination);
    source.onended = onEnded;
    setPlayerSource(source);

    source.start(0, timeOfSong);
    setIsPlaying(true);
  };

  const pauseSong = () => {
    // if (!isPlaying) {
    //   return;
    // }
    if (playerSource) {
      playerSource.stop();
    }
    // setPausedAt(Date.now() - startedAt);
    setIsPlaying(false);
  };

  const createDesignArray = () => {
    var arrayOfIndices = [];
    for (var i = 0; i < numberOfBars; i++) {
      arrayOfIndices.push(Math.floor(Math.random() * 10));
    }
    setDesignSongHeight(arrayOfIndices);
  };

  useEffect(() => {
    getSong().then(setLoading(false));
    createDesignArray();
    return () => {
      pauseSong();
    };
  }, []);

  // useEffect(() => {
  //   setComments(convertCommentsToBarStamped(listOfComments));
  // }, [listOfComments]);

  // useEffect(() => {
  //comments?

  // }, )

  useInterval(() => {
    // Your custom logic here
    if (isPlaying) {
      if (bufferSource) {
        if (timeOfSong < bufferSource.duration) {
          setTimeOfSong((timeOfSong) => timeOfSong + 1);
        }
      } else {
        setTimeOfSong((timeOfSong) => timeOfSong + 1);
        // setTimeOfSong(timeOfSong + 1);
      }
    }
  }, 1000);

  const setMusicLocationClick = (ind) => {
    // console.log("base");
    console.log(isPlaying);
    ind = ind + 1;
    setTimeOfSong(Math.floor(ind * valOfBar));
    if (isPlaying) {
      // console.log("stopped");
      playerSource.stop();
      // // setIsPlaying(true);
      audioContext = getAudioContext();
      const source = audioContext.createBufferSource();
      source.buffer = bufferSource;
      source.connect(audioContext.destination);
      source.onended = onEnded;
      setPlayerSource(source);
      source.start(0, Math.floor(ind * valOfBar));
    }
  };

  // const handleSpacePauseResume = (e) => {
  //   console.log("pressed");
  //   if (e.keyCode === 32) {
  //     if (isPlaying) {
  //       pauseSong();
  //     } else {
  //       playSong();
  //     }
  //   }
  // };
  // onKeyDown={handleSpacePauseResume}

  //   const deleteComment = (ind) => {
  //     setListOfComments(listOfComments.filter((comment, index) => index !== ind));
  //   };

  function getStyle(element) {
    if (typeof getComputedStyle !== "undefined") {
      return getComputedStyle(element);
    }
    return element.currentStyle; // Old IE
  }

  const toggleCommenter = (ind) => {
    var copyOfCommenters = [...commentersSelected];

    console.log(copyOfCommenters);

    for (var i = 0; i < commentersSelected.length; i++) {
      if (ind == i) {
        copyOfCommenters[i] = !copyOfCommenters[i];
        break;
      }
    }

    if (!copyOfCommenters[0]) {
      setCommentsAfterFiltering([]);
    } else {
      setCommentsAfterFiltering(listOfComments);
    }

    setCommentersSelected(copyOfCommenters);
  };

  const showComment = (id) => {
    var height = 0;
    for (var i = 0; i < id; i++) {
      height += parseInt(
        getStyle(document.getElementById("c" + id)).height,
        10
      );
    }
    skrollTop.scrollTo({
      element: document.getElementById("scrollMe"),
      to: height,
      duration: 1000,
      callback: function () {
        console.log("va");
      },
    });
  };

  return loading ? (
    <div>Loading</div>
  ) : (
    <div
      style={{
        backgroundColor: background_purple,
        borderRadius: 5,
        paddingBottom: 40,
        paddingLeft: 15,
        paddingRight: 15,
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
        <div>
          <div
            style={{
              display: "flex",
              flexDirection: "horizontal",
              marginBottom: "-30px",
            }}
          >
            <div style={{ marginRight: "10px" }}>
              <h2 style={{ color: white }}>firsttake.mp4</h2>
            </div>
            <TextButton
              text={isPlaying ? "pause" : "play"}
              onClick={isPlaying ? pauseSong : playSong}
              fontWeight="bold"
            />
          </div>
          <p style={{ color: "white" }}>{convertTime(timeOfSong)}</p>
          <BarUI
            length={numberOfBars}
            secondsInBars={Math.floor(timeOfSong / valOfBar)}
            designHeightsArray={designSongHeight}
            setClickMusicLocation={setMusicLocationClick}
            // comments={comments}
          />
          <div
            style={{
              marginTop: 20,
              marginBottom: 60,
              position: "relative",
              // border: "2px solid black",
            }}
          >
            {bufferSource
              ? commentsAfterFiltering.map((val, ind) => {
                  return (
                    <div
                      style={{
                        position: "absolute",
                        left:
                          (val.timestamp * (40 * 12)) / bufferSource.duration -
                          10,
                      }}
                    >
                      <ProfileCommenter
                        // showComment={showComment}
                        ind={ind}
                        profile_source={val.photo}
                        size={20}
                        showComment={showComment}
                      />
                    </div>
                  );
                })
              : null}
          </div>
        </div>

        <div
          style={{ display: "flex", flexDirection: "column", marginTop: 30 }}
        >
          {commentersSelected.map((val, ind) => {
            return (
              <div style={{ marginBottom: 8 }}>
                <ToggleCommenter
                  photo={nish}
                  onChange={() => toggleCommenter(ind)}
                  selected={commentersSelected[ind]}
                />
              </div>
            );
          })}
        </div>
      </div>
      <div style={{ border: "0px solid black", maxHeight: "100px" }}>
        <StaticCommentsList comments={commentsAfterFiltering} />
      </div>
    </div>
  );
}

export default ReviewedSong;
