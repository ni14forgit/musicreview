import { useEffect, useState, useRef } from "react";
import axios from "axios";
import BarUI from "./Base/BarUI";
import { numberOfBars } from "../constants";
import James from "../James.wav";
import useInterval from "../metafunctions/useInterval";

// code adapted from https://apiko.com/blog/how-to-work-with-sound-java-script/

const getAudioContext = () => {
  AudioContext = window.AudioContext || window.webkitAudioContext;
  const audioContent = new AudioContext();
  return audioContent;
};

function Player() {
  let audioContext;
  //   let durationOfSong = 10;
  const [bufferSource, setBufferSource] = useState(null);
  // const [startedAt, setStartedAt] = useState(Date.now());
  // const [pausedAt, setPausedAt] = useState(null);
  const [playerSource, setPlayerSource] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [timeOfSong, setTimeOfSong] = useState(0);
  // const [durationOfSong, setDurationOfSong] = useState(0);
  const [designSongHeight, setDesignSongHeight] = useState([]);
  const [valOfBar, setValOfBar] = useState(2);
  const [jumper, setJumper] = useState();

  async function getSong() {
    const myurl =
      // "https://file-examples-com.github.io/uploads/2017/11/file_example_MP3_700KB.mp3";
      James;
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
    return (
      <p>
        {Math.floor(seconds / 60)}:{secondsString}
      </p>
    );
  };

  const onEnded = () => {
    console.log("ended");
    // setIsPlaying(false);
  };

  const playSong = (timeOfSongPassed) => {
    if (!bufferSource) {
      return;
    }

    audioContext = getAudioContext();
    const source = audioContext.createBufferSource();
    source.buffer = bufferSource;

    source.connect(audioContext.destination);
    source.onended = onEnded;
    setPlayerSource(source);

    source.start(0, timeOfSongPassed);
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
  }, []);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     // const playbackTime = (Date.now() - startedAt) / 1000;
  //     // const rate = parseInt((playbackTime * 100) / duration, 10);
  //     // console.log("interval triggered'");
  //     if (isPlaying) {
  //       if (bufferSource) {
  //         console.log(timeOfSong);
  //         console.log(bufferSource.duration);
  //         if (timeOfSong < bufferSource.duration) {
  //           setTimeOfSong((timeOfSong) => timeOfSong + 1);
  //           // setTimeOfSong(timeOfSong + 1);
  //         }
  //       } else {
  //         setTimeOfSong((timeOfSong) => timeOfSong + 1);
  //         // setTimeOfSong(timeOfSong + 1);
  //       }
  //     }
  //     // console.log(valOfBar);
  //   }, 1000);
  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, [isPlaying]);

  useInterval(() => {
    // Your custom logic here
    if (isPlaying) {
      if (bufferSource) {
        console.log(timeOfSong);
        console.log(bufferSource.duration);
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

  return (
    <div style={{ marginLeft: 10 }}>
      <button onClick={() => playSong(timeOfSong)}>Play</button>
      <button onClick={() => pauseSong()}>Pause</button>
      {convertTime(timeOfSong)}
      <BarUI
        length={numberOfBars}
        secondsInBars={Math.floor(timeOfSong / valOfBar)}
        designHeightsArray={designSongHeight}
        setClickMusicLocation={setMusicLocationClick}
        // secondsInBars={}
      />
    </div>
  );
}

export default Player;
