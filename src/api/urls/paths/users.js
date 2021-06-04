import { USERS_URL } from "./BASE";

// SUBMISSION

const USERS_SUBMISSION = USERS_URL + "/submissions";
const users_submission_submit = USERS_SUBMISSION + "/submit";
const users_submission_retrieve = USERS_SUBMISSION + "/retrieve";

const USERS_REVIEW = USERS_URL + "/reviews";
const users_review_submit = USERS_REVIEW + "/submit";
const users_review_retrieve = USERS_REVIEW + "/retrieve";

export {
  users_submission_retrieve,
  users_submission_submit,
  users_review_retrieve,
  users_review_submit,
};
