import { upload_songs } from "../aws/upload/songs";
import { upload_photo } from "../aws/upload/photo";
import { profiles_register } from "../urls/URLS";

const register = async (profilephoto, songs, data) => {
  // console.log("REGISTER called");
  const photoResult = await upload_photo(profilephoto);
  const songResult = await upload_songs(songs);
  data.profilephoto = photoResult;
  data.songs = songResult;
  // console.log("photo/songs completed");
  // console.log(data);
  const result = fetch(profiles_register, {
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
    body: JSON.stringify(data),
  })
    .then((data) => data.json())
    .then((response) => {
      return response;
    });

  return result;
};

export { register };
