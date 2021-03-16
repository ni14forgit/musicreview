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
import CommentBox from "./Useful/CommentBox";
import CommentsList from "./Useful/CommentsList";
import skrollTop from "skrolltop";
// code adapted from https://apiko.com/blog/how-to-work-with-sound-java-script/
// const comments = [{ timestamp: 40, photo: nish }]

const getAudioContext = () => {
  AudioContext = window.AudioContext || window.webkitAudioContext;
  const audioContent = new AudioContext();
  return audioContent;
};

function Player() {
  let audioContext;
  //   let durationOfSong = 10;
  const [bufferSource, setBufferSource] = useState(null);
  const [playerSource, setPlayerSource] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [timeOfSong, setTimeOfSong] = useState(0);
  const [designSongHeight, setDesignSongHeight] = useState([]);
  const [valOfBar, setValOfBar] = useState(2);
  const [comments, setComments] = useState({});
  const [loading, setLoading] = useState(true);
  const [currentCommentValue, setCurrentCommentValue] = useState("");
  const [listOfComments, setListOfComments] = useState([]);

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
    playerSource.stop();
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
    getSong();
    createDesignArray();

    setLoading(false);
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
          // setTimeOfSong(timeOfSong + 1);
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

  // const convertCommentsToBarStamped = (timestampedComments) => {
  //   let mapOfComments = new Map();
  //   for (var i = 0; i < timestampedComments.length; i++) {
  //     var index = Math.floor(timestampedComments[i].timestamp / valOfBar);
  //     if (mapOfComments.has(index)) {
  //       var currentCommentsAtIndex = mapOfComments.get(index);
  //       currentCommentsAtIndex.push({
  //         photo: timestampedComments[i].photo,
  //         ind: i,
  //       });
  //       mapOfComments.set(index, currentCommentsAtIndex);
  //     } else {
  //       var newList = [];
  //       newList.push({ photo: timestampedComments[i].photo, ind: i });
  //       mapOfComments.set(index, newList);
  //     }
  //   }
  //   console.log(mapOfComments);
  //   return mapOfComments;
  // };

  const submitComment = () => {
    if (currentCommentValue == "") {
      return;
    }

    var updatedArray = [
      ...listOfComments,
      {
        comment: currentCommentValue,
        timestamp: timeOfSong,
        uitimestamp: convertTime(timeOfSong),
        photo: nish,
      },
    ];

    updatedArray.sort((a, b) =>
      a.timestamp < b.timestamp
        ? -1
        : a.timestamp === b.timestamp
        ? true
          ? 1
          : -1
        : 1
    );
    setListOfComments(updatedArray);
    setCurrentCommentValue("");
  };

  const deleteComment = (ind) => {
    setListOfComments(listOfComments.filter((comment, index) => index !== ind));
  };

  function getStyle(element) {
    if (typeof getComputedStyle !== "undefined") {
      return getComputedStyle(element);
    }
    return element.currentStyle; // Old IE
  }

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
        // minWidth: "200px",
        width: "600px",
      }}
    >
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
        {listOfComments.map((val, ind) => {
          return (
            <div
              style={{
                position: "absolute",
                left: (val.timestamp * (40 * 12)) / bufferSource.duration - 10,
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
        })}
      </div>
      <div style={{ display: "flex", flexDirection: "horizontal" }}>
        <CommentBox
          currentValue={currentCommentValue}
          setCurrentValue={setCurrentCommentValue}
        />
        <TextButton text="comment" onClick={submitComment} />
      </div>
      <div style={{ border: "0px solid black", maxHeight: "100px" }}>
        <CommentsList comments={listOfComments} deleteComment={deleteComment} />
      </div>
    </div>
  );
}

export default Player;
