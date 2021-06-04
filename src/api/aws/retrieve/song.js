const retrieve_song = async () => {
  //   console.log(song);
  console.log("Retrieve SONG called");
  const data = await fetch("http://localhost:4000/users/retrievesong", {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    // body data type must match "Content-Type" header
    body: JSON.stringify({ hi: 5 }),
  })
    .then((data) => data.json())
    .then((response) => {
      console.log(response);
      return response;
    });
  //   console.log(data.photo.Body);
  return data.photo;
};

export { retrieve_song };
