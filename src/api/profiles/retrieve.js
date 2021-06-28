import { profiles_retrieve, profiles_retrieve_other } from "../urls/URLS";

const retrieve_profile = async () => {
  // console.log("get profile called");
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

const retrieve_other_profile = async (user_id) => {
  const result = await fetch(profiles_retrieve_other, {
    method: "POST",
    mode: "cors",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify({ userId: user_id }),
  })
    .then((data) => data.json())
    .then((response) => {
      return response;
    });
  return result;
};

export { retrieve_profile, retrieve_other_profile };
