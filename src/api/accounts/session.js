import {
  accounts_session_isloggedin,
  accounts_session_accesssongfeedback,
  accounts_session_accesssongtoreview,
} from "../urls/URLS";
const isLoggedIn = async () => {
  const result = await fetch(accounts_session_isloggedin, {
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

const canAccessSongFeedback = async (submission_id) => {
  // console.log("hi");
  const result = await fetch(accounts_session_accesssongfeedback, {
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

const canAccessSongToReview = async (submission_id, review_id) => {
  // console.log("hi");
  const result = await fetch(accounts_session_accesssongtoreview, {
    method: "POST",
    mode: "cors",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify({
      submission_id: submission_id,
      review_id: review_id,
    }),
  })
    .then((data) => data.json())
    .then((response) => {
      return response;
    });
  return result;
};

export { isLoggedIn, canAccessSongFeedback, canAccessSongToReview };
