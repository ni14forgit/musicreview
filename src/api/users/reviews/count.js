import {
  users_review_seenupdate,
  users_review_unopenedfeedbackcount,
  users_review_todoreviewcount,
} from "../../urls/URLS";

const seenupdate_review = async (submission_id) => {
  // console.log("seenupdate review called");
  const result = await fetch(users_review_seenupdate, {
    method: "POST",
    mode: "cors",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify({ submission_id: submission_id }),
  })
    .then((data) => data.json())
    .then((response) => {
      return response;
    });
  return result;
};

const getRequest = async (url) => {
  const result = await fetch(url, {
    method: "GET",
    mode: "cors",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
  })
    .then((data) => data.json())
    .then((response) => {
      return response;
    });
  return result;
};

const getUnopenedFeedbackCount = async () => {
  return await getRequest(users_review_unopenedfeedbackcount);
};

const getToDoReviewCount = async () => {
  return await getRequest(users_review_todoreviewcount);
};

export { seenupdate_review, getUnopenedFeedbackCount, getToDoReviewCount };
