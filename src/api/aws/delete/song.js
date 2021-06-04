import { aws_delete_song } from "../../urls/URLS";
const delete_song = async (song_id) => {
  console.log("delete song called");
  const result = await fetch(aws_delete_song, {
    method: "POST",
    mode: "cors",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify({ songid: song_id }),
  })
    .then((data) => data.json())
    .then((response) => {
      return response;
    });
  return result;
};

export { delete_song };
