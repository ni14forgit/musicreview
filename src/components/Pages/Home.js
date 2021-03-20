import { background_purple } from "../../constants";
import Text from "../Useful/Text";
import Header from "../Navigation/Header";
import StaticProfileCommenter from "../Small/StaticProfileCommenter";

const Home = ({ list_of_artist_ids }) => {
  return (
    <div>
      <Header />
      <div style={{ marginLeft: 20 }}>
        <div style={{ marginBottom: 40 }}>
          <Text
            text="Recent Submissions"
            color={background_purple}
            fontsize={24}
            bold={"bold"}
          />
        </div>
        <div style={{ marginBottom: 40 }}>
          <Text
            text="Recent Reviews"
            color={background_purple}
            fontsize={24}
            bold={"bold"}
          />
        </div>
        <div style={{ marginBottom: 20 }}>
          <Text
            text="Artists you've met!"
            color={background_purple}
            fontsize={24}
            bold={"bold"}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "horizontal",
              marginTop: 13,
            }}
          >
            {list_of_artist_ids.map((val, ind) => {
              return (
                <div style={{ marginRight: 6 }}>
                  <StaticProfileCommenter photo={val} size={28} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
