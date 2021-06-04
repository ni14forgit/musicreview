const convertTime = (seconds) => {
  let secondsString;
  if (seconds % 60 < 10) {
    secondsString = "0" + (seconds % 60);
  } else {
    secondsString = seconds % 60;
  }
  return Math.floor(seconds / 60) + ":" + secondsString;
};

export { convertTime };
