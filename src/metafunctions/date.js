const sortByDate = (a, b) => {
  const aArray = a.split("/");
  const bArray = b.split("/");

  if (
    parseInt(aArray[2].replace(/^0+/, "")) <
    parseInt(bArray[2].replace(/^0+/, ""))
  ) {
    return 1;
  } else if (
    parseInt(aArray[2].replace(/^0+/, "")) ===
    parseInt(bArray[2].replace(/^0+/, ""))
  ) {
    if (
      parseInt(aArray[0].replace(/^0+/, "")) <
      parseInt(bArray[0].replace(/^0+/, ""))
    ) {
      return 1;
    } else if (
      parseInt(aArray[0].replace(/^0+/, "")) ===
      parseInt(bArray[0].replace(/^0+/, ""))
    ) {
      return parseInt(aArray[1].replace(/^0+/, "")) <
        parseInt(bArray[1].replace(/^0+/, ""))
        ? 1
        : -1;
    } else {
      return -1;
    }
  } else {
    return -1;
  }
};

export { sortByDate };
