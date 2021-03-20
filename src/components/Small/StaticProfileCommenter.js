const StaticProfileCommenter = ({ size, photo }) => {
  return (
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
          borderRadius: size / 2,
          opacity: 1,
          zIndex: 100,
          marginRight: 5,
          //   marginTop: calculated_margin,
        }}
      >
        <img
          style={{
            width: size,
            height: size,
            borderRadius: size / 2,
            opacity: 1,
            zIndex: 100,
          }}
          src={photo}
        ></img>
      </div>
    </div>
  );
};

export default StaticProfileCommenter;
