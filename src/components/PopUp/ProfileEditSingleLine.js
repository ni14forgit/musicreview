import Popup from "reactjs-popup";
import { background_purple, purple, white } from "../../constants";
import { useRef, useState, useEffect } from "react";
import InvertedTextButton from "../Useful/InvertedTextButton";
import { IoMdClose } from "react-icons/io";
import Text from "../Useful/Text";
import CommentBox from "../Small/CommentBox";

const ErrorMessage = () => {
  return <div style={{ color: "red" }}>Cannot be empty</div>;
};

// bool passed = Uri.TryCreate(url, UriKind.Absolute, out Uri uriResult) && (uriResult.Scheme == Uri.UriSchemeHttp || uriResult.Scheme == Uri.UriSchemeHttps)

const ProfileEditSingleLine = ({
  open,
  setPopUpOpen,
  text,
  setText,
  title,
}) => {
  const [staleText, setStaleText] = useState(null);

  useEffect(() => {
    setStaleText(JSON.parse(JSON.stringify(text)));
    return () => {
      setStaleText(JSON.parse(JSON.stringify(text)));
    };
  }, [open]);

  const closeAndRestore = () => {
    setText(staleText);
    setPopUpOpen(false);
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
            <CommentBox currentValue={text} setCurrentValue={setText} />
            {text ? null : <ErrorMessage />}
          </div>
        </div>
        {text ? (
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

export default ProfileEditSingleLine;
