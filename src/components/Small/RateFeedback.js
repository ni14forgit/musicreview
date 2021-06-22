import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { BsStarHalf } from "react-icons/bs";
import { FaStarHalfAlt } from "react-icons/fa";
import { background_purple } from "../../constants";
import Text from "../Useful/Text";
import { useState, useEffect } from "react";
import TextButton from "../Useful/TextButton";
import { review_submitfeedbackscore } from "../../api/users/reviews/feedback";

//DELETE THIS FILE, SHOULD BE BROKEN DOWN
const RateFeedback = ({ score, name, setScore, review_id }) => {
  const [buttonShows, setButtonShows] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  // const [scoreToAdd, setScoreToAdd] = useState(null);

  useEffect(() => {
    if (score > 0) {
      setButtonDisabled(true);
    }
  }, []);

  const starClicked = (val) => {
    if (!buttonDisabled) {
      setButtonShows(true);
      setScore(val);
    }
  };

  const submitFeedbackScore = async () => {
    // submit score!

    await review_submitfeedbackscore(score, review_id);

    setButtonShows(false);
    setButtonDisabled(true);
  };

  return (
    <div>
      <Text
        text={"Rate " + name + "'s feedback"}
        color={background_purple}
        fontsize={13}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "horizontal",
          marginTop: 4,
          marginLeft: -2,
        }}
      >
        {score > 0
          ? [1, 2, 3, 4, 5].map((val, ind) => {
              if (score >= val) {
                return (
                  <AiFillStar
                    size={18}
                    color={background_purple}
                    onClick={() => starClicked(val)}
                  />
                );
              } else {
                return (
                  <AiOutlineStar
                    size={18}
                    color={background_purple}
                    onClick={() => starClicked(val)}
                  />
                );
              }
            })
          : [1, 2, 3, 4, 5].map((val) => {
              return (
                <div style={{ marginRight: 1 }}>
                  <FaStarHalfAlt
                    size={17}
                    color={background_purple}
                    onClick={() => starClicked(val)}
                  />
                </div>
              );
            })}
      </div>
      {buttonShows ? (
        <TextButton text="Submit Rating" onClick={submitFeedbackScore} />
      ) : null}
    </div>
  );
};

export default RateFeedback;
