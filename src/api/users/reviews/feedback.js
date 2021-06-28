import { users_review_submitfeedbackscore } from "../../urls/URLS";
const review_submitfeedbackscore = async (score, review_id) => {
  // console.log("submit feedback score called");
  const result = await fetch(users_review_submitfeedbackscore, {
    method: "POST",
    mode: "cors",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify({ score: score, review_id: review_id }),
  })
    .then((data) => data.json())
    .then((response) => {
      return response;
    });
  return result;
};

export { review_submitfeedbackscore };
