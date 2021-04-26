import { background_purple } from "../../../constants";
import SmallArtistCard from "./SmallArtistCard";

const FacebookFriends = ({ people }) => {
  return (
    <div
      style={{
        // border: `4px solid ${background_purple}`,
        borderRadius: 10,
        width: "100%",
        padding: "12px 12px 12px 0px",
        display: "flex",
        flexDirection: "horizontal",
        flexWrap: "wrap",
      }}
    >
      {people.map((val, ind) => {
        return (
          <div
            style={{
              marginRight: 8,
              marginBottom: 12,
              //   border: "2px solid black",
            }}
          >
            <SmallArtistCard
              size={105}
              photo={val}
              name={"artist #1 dfdfhd "}
              borderRadius={10}
              onClick={() => console.log("hi")}
            />
          </div>
        );
      })}
    </div>
  );
};

export default FacebookFriends;
