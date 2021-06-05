import {
  users_review_retrieve,
  users_review_statictotalretrieve,
} from "../../urls/URLS";
const retrieve_review = async (review_id) => {
  console.log("retrieve review called");
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

const retrieve_statictotalretrieve = async (review_ids) => {
  console.log("retrieve static total review called");
  const result = await fetch(users_review_statictotalretrieve, {
    method: "POST",
    mode: "cors",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify({ review_ids: review_ids }),
  })
    .then((data) => data.json())
    .then((response) => {
      return response;
    });
  return result;
};

export { retrieve_review, retrieve_statictotalretrieve };
