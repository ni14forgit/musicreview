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

const Singlebar = ({ height, color, justChanged }) => {
  return justChanged ? (
    <div
      style={{
        width: 6,
        height: height,
        backgroundColor: color,
        marginRight: 4,
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
        marginRight: 4,
        borderRadius: 2,
      }}
    ></div>
  );
};

const BarUI = ({ length, secondsInBars }) => {
  const heights = [40, 60, 55, 45];
  console.log(secondsInBars);
  var chooseColor = gray;
  // const [inProp, setInProp] = useState(false);

  return (
    <div
      style={{
        flexDirection: "row",
        display: "flex",
        height: 60,
        alignItems: "center",
      }}
    >
      {[...Array(length)].map((val, ind) => {
        console.log(ind);
        // console.log(val);
        if (ind < secondsInBars) {
          chooseColor = purple;
        } else {
          chooseColor = gray;
        }
        return (
          <Singlebar
            key={ind}
            height={heights[ind % 4]}
            color={chooseColor}
            justChanged={ind == secondsInBars - 1}
            // inProp={inProp}
          ></Singlebar>
        );
      })}
      {/* <button onClick={() => setInProp(true)}>ii</button> */}
    </div>
  );
};

export default BarUI;
