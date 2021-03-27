import { background_purple, purple, white } from "../../../constants";
import Text from "../../Useful/Text";

const ArtistCard = ({ name, genre, profession, image }) => {
  const width = 230;
  const height = 280;
  var bottomMargin = Math.ceil(name.length / 25) * 32 + 58;
  return (
    <div
      // onClick={newOnClick}
      style={{
        width: width,
        height: height,
        marginRight: "2vw",
        marginBottom: "2vh",
      }}
    >
      <div
        style={{
          backgroundSize: "cover",
          backgroundImage: `url(${image})`,
          width: width,
          height: height,
          borderRadius: 10,
          // position: "absolute",
        }}
      >
        <div
          style={{
            // position: "absolute",
            height: height,
            width: width,
            backgroundColor: purple,
            zIndex: "100",
            opacity: "0.5",
            borderRadius: 10,
          }}
        />
        <div
          style={{
            zIndex: "201",
            position: "absolute",
            // paddingTop: 235,
            // paddingTop: -50,
            marginTop: -bottomMargin,
            width: 270,
            // height: "auto",
            height: 0,
            // border: "2px solid black",
            flexDirection: "column",
            textAlign: "left",
            alignItems: "flex-end",
            paddingLeft: "20px",
            paddingRight: "10px",
            justifyContent: "flex-end",
          }}
        >
          <Text text={name} color={white} fontsize={20} bold="bold" />
        </div>
        <div
          style={{
            zIndex: "201",
            position: "absolute",
            // paddingTop: 235,
            // paddingTop: -50,
            marginTop: -60,
            width: 270,
            // height: "auto",
            height: 0,
            // border: "2px solid black",
            flexDirection: "column",
            textAlign: "left",
            alignItems: "flex-end",
            paddingLeft: "20px",
            paddingRight: "10px",
            justifyContent: "flex-end",
          }}
        >
          <div style={{ marginBottom: 10 }}>
            <Text text={profession} color={white} fontsize={14} bold="bold" />
          </div>
          <div>
            <Text text={genre} color={white} fontsize={14} bold="bold" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtistCard;
