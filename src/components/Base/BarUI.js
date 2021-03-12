import { purple, gray } from "../../constants";
import { Transition } from "react-transition-group";
import { useEffect, useState } from "react";

// const duration = 4000;

// const defaultStyle = {
//   transition: `opacity ${duration}ms ease-in-out`,
//   backgroundColor: gray,
//   opacity: 0.5,
// };

// const transitionStyles = {
//   entering: { opacity: 1, backgroundColor: purple },
//   entered: { opacity: 1, backgroundColor: purple },
//   exiting: { opacity: 1, backgroundColor: gray },
//   exited: { opacity: 1, backgroundColor: gray },
// };

const Singlebar = ({
  height,
  color,
  justChanged,
  index,
  setClickMusicLocation,
}) => {
  return (
    <div onClick={() => setClickMusicLocation(index)}>
      {justChanged ? (
        <div
          style={{
            width: 6,
            height: height,
            backgroundColor: color,
            marginRight: 1.5,
            marginLeft: 1.5,
            borderRadius: 2,
            transition: "all 1s ease",
            WebkitTransition: "all 1s ease",
            MozTransition: "all 1s ease",
          }}
        ></div>
      ) : (
        <div
          style={{
            width: 6,
            height: height,
            backgroundColor: color,
            marginRight: 1.5,
            marginLeft: 1.5,
            borderRadius: 2,
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
}) => {
  const heights = [25, 30, 35, 40, 45, 50, 60, 65, 70, 75];
  // console.log(secondsInBars);
  var chooseColor = gray;
  // const [inProp, setInProp] = useState(false);

  return (
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
        // console.log(ind);
        // console.log(val);
        if (ind < secondsInBars) {
          chooseColor = purple;
        } else {
          chooseColor = gray;
        }
        return (
          <Singlebar
            key={ind}
            height={heights[designHeightsArray[ind]]}
            color={chooseColor}
            justChanged={ind == secondsInBars - 1}
            index={ind}
            setClickMusicLocation={setClickMusicLocation}
            // inProp={inProp}
          ></Singlebar>
        );
      })}
      {/* <button onClick={() => setInProp(true)}>ii</button> */}
    </div>
  );
};

export default BarUI;
