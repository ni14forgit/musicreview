import ProfileCommenter from "./ProfileCommenter";
import nish from "../../nish.jpg";
import TextButton from "../Useful/TextButton";
import { IoMdClose } from "react-icons/io";
import { white } from "../../constants";
const IndividualComment = ({ text, timestamp, photo, ind, deleteComment }) => {
  return (
    <div
      style={{
        marginLeft: "1px",
        display: "flex",
        flexDirection: "horizontal",
        alignItems: "center",
        // marginBottom: "1px",
        // border: "2px solid black",
      }}
    >
      <div style={{ width: 480 }}>
        <p
          style={{
            marginLeft: "1px",
            fontSize: 13,
            color: "white",
            // border: "2px solid black",
          }}
        >
          {text}
        </p>
      </div>
      <div style={{ width: "10%", marginBottom: -5, marginLeft: 10 }}>
        <IoMdClose color={white} size={20} onClick={() => deleteComment(ind)} />
      </div>
    </div>
  );
};

const QuestionsCommentsList = ({ comments, deleteComment }) => {
  return (
    //   <div className="scroll-list">
    <div className="frame">
      <ul
        id="scrollMe"
        style={{
          maxHeight: "200px",
          listStyleType: "none",
          marginLeft: "-40px",
          overflowY: "scroll",
          overflow: "scroll",
          overflowX: "hidden",
        }}
      >
        {comments.map((val, ind) => {
          return (
            <li id={"c" + ind} key={ind}>
              <IndividualComment
                key={ind}
                ind={ind}
                deleteComment={deleteComment}
                text={val.question}
                timestamp={val.uitimestamp}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default QuestionsCommentsList;
