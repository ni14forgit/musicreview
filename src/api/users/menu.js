import { users_menu_feeback, users_menu_musictoreview } from "../urls/URLS";

const getRequest = async (url) => {
  const result = await fetch(url, {
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

const feedback_menu = async () => {
  return await getRequest(users_menu_feeback);
};

const musictoreview_menu = async () => {
  return await getRequest(users_menu_musictoreview);
};

export { feedback_menu, musictoreview_menu };
