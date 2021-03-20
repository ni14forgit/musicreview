import { purple, gray, white } from "../../constants";
import { Transition } from "react-transition-group";
import { useEffect, useState } from "react";
import ProfileCommenter from "./ProfileCommenter";
import nish from "../../nish.jpg";

const bottom_margin = 40;

const Singlebar = ({
  height,
  color,
  justChanged,
  index,
  setClickMusicLocation,
  // comments,
}) => {
  // console.log(comments);
  // var calculated_margin = bottom_margin + (75 - height) / 2;
  var calculated_margin = 0;
  // if (!comments) {
  //   calculated_margin += 10;
  // }

  return (
    <div onClick={() => setClickMusicLocation(index)}>
      {justChanged ? (
        <div
          style={{
            width: 4,
            height: height,
            backgroundColor: color,
            marginRight: 1,
            marginLeft: 1,
            borderRadius: 1,
            transition: "all 1s ease",
            WebkitTransition: "all 1s ease",
            MozTransition: "all 1s ease",
          }}
        ></div>
      ) : (
        <div
          style={{
            width: 4,
            height: height,
            backgroundColor: color,
            marginRight: 1,
            marginLeft: 1,
            borderRadius: 1,
          }}
        ></div>
      )}
    </div>
  );
};

const BarUI = ({
  length,
  secondsInBars,
  designHeightsArray,
  setClickMusicLocation,
  // comments,
}) => {
  const heights = [25, 30, 35, 40, 45, 50, 60, 65, 70, 75];
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
          height: 40,
          alignItems: "center",
          // border: "2px solid black",
        }}
      >
        {[...Array(length)].map((val, ind) => {
          if (ind < secondsInBars) {
            chooseColor = purple;
          } else {
            chooseColor = white;
          }
          return (
            <Singlebar
              key={ind}
              height={heights[designHeightsArray[ind]] / 1.5}
              color={chooseColor}
              justChanged={ind == secondsInBars - 1}
              index={ind}
              setClickMusicLocation={setClickMusicLocation}
            ></Singlebar>
          );
        })}
      </div>
    </div>
  );
};

export default BarUI;
