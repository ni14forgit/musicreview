import { profiles_retrieve } from "../urls/URLS";

const retrieve_profile = async () => {
  console.log("get profile called");
  const result = await fetch(profiles_retrieve, {
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

export { retrieve_profile };
