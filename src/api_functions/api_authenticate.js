import upload_songs from "./upload/api_upload_songs";
import upload_photo from "./upload/api_upload_photo";

const login = (data = { email: "hi", password: "si" }) => {
  console.log("LOGIN called");
  fetch("http://localhost:4000/api/users/login", {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
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
    .then((response) => console.log(response));

  // console.log(response)
};

const checkExistence = async (
  data = {
    email: "default_email",
    password: "default_password",
  }
) => {
  console.log("checkExistnce called");
  const doesUserExist = await fetch(
    "http://localhost:4000/api/users/checkexistence",
    {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      // body data type must match "Content-Type" header
      body: JSON.stringify(data),
    }
  )
    .then((data) => data.json())
    .then((response) => {
      console.log(response);
      console.log(response.userAlreadyExists);
      return response.userAlreadyExists;
    });

  return doesUserExist;

  // console.log(response)
};

const register = async (profilephoto, songs, data) => {
  console.log("REGISTER called");
  const photoResult = await upload_photo(profilephoto);
  const songResult = await upload_songs(songs);
  data.profilephoto = photoResult;
  data.songs = songResult;
  console.log("photo/songs completed");
  console.log(data);
  fetch("http://localhost:4000/api/users/register", {
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
    .then((response) => console.log(response));
};

export { login, register, checkExistence };
