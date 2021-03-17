// import {useState} from "react"
import { purple, white } from "../../constants";
const ToggleSelectOption = ({ selected, text, onClick }) => {
  const horizontalpaddingHalf = 10;
  const verticaalpaddingHalf = 3;

  return (
    <div>
      {selected ? (
        <button
          style={{
            background: white,
            maxHeight: 50,
            borderRadius: 5,
            alignSelf: "center",
            textAlign: "center",
            paddingRight: horizontalpaddingHalf,
            paddingLeft: horizontalpaddingHalf,
            paddingTop: verticaalpaddingHalf,
            paddingBottom: verticaalpaddingHalf,
            border: "1px solid white",
            color: purple,
            // fontWeight: fontWeight,
            outline: 0,
          }}
          onClick={onClick}
        >
          {text}
        </button>
      ) : (
        <button
          style={{
            background: "transparent",
            maxHeight: 50,
            borderRadius: 5,
            alignSelf: "center",
            textAlign: "center",
            paddingRight: horizontalpaddingHalf,
            paddingLeft: horizontalpaddingHalf,
            paddingTop: verticaalpaddingHalf,
            paddingBottom: verticaalpaddingHalf,
            border: "1px solid #a54ac5",
            color: white,
            // fontWeight: fontWeight,
            outline: 0,
          }}
          onClick={onClick}
        >
          {text}
        </button>
      )}
    </div>
  );
};

export default ToggleSelectOption;
