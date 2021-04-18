import { purple, gray, white } from "../../constants";
import { Transition } from "react-transition-group";
import { useEffect, useState } from "react";
import ProfileCommenter from "./ProfileCommenter";
import nish from "../../nish.jpg";

const bottom_margin = 40;

const FakeSinglebar = ({ height, scale }) => {
  // console.log(comments);
  // var calculated_margin = bottom_margin + (75 - height) / 2;
  var calculated_margin = 0;
  // if (!comments) {
  //   calculated_margin += 10;
  // }

  return (
    <div
      style={{
        width: 6 * scale,
        height: height * scale,
        backgroundColor: white,
        marginRight: 3 * scale,
        marginLeft: 3 * scale,
        borderRadius: 2 * scale,
      }}
    ></div>
  );
};

const FakeBarUI = ({
  length,
  scale = 1,
  // comments,
}) => {
  const heights = [25, 30, 35, 40, 45, 50, 60, 65, 70, 75];
  const designHeightsArray = [
    6,
    2,
    3,
    3,
    1,
    4,
    9,
    8,
    1,
    5,
    3,
    8,
    0,
    3,
    4,
    5,
    9,
    2,
    2,
    3,
    0,
    9,
    6,
    6,
    3,
    7,
    6,
    4,
    3,
    4,
    1,
    3,
    2,
    1,
    4,
    5,
    6,
    1,
    6,
    4,
  ];
  // console.log(secondsInBars);
  var chooseColor = gray;
  // const [inProp, setInProp] = useState(false);
  // console.log(comments.keys());

  return (
    <div>
      <div
        style={{
          flexDirection: "row",
          display: "flex",
          height: 60,
          alignItems: "center",
          // border: "2px solid black",
        }}
      >
        {[...Array(length)].map((val, ind) => {
          return (
            <FakeSinglebar
              key={ind}
              height={heights[designHeightsArray[ind]]}
              color={chooseColor}
              index={ind}
              scale={scale}
            ></FakeSinglebar>
          );
        })}
      </div>
    </div>
  );
};

export default FakeBarUI;
