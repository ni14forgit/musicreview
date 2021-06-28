import { background_purple, purple, white } from "../../constants";
import { useRef, useState, useEffect } from "react";
import { IoMdClose } from "react-icons/io";
import Text from "../Useful/Text";
import ModifiableTextBox from "../Useful/ModifiableTextBox";

const ErrorMessage = () => {
  return <div style={{ color: "red" }}>Cannot be empty</div>;
};

// bool passed = Uri.TryCreate(url, UriKind.Absolute, out Uri uriResult) && (uriResult.Scheme == Uri.UriSchemeHttp || uriResult.Scheme == Uri.UriSchemeHttps)

const RegAddSingleLine = ({
  enableNextButton,
  text,
  setText,
  title,
  placeholder,
}) => {
  const setTextAndEnable = (val) => {
    setText(val);
    // console.log(val);
    if (val) {
      // console.log("positive");
      enableNextButton(true);
    } else {
      enableNextButton(false);
    }
  };

  useEffect(() => {
    if (text) {
      enableNextButton(true);
    }
    return () => {
      enableNextButton(false);
    };
  }, []);

  return (
    <div
      style={{
        backgroundColor: background_purple,
        width: 600,
        height: 300,
        borderRadius: 10,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: 250,
          width: 600,
          marginLeft: 10,
        }}
      >
        <div style={{ width: 500 }}>
          <div style={{ marginBottom: 8 }}>
            <Text text={title} color={white} size={18} bold="bold" />
          </div>
          <ModifiableTextBox
            setCurrentValue={setTextAndEnable}
            currentValue={text}
            fontSize={13}
            placeholder={placeholder}
          />
        </div>
      </div>
    </div>
  );
};

export default RegAddSingleLine;
