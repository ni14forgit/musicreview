import {
  users_review_retrieve,
  users_review_statictotalretrieve,
} from "../../urls/URLS";
const retrieve_review = async (review_id) => {
  // console.log("retrieve review called");
  const result = await fetch(users_review_retrieve, {
    method: "POST",
    mode: "cors",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify({ review_id: review_id }),
  })
    .then((data) => data.json())
    .then((response) => {
      return response;
    });
  return result;
};

const getWithSubmissionID = async (url, submission_id) => {
  const result = await fetch(url, {
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

const retrieve_statictotalretrieve = async (submission_id) => {
  // console.log("retrieve static total review called");
  return await getWithSubmissionID(
    users_review_statictotalretrieve,
    submission_id
  );
};

// const retrieve_statictotalretrieve = async (submission_id) => {
//   console.log("last seen called");
//   return await getWithSubmissionID(
//     users_review_statictotalretrieve,
//     submission_id
//   );
// };

export { retrieve_review, retrieve_statictotalretrieve };
