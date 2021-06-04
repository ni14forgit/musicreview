import { accounts_checkexistence } from "../urls/URLS";
const checkExistence = async (
  data = {
    email: "default_email",
    password: "default_password",
  }
) => {
  console.log("checkExistnce called");
  const doesUserExist = await fetch(accounts_checkexistence, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    // cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
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
    .then((response) => {
      console.log(response);
      console.log(response.userAlreadyExists);
      return response.userAlreadyExists;
    });

  return doesUserExist;

  // console.log(response)
};

export { checkExistence };
