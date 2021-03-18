import { background_purple } from "../../constants";
import Text from "../Useful/Text";

const IndividualBullet = ({ text }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "horizontal",
        alignItems: "center",
        maxHeight: 25,
      }}
    >
      <div style={{ marginRight: 8 }}>
        <div
          style={{
            width: 10,
            height: 10,
            borderRadius: 5,
            backgroundColor: background_purple,
          }}
        ></div>
      </div>
      <div>
        <Text text={text} fontsize={16} color={background_purple} />
      </div>
      {/* lol */}
    </div>
  );
};
const InstructionsUI = ({ title, blurb, bullets }) => {
  return (
    <div
      style={{
        border: "2px solid " + background_purple,
        borderRadius: 5,
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 10,
        paddingBottom: 10,
      }}
    >
      <Text text={title} fontsize={17} bold="bold" color={background_purple} />
      <Text text={blurb} fontsize={14} color={background_purple} />

      {bullets.map((val, ind) => {
        return <IndividualBullet text={val} />;
      })}
    </div>
  );
};

export default InstructionsUI;
