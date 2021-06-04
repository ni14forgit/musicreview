import { accounts_login } from "../urls/URLS";
const login = async (data = { email: "hi", password: "si" }) => {
  console.log("LOGIN called");
  console.log(accounts_login);
  const result = await fetch(accounts_login, {
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
      // console.log(response);
      return response;
    });

  // console.log(response)
  return result;
};

export { login };
