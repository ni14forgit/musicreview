import { useEffect, useState } from "react";
import axios from "axios";
import BarUI from "./Base/BarUI";
import { valOfBar } from "../constants";

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
  const [startedAt, setStartedAt] = useState(Date.now());
  const [pausedAt, setPausedAt] = useState(null);
  const [playerSource, setPlayerSource] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [timeOfSong, setTimeOfSong] = useState(0);
  const [durationOfSong, setDurationOfSong] = useState(0);

  async function getSong() {
    const myurl =
      "https://file-examples-com.github.io/uploads/2017/11/file_example_MP3_700KB.mp3";
    const response = await axios.get(myurl, {
      responseType: "arraybuffer",
    });

    // create audio context
    audioContext = getAudioContext();
    // create audioBuffer (decode audio file)
    const audioBuffer = await audioContext.decodeAudioData(response.data);
    setDurationOfSong(Math.floor(audioBuffer.duration));

    setBufferSource(audioBuffer);

    // create audio source
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
    setIsPlaying(false);
  };

  const playSong = () => {
    audioContext = getAudioContext();
    const source = audioContext.createBufferSource();
    source.buffer = bufferSource;

    source.connect(audioContext.destination);
    source.onended = onEnded;
    setPlayerSource(source);

    if (pausedAt) {
      // source.start();
      setStartedAt(Date.now() - pausedAt);
      source.start(0, pausedAt / 1000);
    } else {
      source.start();
    }

    setIsPlaying(true);
  };

  const pauseSong = () => {
    playerSource.stop();
    setPausedAt(Date.now() - startedAt);
    setIsPlaying(false);
  };

  useEffect(() => {
    getSong();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      // const playbackTime = (Date.now() - startedAt) / 1000;
      // const rate = parseInt((playbackTime * 100) / duration, 10);
      if (isPlaying) {
        setTimeOfSong((timeOfSong) => timeOfSong + 1);
      }
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [isPlaying]);

  return (
    <div style={{ marginLeft: 10 }}>
      <button onClick={() => playSong()}>Play</button>
      <button onClick={() => pauseSong()}>Pause</button>
      {convertTime(timeOfSong)}
      <BarUI
        length={Math.floor(durationOfSong / 2)}
        secondsInBars={Math.floor(timeOfSong / valOfBar)}
      />
    </div>
  );
}

export default Player;
