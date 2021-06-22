import { users_match } from "../urls/URLS";
const match = async (
  submission_id,
  submitted_genres,
  submitted_professions
) => {
  console.log("match users");
  const result = await fetch(users_match, {
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
      submitted_genres: submitted_genres,
      submitted_professions: submitted_professions,
    }),
  })
    .then((data) => data.json())
    .then((response) => {
      return response;
    });
  return result;
};

export { match };
