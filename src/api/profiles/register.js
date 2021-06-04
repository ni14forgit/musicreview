import { upload_songs } from "../aws/upload/songs";
import { upload_photo } from "../aws/upload/photo";
import { profiles_register } from "../urls/URLS";

const register = async (profilephoto, songs, data) => {
  console.log("REGISTER called");
  const photoResult = await upload_photo(profilephoto);
  const songResult = await upload_songs(songs);
  data.profilephoto = photoResult;
  data.songs = songResult;
  console.log("photo/songs completed");
  console.log(data);
  const result = fetch(profiles_register, {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify(data),
  })
    .then((data) => data.json())
    .then((response) => {
      return response;
    });

  return result;
};

export { register };
