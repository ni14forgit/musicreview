import { users_review_submit } from "../../urls/URLS";

const submit_review = async (
  review_id,
  deletedComments,
  overview,
  comments
) => {
  // console.log("submit review called");
  const result = await fetch(users_review_submit, {
    method: "POST",
    mode: "cors",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify({
      review_id: review_id,
      deletedComments: deletedComments,
      overview: overview,
      comments: comments,
    }),
  })
    .then((data) => data.json())
    .then((response) => {
      return response;
    });
  return result;
};

export { submit_review };
