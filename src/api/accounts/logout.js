import { accounts_logout } from "../urls/URLS";
const logout = async () => {
  // console.log("hi");
  const result = await fetch(accounts_logout, {
    method: "POST",
    mode: "cors",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify({}),
  })
    .then((data) => data.json())
    .then((response) => {
      return response;
    });
  return result;
};

export { logout };
