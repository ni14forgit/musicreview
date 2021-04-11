import Popup from "reactjs-popup";
import { background_purple, purple, white } from "../../constants";
import { useRef, useState, useEffect } from "react";
import InvertedTextButton from "../Useful/InvertedTextButton";
import { IoMdClose } from "react-icons/io";
import Text from "../Useful/Text";
import CommentBox from "../Small/CommentBox";

// validURL checker taken from stackoverflow post
// function validURL(str) {
//     var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
//       '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
//       '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
//       '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
//       '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
//       '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
//     return !!pattern.test(str);
//   }

// bool passed = Uri.TryCreate(url, UriKind.Absolute, out Uri uriResult) && (uriResult.Scheme == Uri.UriSchemeHttp || uriResult.Scheme == Uri.UriSchemeHttps)

const ProfileEditSocialLink = ({ open, setPopUpOpen, links, setLinks }) => {
  const setSpotify = (val) => {
    const copyOfLinks = { ...links };
    copyOfLinks.spotify = val;
    setLinks(copyOfLinks);
  };
  const setSoundcloud = (val) => {
    const copyOfLinks = { ...links };
    copyOfLinks.soundcloud = val;
    setLinks(copyOfLinks);
  };
  const setInstagram = (val) => {
    const copyOfLinks = { ...links };
    copyOfLinks.instagram = val;
    setLinks(copyOfLinks);
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
            <IoMdClose color={white} size={23} />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: 450,
            width: 600,
            marginLeft: 10,
          }}
        >
          <div style={{ width: 500 }}>
            <div style={{ marginBottom: 8 }}>
              <Text
                text="Spotify Profile"
                color={white}
                size={18}
                bold="bold"
              />
            </div>
            <CommentBox
              currentValue={links.spotify}
              setCurrentValue={setSpotify}
            />
          </div>
          <div style={{ width: 500 }}>
            <div style={{ marginBottom: 8 }}>
              <Text
                text="Soundcloud Profile"
                color={white}
                size={18}
                bold="bold"
              />
            </div>
            <CommentBox
              currentValue={links.soundcloud}
              setCurrentValue={setSoundcloud}
            />
          </div>
          <div style={{ width: 500 }}>
            <div style={{ marginBottom: 8 }}>
              <Text
                text="Instagram Profile"
                color={white}
                size={18}
                bold="bold"
              />
            </div>
            <CommentBox
              currentValue={links.instagram}
              setCurrentValue={setInstagram}
            />
          </div>
        </div>
      </div>
    </Popup>
  );
};

export default ProfileEditSocialLink;
