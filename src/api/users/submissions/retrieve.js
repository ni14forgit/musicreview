import { users_submission_retrieve } from "../../urls/URLS";

const retrieve_submission = async (submission_id) => {
  const result = fetch(users_submission_retrieve, {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify({
      submission_id: submission_id,
    }),
  })
    .then((data) => data.json())
    .then((response) => {
      return response;
    });

  return result;
};

export { retrieve_submission };
