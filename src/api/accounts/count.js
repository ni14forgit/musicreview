import { accounts_count } from "../urls/URLS";
const count = async () => {
  const result = await fetch(accounts_count, {
    method: "GET",
    mode: "cors",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
  })
    .then((data) => data.json())
    .then((response) => {
      return response;
    });
  return result;
};

export { count };
