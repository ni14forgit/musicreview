import { users_review_retrieve } from "../../urls/URLS";
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

export { retrieve_review };
