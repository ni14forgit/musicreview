import ProfileCommenter from "./ProfileCommenter";
import nish from "../../nish.jpg";
import TextButton from "../Useful/TextButton";
// import { createRef } from "react";
// import skrollTop from "skrolltop";
// import "./scroll";
// import "./CommentsList.css";
const IndividualComment = ({ text, timestamp, photo, ind, deleteComment }) => {
  return (
    <div
      style={{
        marginLeft: "1px",
        display: "flex",
        flexDirection: "horizontal",
        alignItems: "center",
        // marginBottom: "1px",
      }}
    >
      <div style={{ width: "90%" }}>
        <p
          style={{
            marginLeft: "1px",
            fontSize: 11,
            color: "white",
            //   border: "2px solid black",
          }}
        >
          {text}
        </p>
      </div>
      <div style={{ width: "10%" }}>
        <TextButton text="x" onClick={() => deleteComment(ind)} />
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
          // ref={refs[ind]
          return (
            <li id={"c" + ind} key={ind}>
              <IndividualComment
                key={ind}
                ind={ind}
                deleteComment={deleteComment}
                text={val.comment}
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
