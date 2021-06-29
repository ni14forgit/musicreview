import { useEffect, useState } from "react";
import axios from "axios";
import MiniBarUI from "./Small/MiniBarUI";
import { background_purple, white } from "../constants";
import useInterval from "../metafunctions/useInterval";
import TextButton from "./Useful/TextButton";
import Text from "./Useful/Text";
import { AiFillPlayCircle, AiFillPauseCircle } from "react-icons/ai";

import skrollTop from "skrolltop";
// code adapted from https://apiko.com/blog/how-to-work-with-sound-java-script/
// const comments = [{ timestamp: 40, photo: nish }]

const getAudioContext = () => {
  var AudioContext = window.AudioContext || window.webkitAudioContext;
  const audioContent = new AudioContext();
  return audioContent;
};
let nonStateBufferSource;
function MiniPlayer({ song, title }) {
  let audioContext;
  const numberOfBars = 35;
  //   let durationOfSong = 10;
  const [bufferSource, setBufferSource] = useState(null);
  const [playerSource, setPlayerSource] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [timeOfSong, setTimeOfSong] = useState(0);
  const [designSongHeight, setDesignSongHeight] = useState([]);
  const [valOfBar, setValOfBar] = useState(2);
  const [loading, setLoading] = useState(true);
  //   const [listOfComments, setListOfComments] = useState([]);

  // const uncleanComments = [{ timestamp: 40, id: 1, photo: nish }];

  async function getSong() {
    const myurl =
      // "https://file-examples-com.github.io/uploads/2017/11/file_example_MP3_700KB.mp3";
      song;
    const response = await axios.get(myurl, {
      responseType: "arraybuffer",
    });

    // create audio context
    audioContext = getAudioContext();
    // create audioBuffer (decode audio file)
    // const audioBuffer = await audioContext.decodeAudioData(response.data);

    audioContext.decodeAudioData(
      response.data,
      (audioBuffer) => {
        setValOfBar(Math.floor(audioBuffer.duration) / numberOfBars);
        // console.log(Math.floor(audioBuffer.duration) / numberOfBars);

        setBufferSource(audioBuffer);
      },
      (e) => {
        // reject(e);
      }
    );
    // setDurationOfSong(Math.floor(audioBuffer.duration));
    // setValOfBar(Math.floor(audioBuffer.duration) / numberOfBars);
    // console.log(Math.floor(audioBuffer.duration) / numberOfBars);

    // setBufferSource(audioBuffer);
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
    // return () => {
    //   if (nonStateBufferSource) {
    //     console.log("miniplayer stopped");
    //     nonStateBufferSource.stop();
    //   }
    // };
  }, []);

  useEffect(() => {
    return () => {
      if (nonStateBufferSource) {
        // console.log("miniplayer stopped");
        nonStateBufferSource.stop();
      }
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

  return loading ? (
    <div>Loading</div>
  ) : (
    <div
      style={{
        backgroundColor: background_purple,
        borderRadius: 5,
        paddingBottom: 5,
        paddingLeft: 10,
        paddingRight: 10,
        display: "flex",
        flexDirection: "column",
        // minWidth: "200px",
        justifyContent: "space-around",
        width: "220px",
        height: 100,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "horizontal",
          alignItems: "center",
          justifyContent: "flex-start",
          marginTop: 3,
          //   marginLeft: 5,
        }}
      >
        <div style={{ marginRight: 8 }}>
          <Text text={title} fontsize={13} color={white} bold="bold" />
        </div>
        {isPlaying ? (
          <AiFillPauseCircle size={25} onClick={pauseSong} color={white} />
        ) : (
          <AiFillPlayCircle size={25} onClick={playSong} color={white} />
        )}
      </div>
      {/* <div style={{ border: "2px solid black" }}> */}
      <MiniBarUI
        length={numberOfBars}
        secondsInBars={Math.floor(timeOfSong / valOfBar)}
        designHeightsArray={designSongHeight}
        setClickMusicLocation={setMusicLocationClick}
      />
      {/* </div> */}
    </div>
  );
}

export default MiniPlayer;
