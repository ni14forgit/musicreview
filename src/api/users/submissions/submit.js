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
  // console.log("submit music called");
  const songResult = await upload_songs([song]);
  const result = fetch(users_submission_submit, {
    // method: "POST",
    // mode: "cors",
    // cache: "no-cache",
    // credentials: "same-origin",
    // headers: {
    //   "Content-Type": "application/json",
    // },
    // redirect: "follow",
    // referrerPolicy: "no-referrer",
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    // cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "include", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    // body data type must match "Content-Type" header
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
