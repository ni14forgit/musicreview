import { background_purple, purple, white } from "../../constants";
import Text from "../Useful/Text";
import ModifiableTextBox from "../Useful/ModifiableTextBox";
import { useEffect } from "react";

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

const RegAddSocialLink = ({ enableNextButton, links, setLinks }) => {
  useEffect(() => {
    enableNextButton(true);
    return () => {
      enableNextButton(false);
    };
  }, []);

  const setSpotify = (val) => {
    const copyOfLinks = { ...links };
    copyOfLinks.spotify = val;
    setLinks(copyOfLinks);

    if (
      instagramchecker(links.instagram) &&
      soundcloudchecker(links.soundcloud) &&
      spotifychecker(val)
    ) {
      enableNextButton(true);
    } else {
      enableNextButton(false);
    }
  };

  const setSoundcloud = (val) => {
    const copyOfLinks = { ...links };
    copyOfLinks.soundcloud = val;
    setLinks(copyOfLinks);

    if (
      instagramchecker(links.instagram) &&
      soundcloudchecker(val) &&
      spotifychecker(links.spotify)
    ) {
      enableNextButton(true);
    } else {
      enableNextButton(false);
    }
  };

  const setInstagram = (val) => {
    const copyOfLinks = { ...links };
    copyOfLinks.instagram = val;
    setLinks(copyOfLinks);

    if (
      instagramchecker(val) &&
      soundcloudchecker(links.soundcloud) &&
      spotifychecker(links.spotify)
    ) {
      enableNextButton(true);
    } else {
      enableNextButton(false);
    }
  };

  return (
    <div
      style={{
        backgroundColor: background_purple,
        width: 600,
        height: 350,
        borderRadius: 10,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          width: "100%",
          marginLeft: 10,
        }}
      >
        <div style={{ width: 500, marginBottom: 20 }}>
          <div style={{ marginBottom: 8 }}>
            <Text text="Spotify Profile" color={white} size={18} bold="bold" />
          </div>
          <ModifiableTextBox
            currentValue={links.spotify}
            setCurrentValue={setSpotify}
            fontSize={13}
            placeholder="spotify profile"
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
          <ModifiableTextBox
            currentValue={links.soundcloud}
            setCurrentValue={setSoundcloud}
            fontSize={13}
            placeholder="soundcloud profile"
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
          <ModifiableTextBox
            currentValue={links.instagram}
            setCurrentValue={setInstagram}
            fontSize={13}
            placeholder="instagram profile"
          />
          {instagramchecker(links.instagram) ? null : <ErrorMessage />}
        </div>
      </div>
    </div>
  );
};

export default RegAddSocialLink;
