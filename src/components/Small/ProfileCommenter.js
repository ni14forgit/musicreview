const ProfileCommenter = ({ profile_source, size, ind, showComment }) => {
  return (
    <div
      onClick={() => showComment(ind)}
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        opacity: 1,
        zIndex: 100,
        //   marginTop: calculated_margin,
      }}
    >
      <img
        style={{
          width: 20,
          height: 20,
          borderRadius: 10,
          opacity: 1,
          zIndex: 100,
        }}
        src={profile_source}
      ></img>
    </div>
  );

  // add another if statement for 2 or more, build out the UI
};

export default ProfileCommenter;
