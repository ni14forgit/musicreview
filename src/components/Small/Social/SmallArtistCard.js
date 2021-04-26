import Text from "../../Useful/Text";

const SmallArtistCard = ({ size, photo, name, borderRadius = 10, onClick }) => {
  return (
    <div onClick={onClick}>
      <div
        style={{
          display: "flex",
          justifyContent: "horizontal",
          alignContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: size,
            height: size,
            borderRadius: borderRadius,
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
              borderRadius: borderRadius,
              overflow: "hidden",
              opacity: 1,
              zIndex: 100,
            }}
            src={photo}
          ></img>
        </div>
      </div>
      <div
        style={{
          marginTop: 6,
          marginLeft: 4,
          width: "79%",
          //   border: "2px solid black",
        }}
      >
        <Text text={name} color="black" fontsize={11} bold={"bold"} />
      </div>
    </div>
  );
};

export default SmallArtistCard;
