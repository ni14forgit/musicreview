import Popup from "reactjs-popup";
import { background_purple, purple, white } from "../../constants";
import { useRef, useState, useEffect } from "react";
import InvertedTextButton from "../Useful/InvertedTextButton";
import { IoMdClose } from "react-icons/io";
import Text from "../Useful/Text";
import CommentBox from "../Small/CommentBox";

// validURL checker taken from stackoverflow post
function validURL(str) {
  var pattern = new RegExp(
    "^(https?:\\/\\/)?" + // protocol
      "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
      "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
      "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
      "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
      "(\\#[-a-z\\d_]*)?$",
    "i"
  ); // fragment locator
  return !!pattern.test(str);
}

const ErrorMessage = () => {
  return <div style={{ color: "red" }}>Not a valid URL</div>;
};

const spotifychecker = (spotify_link) => {
  return (
    (validURL(spotify_link) && spotify_link.includes("spotify.com")) ||
    !spotify_link
  );
};

const soundcloudchecker = (soundcloud_link) => {
  return (
    (validURL(soundcloud_link) && soundcloud_link.includes("soundcloud.com")) ||
    !soundcloud_link
  );
};

const instagramchecker = (instagram_link) => {
  return (
    (validURL(instagram_link) && instagram_link.includes("instagram.com")) ||
    !instagram_link
  );
};

// bool passed = Uri.TryCreate(url, UriKind.Absolute, out Uri uriResult) && (uriResult.Scheme == Uri.UriSchemeHttp || uriResult.Scheme == Uri.UriSchemeHttps)

const ProfileEditSocialLink = ({
  open,
  setPopUpOpen,
  links,
  setLinks,
  api_edit_call,
}) => {
  const [staleLinks, setstaleLinks] = useState(null);

  const saveFunc = () => {
    api_edit_call(links);
    setPopUpOpen(false);
  };

  useEffect(() => {
    const myCopy = { ...links };
    setstaleLinks(JSON.parse(JSON.stringify(myCopy)));
    console.log("hshshshshh");
    return () => {
      setstaleLinks(JSON.parse(JSON.stringify(myCopy)));
    };
  }, [open]);

  const closeAndRestore = () => {
    const copyOfLinks = { ...staleLinks };
    console.log("copy of links \n");
    console.log(copyOfLinks);
    setLinks(copyOfLinks);
    setPopUpOpen(false);
  };

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
            <IoMdClose color={white} size={23} onClick={closeAndRestore} />
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
          <div style={{ width: 500, marginBottom: 20 }}>
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
            {spotifychecker(links.spotify) ? null : <ErrorMessage />}
          </div>
          <div style={{ width: 500, marginBottom: 20 }}>
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
            {soundcloudchecker(links.soundcloud) ? null : <ErrorMessage />}
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
            {instagramchecker(links.instagram) ? null : <ErrorMessage />}
          </div>
        </div>
        {instagramchecker(links.instagram) &&
        soundcloudchecker(links.soundcloud) &&
        spotifychecker(links.spotify) ? (
          <div
            style={{
              display: "flex",
              flexDirection: "horizontal",
              justifyContent: "flex-end",
            }}
          >
            <div style={{ marginRight: 15 }}>
              <InvertedTextButton text="Save" onClick={saveFunc} />
            </div>
          </div>
        ) : null}
      </div>
    </Popup>
  );
};

export default ProfileEditSocialLink;
