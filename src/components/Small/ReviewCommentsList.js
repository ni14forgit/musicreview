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
      }}
    >
      <div style={{ width: "90%" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "horizontal",
            //   border: "2px solid black",
          }}
        >
          <ProfileCommenter profile_source={nish} size={15} />
          <p
            style={{
              marginLeft: "10px",
              fontSize: 11,
              color: "white",
              fontWeight: "bold",
              textAlign: "top",
              marginTop: "0px",
            }}
          >
            @{timestamp}
          </p>
        </div>
        <p
          style={{
            marginTop: "0px",
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

const CommentsList = ({ comments, deleteComment }) => {
  //   const refs = comments.reduce((acc, value, ind) => {
  //     acc[ind] = createRef();
  //     return acc;
  //   }, {});

  //   const handleClick = (id) => {
  //     var target = document.getElementById(id);
  //     skrollTop.scrollTo({
  //       element: document.getElementById("scrollMe"),
  //       to: target.offsetTop,
  //       duration: 1000,
  //       callback: function () {
  //         console.log("va");
  //       },
  //     });
  //   };

  return (
    //   <div className="scroll-list">
    <div className="frame" style={{ height: "100px" }}>
      <ul
        id="scrollMe"
        style={{
          maxHeight: "100px",
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

export default CommentsList;
