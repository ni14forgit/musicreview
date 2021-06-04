import { upload_songs } from "../../aws/upload/songs";
import { users_submission_submit } from "../../urls/URLS";
// import { upload_photo } from "../aws/upload/photo";

const submit_music = async (
  song,
  questions,
  genres,
  preferredProfessions,
  date
) => {
  console.log("submit music called");
  const songResult = await upload_songs([song]);
  const result = fetch(users_submission_submit, {
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
      song: songResult.songs[0],
      questions: questions,
      genres: genres,
      preferredProfessions: preferredProfessions,
      date: date,
    }),
  })
    .then((data) => data.json())
    .then((response) => {
      return response;
    });

  return result;
};

export { submit_music };
