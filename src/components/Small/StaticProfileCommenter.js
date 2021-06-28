import { useHistory, Route, Switch } from "react-router-dom";
const StaticProfileCommenter = ({ size, photo, user_id }) => {
  const history = useHistory();
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "horizontal",
        alignContent: "center",
        alignItems: "center",
        // border: "2px solid black",
      }}
    >
      <div
        style={{
          width: size,
          height: size,
          borderRadius: size / 2,
          opacity: 1,
          zIndex: 100,
          marginRight: 5,
          overflow: "hidden",
          //   marginTop: calculated_margin,
        }}
      >
        <img
          style={{
            width: size,
            height: size,
            borderRadius: size / 2,
            overflow: "hidden",
            opacity: 1,
            zIndex: 100,
          }}
          src={photo}
          // onClick={() => console.log("testagsadgsfg")}
          onClick={() =>
            user_id ? history.push("/visitprofile/" + user_id) : null
          }
        ></img>
      </div>
    </div>
  );
};

export default StaticProfileCommenter;
