import Switch from "react-switch";
import StaticProfileCommenter from "./StaticProfileCommenter";
const ToggleCommenter = ({ onChange, selected, photo, user_id }) => {
  const size = 25;
  return (
    <div style={{ display: "flex", flexDirection: "horizontal" }}>
      <StaticProfileCommenter photo={photo} size={size} user_id={user_id} />
      <Switch
        onChange={onChange}
        checked={selected}
        onColor="#FFFFFF"
        offColor="#FFFFFF"
        onHandleColor="#a54ac5"
        offHandleColor="#afacb0"
        // checkedIcon={false}
        // uncheckedIcon={false}
        // handleDiameter={20}
        height={13}
        handleDiameter={25}
        width={40}
      />
    </div>
  );
};

export default ToggleCommenter;
