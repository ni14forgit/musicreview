import Popup from "reactjs-popup";
import { background_purple, purple, white } from "../../constants";
import { useRef, useState, useEffect } from "react";
import InvertedTextButton from "../Useful/InvertedTextButton";
import { IoMdClose } from "react-icons/io";
import Text from "../Useful/Text";
import ToggleSelectOption from "../Useful/ToggleSelectOption";
import { FaIndent } from "react-icons/fa";

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

const ProfileAddSelectedOptions = ({
  open,
  setPopUpOpen,
  selectedOptions,
  setSelectedOptions,
  title,
  constantCategories,
}) => {
  const [staleOptions, setStaleOptions] = useState(null);

  useEffect(() => {
    setStaleOptions(JSON.parse(JSON.stringify(selectedOptions)));
    return () => {
      setStaleOptions(JSON.parse(JSON.stringify(selectedOptions)));
    };
  }, [open]);

  const closeAndRestore = () => {
    setSelectedOptions(staleOptions);
    setPopUpOpen(false);
  };

  const toggleOption = (ind) => {
    const copyOfSelectedOptions = [...selectedOptions];
    copyOfSelectedOptions[ind] = !copyOfSelectedOptions[ind];
    setSelectedOptions(copyOfSelectedOptions);
  };

  return (
    <Popup
      open={open}
      onClose={() => {
        setPopUpOpen(false);
      }}
    >
      <div
        style={{
          backgroundColor: purple,
          width: 600,
          height: 550,
          borderRadius: 10,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "horizontal",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <div style={{ marginLeft: 15, marginTop: 10 }}>
            <IoMdClose color={white} size={23} onClick={closeAndRestore} />
          </div>
        </div>
        <div
          style={{
            height: 250,
            width: 600,
            marginLeft: 10,
          }}
        >
          <div style={{ width: 500 }}>
            <div style={{ marginBottom: 8 }}>
              <Text text={title} color={white} size={18} bold="bold" />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "horizontal",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {constantCategories.map((val, ind) => {
                return (
                  <ToggleSelectOption
                    text={val}
                    selected={selectedOptions[ind]}
                    onClick={() => toggleOption(ind)}
                  />
                );
              })}
            </div>

            {!isNothingSelected(selectedOptions) ? null : <ErrorMessage />}
          </div>
        </div>
        {!isNothingSelected(selectedOptions) ? (
          <div
            style={{
              display: "flex",
              flexDirection: "horizontal",
              justifyContent: "flex-end",
            }}
          >
            <div style={{ marginRight: 15 }}>
              <InvertedTextButton
                text="Save"
                onClick={() => setPopUpOpen(false)}
              />
            </div>
          </div>
        ) : null}
      </div>
    </Popup>
  );
};

export default ProfileAddSelectedOptions;
