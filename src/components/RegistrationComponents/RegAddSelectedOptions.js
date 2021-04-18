import Popup from "reactjs-popup";
import { background_purple, purple, white } from "../../constants";
import { useRef, useState, useEffect } from "react";
import InvertedTextButton from "../Useful/InvertedTextButton";
import { IoMdClose } from "react-icons/io";
import Text from "../Useful/Text";
import ToggleSelectOption from "../Useful/ToggleSelectOption";

const ErrorMessage = () => {
  return <div style={{ color: "red" }}>Cannot be empty</div>;
};

const isNothingSelected = (options) => {
  for (var i = 0; i < options.length; i++) {
    if (options[i]) {
      return false;
    }
  }
  return true;
};

const RegAddSelectedOptions = ({
  enableNextButton,
  selectedOptions,
  setSelectedOptions,
  title,
  constantCategories,
}) => {
  const toggleOption = (ind) => {
    const copyOfSelectedOptions = [...selectedOptions];
    copyOfSelectedOptions[ind] = !copyOfSelectedOptions[ind];
    setSelectedOptions(copyOfSelectedOptions);

    if (isNothingSelected(selectedOptions)) {
      enableNextButton(false);
    } else {
      enableNextButton(true);
    }
  };

  useEffect(() => {
    if (isNothingSelected(selectedOptions)) {
      enableNextButton(false);
    } else {
      enableNextButton(true);
    }
    return () => {
      enableNextButton(false);
    };
  });

  return (
    <div
      style={{
        backgroundColor: background_purple,
        width: 600,
        height: 150,
        borderRadius: 10,
      }}
    >
      <div
        style={{
          height: "100%",
          width: "100%",
          marginLeft: 10,
        }}
      >
        <div style={{ width: 500, marginTop: 30, marginLeft: 40 }}>
          <div style={{ marginBottom: 8 }}>
            <Text text={title} color={white} size={18} bold="bold" />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "horizontal",
              justifyContent: "left",
              alignItems: "center",
            }}
          >
            {constantCategories.map((val, ind) => {
              return (
                <div style={{ marginRight: 5 }}>
                  <ToggleSelectOption
                    text={val}
                    selected={selectedOptions[ind]}
                    onClick={() => toggleOption(ind)}
                  />
                </div>
              );
            })}
          </div>
          {/* <div style={{ marginTop: 10 }}>
            {!isNothingSelected(selectedOptions) ? null : <ErrorMessage />}
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default RegAddSelectedOptions;
