const convertTime = (seconds) => {
  let secondsString;
  if (seconds % 60 < 10) {
    secondsString = "0" + (seconds % 60);
  } else {
    secondsString = seconds % 60;
  }
  return Math.floor(seconds / 60) + ":" + secondsString;
};

const sortByTimeStamp = (a, b) => {
  return a.timestamp < b.timestamp
    ? -1
    : a.timestamp === b.timestamp
    ? true
      ? 1
      : -1
    : 1;
};

export { convertTime, sortByTimeStamp };
