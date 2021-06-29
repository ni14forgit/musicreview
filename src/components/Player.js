import { useEffect, useState, useRef } from "react";
import axios from "axios";
import BarUI from "./Small/BarUI";
import { numberOfBars, background_purple, white } from "../constants";
import useInterval from "../metafunctions/useInterval";
import nish from "../nish.jpg";
import ProfileCommenter from "./Small/ProfileCommenter";
import TextButton from "./Useful/TextButton";
import CommentBox from "./Small/CommentBox";
import CommentsList from "./Small/ReviewCommentsList";
import skrollTop from "skrolltop";
import Text from "../components/Useful/Text";
import { convertTime, sortByTimeStamp } from "../metafunctions/timestamp";
import { AiFillPlayCircle, AiFillPauseCircle } from "react-icons/ai";
import { Comment } from "./classes/Classes";

// code adapted from https://apiko.com/blog/how-to-work-with-sound-java-script/
// const comments = [{ timestamp: 40, photo: nish }]

const getAudioContext = () => {
  AudioContext = window.AudioContext || window.webkitAudioContext;
  const audioContent = new AudioContext();
  return audioContent;
};

let nonStateBufferSource;

function Player({
  comments,
  setComments,
  deletedComments,
  setDeletedComments,
  song,
  title,
  photo,
}) {
  const val = useRef();
  let audioContext;
  //   let durationOfSong = 10;
  const [bufferSource, setBufferSource] = useState(null);
  const [playerSource, setPlayerSource] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [timeOfSong, setTimeOfSong] = useState(0);
  const [designSongHeight, setDesignSongHeight] = useState([]);
  const [valOfBar, setValOfBar] = useState(2);
  const [loading, setLoading] = useState(true);
  const [currentCommentValue, setCurrentCommentValue] = useState("");

  // const uncleanComments = [{ timestamp: 40, id: 1, photo: nish }];

  async function getSong() {
    // console.log(song);
    const myurl =
      // "https://file-examples-com.github.io/uploads/2017/11/file_example_MP3_700KB.mp3";
      song;
    const response = await axios.get(myurl, {
      responseType: "arraybuffer",
    });

    // create audio context
    audioContext = getAudioContext();
    // create audioBuffer (decode audio file)
    const audioBuffer = await audioContext.decodeAudioData(response.data);
    // setDurationOfSong(Math.floor(audioBuffer.duration));
    setValOfBar(Math.floor(audioBuffer.duration) / numberOfBars);
    // console.log(Math.floor(audioBuffer.duration) / numberOfBars);

    setBufferSource(audioBuffer);
  }

  const onEnded = () => {
    // console.log("ended");
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
    nonStateBufferSource = source;
    source.start(0, timeOfSong);
    setIsPlaying(true);
  };

  const pauseSong = () => {
    // if (!isPlaying) {
    //   return;
    // }
    if (playerSource) {
      // console.log("stopped because not null");
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

  useEffect(async () => {
    await getSong();
    createDesignArray();
    setLoading(false);
    // console.log("MOUNTED!");
  }, []);

  useEffect(() => {
    return () => {
      if (nonStateBufferSource) {
        // console.log("miniplayer stopped");
        nonStateBufferSource.stop();
      }
    };
  }, []);

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
    // console.log(isPlaying);
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
      nonStateBufferSource = source;
      source.start(0, Math.floor(ind * valOfBar));
    }
  };

  const submitComment = () => {
    if (currentCommentValue == "") {
      return;
    }

    var updatedArray = [
      ...comments,
      // {
      // comment: currentCommentValue,
      // timestamp: timeOfSong,
      // uitimestamp: convertTime(timeOfSong),
      // photo: nish,
      // saved: false,
      // },
      new Comment(
        currentCommentValue,
        timeOfSong,
        convertTime(timeOfSong),
        photo,
        false
      ),
    ];

    updatedArray.sort((a, b) => sortByTimeStamp(a, b));
    setComments(updatedArray);
    setCurrentCommentValue("");
  };

  const deleteComment = (ind) => {
    if (comments[ind].saved) {
      // console.log("trigeged");
      setDeletedComments([...deletedComments, comments[ind].id]);
    }

    setComments(comments.filter((comment, index) => index !== ind));
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
        // console.log("va");
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
        // width: "600px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "horizontal",
          alignItems: "center",
          marginLeft: -5,
        }}
      >
        <div style={{ marginRight: 10 }}>
          {isPlaying ? (
            <AiFillPauseCircle onClick={pauseSong} color={white} size={45} />
          ) : (
            <AiFillPlayCircle onClick={playSong} color={white} size={45} />
          )}
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginBottom: "20px",
            marginTop: "20px",
          }}
        >
          <div style={{ marginRight: "10px" }}>
            <Text text={title} color={white} fontsize={30} bold={"bold"} />
          </div>
          <Text text={convertTime(timeOfSong)} color={white} fontsize={20} />
        </div>
        {/* <TextButton
          text={isPlaying ? "pause" : "play"}
          onClick={isPlaying ? pauseSong : playSong}
          fontWeight="bold"
        /> */}
      </div>

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
        {comments.map((val, ind) => {
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
        <div style={{ marginLeft: 10 }}>
          <TextButton text="comment" onClick={submitComment} />
        </div>
      </div>
      <div style={{ border: "0px solid black", maxHeight: "100px" }}>
        <CommentsList comments={comments} deleteComment={deleteComment} />
      </div>
    </div>
  );
}

export default Player;
