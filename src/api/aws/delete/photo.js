import { aws_delete_photo } from "../../urls/URLS";
const delete_photo = async () => {
  console.log("delete photo called");
  const result = await fetch(aws_delete_photo, {
    method: "POST",
    mode: "cors",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify({ mock: "data" }),
  })
    .then((data) => data.json())
    .then((response) => {
      return response;
    });
  return result;
};

export { delete_photo };
