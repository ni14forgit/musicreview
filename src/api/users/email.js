import {
  users_email_onsubmission,
  users_email_onreviewupdate,
} from "../urls/URLS";
const send_email_onsubmission = async (
  reviews,
  submission_id,
  submitterName,
  submitterEmail
) => {
  const result = await fetch(users_email_onsubmission, {
    method: "POST",
    mode: "cors",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify({
      reviews: reviews,
      submission_id: submission_id,
      submitterName: submitterName,
      submitterEmail: submitterEmail,
    }),
  })
    .then((data) => data.json())
    .then((response) => {
      return response;
    });
  return result;
};

const send_email_onreviewupdate = async (reviewerName, submitterEmail) => {
  const result = await fetch(users_email_onreviewupdate, {
    method: "POST",
    mode: "cors",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify({
      reviewerName: reviewerName,
      submitterEmail: submitterEmail,
    }),
  })
    .then((data) => data.json())
    .then((response) => {
      return response;
    });
  return result;
};

export { send_email_onsubmission, send_email_onreviewupdate };
