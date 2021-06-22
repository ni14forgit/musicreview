import { background_purple, purple } from "../../constants";
import Text from "../Useful/Text";
const MainScreen = () => {
  return (
    <div>
      <div></div>
      <div
        style={{
          marginLeft: 50,
          marginTop: 50,
          //   border: "2px solid black",
        }}
      >
        <div
          style={
            {
              //   marginLeft: 50,
              //   marginTop: 50,
              //   border: "2px solid black",
            }
          }
        >
          <Text text={"noname"} color={purple} fontsize={50} bold={"bold"} />
          <div style={{ maxWidth: 650, marginTop: 20 }}>
            <Text
              text={
                "submit the song you want to release on streaming platforms, and our system will select artists in our community to review your music."
              }
              color={"black"}
              fontsize={20}
              bold={"bold"}
            />
          </div>
          {/* <div
          style={{
            justifyContent: "center",
            flexDirection: "horizontal",
            alignItems: "center",
            display: "flex",
            marginTop: 20,
            // border: "2px solid black",
          }}
        >
          <Text
            text={
              "submit the song you want to release on streaming platforms, and our system will select artists in our community to review your music"
            }
            color={background_purple}
            fontsize={17}
          />
        </div> */}
        </div>

        <div style={{ marginTop: 40 }}>
          <Text
            text="Timestamped Comments"
            color={background_purple}
            fontsize={20}
            bold={"bold"}
          />
        </div>

        {/* Title: Timestamped Comments  */}
        {/* Add auto replayable video of comments on your song, left side of website  */}

        <div
          style={{
            marginTop: 40,
            //   textAlign: "right",
            display: "flex",
            flexDirection: "horizontal",
            justifyContent: "flex-end",
            alignItems: "flex-end",
            //   border: "2px solid black",
            marginRight: 50,
          }}
        >
          <Text
            text="Finding the best-fit reviewer"
            color={background_purple}
            fontsize={20}
            bold={"bold"}
          />
        </div>
        {/* Title: Finding the best fit reviewer  */}
        {/* Add auto replayable video of selecting genres/professions */}

        {/* Songs stored securely */}

        {/* Add auto replayable video of comments on your song, left side of website  */}
        {/* Number of reviews made, number of song submitted, number of artists on the platform */}
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "horizontal",
          justifyContent: "center",
          marginTop: 50,
        }}
      >
        <Text
          text="Songs stored securely."
          color={"black"}
          fontsize={18}
          bold={"bold"}
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "horizontal",
          justifyContent: "center",
          marginTop: 50,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            marginLeft: 30,
            marginRight: 30,
          }}
        >
          <Text
            text="# of artists"
            color={background_purple}
            fontsize={25}
            bold="bold"
          />
          <Text text="5" color={background_purple} fontsize={25} bold="bold" />
        </div>
        <div
          style={{
            marginTop: -20,
            width: 5,
            height: 90,
            backgroundColor: background_purple,
          }}
        ></div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            marginLeft: 30,
            marginRight: 30,
          }}
        >
          <Text
            text="# of submissions"
            color={background_purple}
            fontsize={25}
            bold="bold"
          />
          <Text text="5" color={background_purple} fontsize={25} bold="bold" />
        </div>

        <div
          style={{
            marginTop: -20,
            width: 5,
            height: 90,
            backgroundColor: background_purple,
          }}
        ></div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            marginLeft: 30,
            marginRight: 30,
          }}
        >
          <Text
            text="# of reviews"
            color={background_purple}
            fontsize={25}
            bold="bold"
          />
          <Text text="5" color={background_purple} fontsize={25} bold="bold" />
        </div>
      </div>
    </div>
  );
};

export default MainScreen;
